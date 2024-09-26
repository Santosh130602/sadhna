// const express = require("express");
// const cors = require("cors");
// const crypto = require("crypto");
// const axios = require("axios");
// const bodyParser = require("body-parser");

// const { default: axios } = require("axios");



// require("dotenv").config();


// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({
//     extended: false
// }));
// app.use(cors());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));



// let salt_key = process.env.SALT_KEY
// let merchant_id = process.env.MERCHANT_ID

// app.get("/", (req, res) => {
//     res.send("server is running");
// })


// app.post("/order", async (req, res) => {

//     try {
//         console.log(req.body)

//         const merchantTransactionId = req.body.transactionId;
//         const data = {
//             merchantId: merchant_id,
//             merchantTransactionId: merchantTransactionId,
//             merchantUserId: req.body.MUID,
//             name: req.body.name,
//             amount: req.body.amount * 100,
//             redirectUrl: `http://localhost:8000/status/?id=${merchantTransactionId}`,
//             redirectMode: 'POST',
//             mobileNumber: req.body.number,
//             paymentInstrument: {
//                 type: 'PAY_PAGE'
//             }
//         };
//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         // const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"
//         const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"

//         const options = {
//             method: 'POST',
//             url: prod_URL,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         axios.request(options).then(function (response) {
//                 console.log(response.data)

//                 return res.json(response.data)
//             })
//             .catch(function (error) {
//                 console.error(error);
//             });

//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//             success: false
//         })
//     }

// })


// app.post("/status", async (req, res) => {

//     const merchantTransactionId = req.query.id
//     const merchantId = merchant_id

//     const keyIndex = 1;
//     const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
//     const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//     const checksum = sha256 + "###" + keyIndex;

//     const options = {
//         method: 'GET',
//         url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
//         headers: {
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//             'X-VERIFY': checksum,
//             'X-MERCHANT-ID': `${merchantId}`
//         }
//     };

//     // CHECK PAYMENT TATUS
//     axios.request(options).then(async (response) => {
//             if (response.data.success === true) {
//                 const url = `http://localhost:5173/success`
//                 return res.redirect(url)
//             } else {
//                 const url = `http://localhost:5173/failure`
//                 return res.redirect(url)
//             }
//         })
//         .catch((error) => {
//             console.error(error);
//         });

// })


// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// })








// // controllers/paymentController.js
// const crypto = require("crypto");
// const axios = require("axios");
// const Transaction = require("../models/transition");
// require("dotenv").config();


// const salt_key = process.env.SALT_KEY;
// const merchant_id = process.env.MERCHANT_ID;

// // Create Order and set the initial status to "Pending"
// exports.createOrder = async (req, res) => {
//     try {
//         const { name, amount, number } = req.body;

//         // Generate transaction ID and MUID in backend
//         const merchantTransactionId = "T" + Date.now();
//         const MUID = "MUID" + Date.now();

//         // Save transaction details to DB with status "Pending"
//         const newTransaction = new Transaction({
//             transactionId: merchantTransactionId,
//             MUID: MUID,
//             name: name,
//             amount: amount * 100, // Assume the amount is in rupees
//             mobileNumber: number,
//             status: 'Pending' // Initial status is "Pending"
//         });
//         await newTransaction.save();

//         const data = {
//             merchantId: merchant_id,
//             merchantTransactionId: merchantTransactionId,
//             merchantUserId: MUID,
//             name: name,
//             amount: amount * 100, 
//             redirectUrl: `http://localhost:4000/status/?id=${merchantTransactionId}`,
//             redirectMode: 'POST',
//             mobileNumber: number,
//             paymentInstrument: { type: 'PAY_PAGE' }
//         };

//         const payload = Buffer.from(JSON.stringify(data)).toString('base64');
//         const checksum = crypto.createHash('sha256')
//             .update(payload + '/pg/v1/pay' + salt_key)
//             .digest('hex') + '###1';

//         const options = {
//             method: 'POST',
//             url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//             headers: { 'X-VERIFY': checksum },
//             data: { request: payload }
//         };

//         // Send request to PhonePe
//         axios.request(options).then(response => {
//             res.json(response.data);
//         }).catch(error => {
//             console.error(error);
//             res.status(500).json({ success: false, message: "Payment initiation failed." });
//         });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Check payment status and update the transaction status in DB
// exports.checkPaymentStatus = async (req, res) => {
//     try {
//         const merchantTransactionId = req.query.id;
//         const keyIndex = 1;
//         const checksum = crypto.createHash('sha256')
//             .update(`/pg/v1/status/${merchant_id}/${merchantTransactionId}` + salt_key)
//             .digest('hex') + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchant_id}/${merchantTransactionId}`,
//             headers: {
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': merchant_id
//             }
//         };

//         // Send request to PhonePe for checking status
//         const response = await axios.request(options);

//         if (response.data.success) {
//             // Payment successful, update the transaction status to "Success"
//             await Transaction.updateOne(
//                 { transactionId: merchantTransactionId },
//                 { status: "Success" }
//             );
//             res.redirect(`http://localhost:4000/success`);
//         } else {
//             // Payment failed, update the transaction status to "Failed"
//             await Transaction.updateOne(
//                 { transactionId: merchantTransactionId },
//                 { status: "Failed" }
//             );
//             res.redirect(`http://localhost:4000/failure`);
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error checking payment status");
//     }
// };





// const crypto = require("crypto");
// const axios = require("axios");
// const Transaction = require("../models/transition");
// require("dotenv").config();

// const salt_key = process.env.SALT_KEY;
// const merchant_id = process.env.MERCHANT_ID;

// // Create Order and set the initial status to "Pending"
// exports.createOrder = async (req, res) => {
//     try {
//         const { name, amount, number, clientTxnId, MUID } = req.body;

//         // Generate transaction ID and MUID in the backend
//         const merchantTransactionId = "T" + Date.now();


//         // Save transaction details to the DB with status "Pending"
//         const newTransaction = new Transaction({
//             transactionId: merchantTransactionId,
//             clientTxnId: clientTxnId,
//             MUID: MUID,
//             name: name,
//             amount: amount * 100, // Assume the amount is in paise (100 paise = 1 rupee)
//             mobileNumber: number,
//             status: 'Pending', // Initial status is "Pending"
//         });
//         await newTransaction.save();

//         // Prepare the data for the payment gateway
//         const data = {
//             merchantId: merchant_id,
//             merchantTransactionId: merchantTransactionId,
//             merchantUserId: MUID,
//             name: name,
//             amount: amount * 100, // Convert to paise
//             redirectUrl: `http://localhost:4000/status/?id=${merchantTransactionId}`, // Callback URL
//             redirectMode: 'POST',
//             mobileNumber: number,
//             paymentInstrument: { type: 'PAY_PAGE' }
//         };

//         // Create the payload and checksum for the request to PhonePe
//         const payload = Buffer.from(JSON.stringify(data)).toString('base64');
//         const checksum = crypto.createHash('sha256')
//             .update(payload + '/pg/v1/pay' + salt_key)
//             .digest('hex') + '###1';

//         // Options for the API call to PhonePe
//         const options = {
//             method: 'POST',
//             url: "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay",
//             headers: { 'X-VERIFY': checksum },
//             data: { request: payload }
//         };


//         // Make the request to the PhonePe API
//         axios.request(options).then(response => {
//             // Send the payment page URL back to the frontend
//             res.json(response.data);
//         }).catch(error => {
//             console.error("Payment initiation error:", error);
//             res.status(500).json({ success: false, message: "Payment initiation failed." });
//         });
//     } catch (error) {
//         console.error("Error creating order:", error);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Check payment status and update the transaction status in the DB
// exports.checkPaymentStatus = async (req, res) => {
//     try {
//         const merchantTransactionId = req.query.id;
//         const keyIndex = 1;
//         const checksum = crypto.createHash('sha256')
//             .update(`/pg/v1/status/${merchant_id}/${merchantTransactionId}` + salt_key)
//             .digest('hex') + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchant_id}/${merchantTransactionId}`,
//             headers: {
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': merchant_id
//             }
//         };

//         // Send request to PhonePe for checking status
//         const response = await axios.request(options);

//         if (response.data.success) {
//             // Payment successful, update the transaction status to "Success"
//             await Transaction.updateOne(
//                 { transactionId: merchantTransactionId },
//                 { status: "Success" }
//             );
//             res.redirect(`http://localhost:4000/success`);
//         } else {
//             // Payment failed, update the transaction status to "Failed"
//             await Transaction.updateOne(
//                 { transactionId: merchantTransactionId },
//                 { status: "Failed" }
//             );
//             res.redirect(`http://localhost:4000/failure`);
//         }
//     } catch (error) {
//         console.error("Error checking payment status:", error);
//         res.status(500).send("Error checking payment status");
//     }
// };










// const axios = require('axios');
// const crypto = require('crypto'); // Ensure crypto is imported
// const salt_key = process.env.SALT_KEY;
// const merchant_id = process.env.MERCHANT_ID;

// exports.createOrder = async (req, res) => {
//     try {
//         console.log(req.body);

//         const merchantTransactionId = req.body.transactionId;
//         const data = {
//             merchantId: merchant_id,
//             merchantTransactionId: merchantTransactionId,
//             merchantUserId: req.body.MUID,
//             name: req.body.name,
//             amount: req.body.amount * 100,  // Make sure amount is converted to the smallest unit
//             redirectUrl: `http://localhost:4000/status/?id=${merchantTransactionId}`,
//             redirectMode: 'POST',
//             mobileNumber: req.body.number,
//             paymentInstrument: {
//                 type: 'PAY_PAGE'
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"; // Sandbox URL

//         const options = {
//             method: 'POST',
//             url: prod_URL,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         // Use async/await for axios request
//         const response = await axios.request(options);
//         console.log(response.data);

//         return res.json(response.data);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({
//             message: error.message,
//             success: false
//         });
//     }
// };

// exports.checkPaymentStatus = async (req, res) => {
//     try {
//         const merchantTransactionId = req.query.id;
//         const merchantId = merchant_id;

//         const keyIndex = 1;
//         const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + "###" + keyIndex;

//         const options = {
//             method: 'GET',
//             url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': `${merchantId}`
//             }
//         };

//         // Use async/await for axios request
//         const response = await axios.request(options);
//         console.log(response.data);

//         if (response.data.success) {
//             return res.redirect(`http://localhost:3000/success`);
//         } else {
//             return res.redirect(`http://localhost:3000/failure`);
//         }
//     } catch (error) {
//         console.error(error);
//         return res.status(500).send({
//             message: "Error checking payment status",
//             success: false
//         });
//     }
// };





// // const axios = require('axios');
// const crypto = require('crypto');


// function generateTransitionId() {
//     const timestamp = Date.now()
//     const randomNum = Math.floor(Math.random() * 1000000);
//     const merchantPrefix = 'T';
//     const transitionId = `${merchantPrefix}${timestamp}${randomNum}`;
//     return transitionId;
// }

// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, amount } = req.body
//         const data = {
//             merchantId: "PGTESTPAYUAT",
//             merchantTransactionId: generateTransitionId(),
//             merchantUserId: "MUID9EFW8E9F89EWF8C",
//             name: name,
            
//             amount: 100 * amount,
//             redirectUrl: "https://webhook.site/redirect-url",  //response send url
//             redirectMode: 'POST',
//             // callbackUrl: "https://webhook.site/callback-url",
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         }
//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64')
//         const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
//         const keyIndex = 1;
//         const string =  payloadMain + '/pg/v1/pay'+ key
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex


//         const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
//         // const URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"

//         const options = {
//             method: 'POST',
//             url:URL,
//             headers:{
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data:{
//                 request:payloadMain
//             } 
//         };


//         axios
//         .request(options)
//         .then(function (response){
//             // return console.log(response.data)
//             // return res.redirect(response.data.data.intrumentResponse.redirectInfo.url)

//             return res.status(200).send(response.data.data.intrumentResponse.redirectInfo.url)
//         })
//         .catch(function (error){
//             console.error(error);
//         })
        
//     }catch(error){
//         res.status(500).send({
//             message: error.message,
//             success:false
//         })
//     }
// }








// exports.checkPaymentStatus = async(req,res)=>{
//     return console.log(res.req.body)
//     const merchantTransactionId = res.req.body.transitionId
//     const merchantId = res.req.body.merchantId
//     const keyIndex = 1
//     const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399'
//     const string = `pg/v1/status/${merchantId}/${merchantTransactionId}` + key
//     const sha256 = crypto.createHash('sha256').update(string).digest('hex')
//     const checksum = sha256 + '###' + keyIndex


//     const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay"
//         // const URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay"


//         const options = {
//         method: 'GET',
//         url:URL,
//         headers:{
//             accept: 'application/json',
//             'Content-Type': 'application/json',
//             'X-VERIFY': checksum,
//             'X-MERCHANT-ID':merchantId
//         }
//     };

//     axios
//     .request(options)
//     .then(async(response)=>{
//         console.log(response)
//     })
//     .catch((error)=>{
//         console.error(error)
//     })

// }






// const axios = require('axios');
// const crypto = require('crypto');

// // Function to generate transaction ID
// function generateTransactionId() {
//     const timestamp = Date.now();
//     const randomNum = Math.floor(Math.random() * 1000000);
//     const merchantPrefix = 'T';
//     return `${merchantPrefix}${timestamp}${randomNum}`;
// }

// // Create Order Function
// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, amount } = req.body;

//         const data = {
//             merchantId: "PGTESTPAYUAT",
//             merchantTransactionId: generateTransactionId(),
//             merchantUserId: "MUID9EFW8E9F89EWF8C",
//             name: name,
//             amount: 100 * amount,  // Multiply by 100 to convert to smallest currency unit
//             redirectUrl: "https://webhook.site/redirect-url",  // Redirect URL after payment
//             redirectMode: 'POST',
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         const key = process.env.PHONEPE_API_KEY;  // Store your API key in env
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

//         const options = {
//             method: 'POST',
//             url: URL,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         axios
//             .request(options)
//             .then(function (response) {
//                 // Send the payment URL for redirection
//                 return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
//             })
//             .catch(function (error) {
//                 console.error(error);
//                 return res.status(500).send({
//                     message: 'Error creating order',
//                     error: error.message
//                 });
//             });
//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//             success: false
//         });
//     }
// };

// // Check Payment Status Function
// exports.checkPaymentStatus = async (req, res) => {
//     try {
//         const { transactionId, merchantId } = req.body;
//         const keyIndex = 1;
//         const key = process.env.PHONEPE_API_KEY;  // Store your API key in env

//         const string = `pg/v1/status/${merchantId}/${transactionId}` + key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`;

//         const options = {
//             method: 'GET',
//             url: URL,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': merchantId
//             }
//         };

//         axios
//             .request(options)
//             .then(async (response) => {
//                 res.status(200).send(response.data);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 res.status(500).send({
//                     message: 'Error checking payment status',
//                     error: error.message
//                 });
//             });
//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//             success: false
//         });
//     }
// };





// const axios = require('axios');
// const crypto = require('crypto');
// const Transaction = require('../models/transition');  // Import Transaction model

// // Create Order Function
// exports.createOrder = async (req, res) => {
//     try {
//         const { name, number, amount } = req.body;
//         const merchantTransactionId = generateTransactionId();

//         // Save the transaction to MongoDB with 'pending' status
//         const newTransaction = new Transaction({
//             merchantTransactionId,
//             name,
//             mobileNumber: number,
//             amount
//         });

//         await newTransaction.save();  // Save the transaction to MongoDB

//         const data = {
//             merchantId: "PGTESTPAYUAT",
//             merchantTransactionId,
//             merchantUserId: "MUID9EFW8E9F89EWF8C",
//             name: name,
//             amount: 100 * amount,  // Multiply by 100 to convert to smallest currency unit
//             redirectUrl: "https://webhook.site/redirect-url",  // Redirect URL after payment
//             redirectMode: 'POST',
//             mobileNumber: number,
//             paymentInstrument: {
//                 type: "PAY_PAGE"
//             }
//         };

//         const payload = JSON.stringify(data);
//         const payloadMain = Buffer.from(payload).toString('base64');
//         const key = process.env.PHONEPE_API_KEY;  // Store your API key in env
//         const keyIndex = 1;
//         const string = payloadMain + '/pg/v1/pay' + key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

//         const options = {
//             method: 'POST',
//             url: URL,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum
//             },
//             data: {
//                 request: payloadMain
//             }
//         };

//         axios
//             .request(options)
//             .then(function (response) {
//                 // Send the payment URL for redirection
//                 return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
//             })
//             .catch(function (error) {
//                 console.error(error);
//                 return res.status(500).send({
//                     message: 'Error creating order',
//                     error: error.message
//                 });
//             });
//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//             success: false
//         });
//     }
// };




// exports.checkPaymentStatus = async (req, res) => {
//     try {
//         const { transactionId, merchantId } = req.body;
//         const keyIndex = 1;
//         const key = process.env.PHONEPE_API_KEY;  // Store your API key in env

//         const string = `pg/v1/status/${merchantId}/${transactionId}` + key;
//         const sha256 = crypto.createHash('sha256').update(string).digest('hex');
//         const checksum = sha256 + '###' + keyIndex;

//         const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`;

//         const options = {
//             method: 'GET',
//             url: URL,
//             headers: {
//                 accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 'X-VERIFY': checksum,
//                 'X-MERCHANT-ID': merchantId
//             }
//         };

//         axios
//             .request(options)
//             .then(async (response) => {
//                 const paymentStatus = response.data.data.status;

//                 // Update the transaction status in MongoDB
//                 await Transaction.findOneAndUpdate(
//                     { merchantTransactionId: transactionId },
//                     { status: paymentStatus.toLowerCase() }  // e.g., 'success' or 'failed'
//                 );

//                 res.status(200).send(response.data);
//             })
//             .catch((error) => {
//                 console.error(error);
//                 res.status(500).send({
//                     message: 'Error checking payment status',
//                     error: error.message
//                 });
//             });
//     } catch (error) {
//         res.status(500).send({
//             message: error.message,
//             success: false
//         });
//     }
// };






const axios = require('axios');
const crypto = require('crypto');
const Transaction = require('../models/transition');  // Import Transaction model



function generateTransactionId() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000000);
    const merchantPrefix = 'T';
    return `${merchantPrefix}${timestamp}${randomNum}`;
}


// Create Order Function
exports.createOrder = async (req, res) => {
    try {
        const {
            userId,
            name,
            fatherName,
            motherName,
            DOB,
            gender,
            aadhar,
            contact,
            email,
            occupation,
            university,
            address,
            amount
        } = req.body;

        const merchantTransactionId = generateTransactionId();

        // Save the transaction to MongoDB with 'pending' status
        const newTransaction = new Transaction({
            merchantTransactionId,
            userId,
            name,
            fatherName,
            motherName,
            DOB,
            gender,
            aadhar,
            contact,
            email,
            occupation,
            university,
            address,
            amount
        });

        await newTransaction.save();  // Save the transaction to MongoDB

        const data = {
            merchantId: "PGTESTPAYUAT",
            merchantTransactionId,
            merchantUserId: userId,  // Link the transaction to the logged-in user
            name: name,
            amount: 100 * amount,  // Multiply by 100 to convert to smallest currency unit
            redirectUrl: "https://webhook.site/redirect-url",  // Redirect URL after payment
            redirectMode: 'POST',
            mobileNumber: contact,
            paymentInstrument: {
                type: "PAY_PAGE"
            }
        };

        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const key = process.env.PHONEPE_API_KEY;  // Store your API key in env
        const keyIndex = 1;
        const string = payloadMain + '/pg/v1/pay' + key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

        const options = {
            method: 'POST',
            url: URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            },
            data: {
                request: payloadMain
            }
        };

        axios
            .request(options)
            .then(function (response) {
                // Send the payment URL for redirection
                return res.status(200).send(response.data.data.instrumentResponse.redirectInfo.url);
            })
            .catch(function (error) {
                console.error(error);
                return res.status(500).send({
                    message: 'Error creating order',
                    error: error.message
                });
            });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};




exports.checkPaymentStatus = async (req, res) => {
    try {
        const { transactionId, merchantId } = req.body;
        const keyIndex = 1;
        const key = process.env.PHONEPE_API_KEY;  // Store your API key in env

        const string = `pg/v1/status/${merchantId}/${transactionId}` + key;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`;

        const options = {
            method: 'GET',
            url: URL,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': merchantId
            }
        };

        axios
            .request(options)
            .then(async (response) => {
                const paymentStatus = response.data.data.status;

                // Update the transaction status in MongoDB
                await Transaction.findOneAndUpdate(
                    { merchantTransactionId: transactionId },
                    { status: paymentStatus.toLowerCase() }  // e.g., 'success' or 'failed'
                );

                res.status(200).send(response.data);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send({
                    message: 'Error checking payment status',
                    error: error.message
                });
            });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            success: false
        });
    }
};


