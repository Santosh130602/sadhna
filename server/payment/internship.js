


const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const InternTransaction = require('../models/internshipPayment'); 



router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100, 
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
            payment_capture: 1,
        };

        instance.orders.create(options, (error, order) => {
            if (error) {
                return res.status(500).json({ message: "Something went wrong!" });
            }
            res.status(200).json({ data: order });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});



router.post("/verify", async (req, res) => {
    try {
        const { razorpay_orderID, razorpay_paymentID, razorpay_signature, userID, amount, appliedFor} = req.body;

        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const resultSign = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === resultSign) {
            let transaction = await InternTransaction.findOne({ orderId: razorpay_orderID });

            if (!transaction) {
                transaction = new InternTransaction({
                    userId: userID,
                    orderId: razorpay_orderID,
                    paymentId: razorpay_paymentID,
                    signature: razorpay_signature,
                    amount: amount,
                    appliedFor: appliedFor,
                    status: "successful", 
                });
            } else {
                transaction.status = "successful";
                transaction.paymentId = razorpay_paymentID;
                transaction.signature = razorpay_signature;
            }

            await transaction.save();

            return res.status(200).json({ message: "Payment verified and transaction status updated to successful" });
        } else {
            return res.status(400).json({ message: "Payment verification failed" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

module.exports = router;





