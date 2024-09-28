// // const express = require("express")
// // const multer = require("multer")
// // const path = require("path")
// // const { v4: uuidv4 } = require("uuid");
// // const storage = require("../config/firebaseStorage")

// // const Uploadrouter = express.Router();

// // const upload = multer({
// //     storage: multer.memoryStorage(),
// // });


// // Uploadrouter.post("/", upload.single("file"), async (req, res) => {
// //     try {
// //         const file = req.file;
// //         if (file) {
// //             const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
// //             const blob = storage.file(fileName);
// //             const blobStream = blob.createWriteStream({
// //                 resumable: false,
// //                 metadata: {
// //                     contentType: file.mimetype,
// //                 }
// //             })
// //             // if error
// //             blobStream.on("error",(error) => {
// //                 res.status(400).json({message:error.message});
// //             })

// //             // if successs
// //             blobStream.on("finish",()=>{
// //                 const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`
// //                 res.status(200).json(publicUrl);

// //             })
// //             blobStream.end(file.buffer);

// //         }
// //         // when there is no file
// //         res.status(400).json({message:"please upload a file"})

// //     } catch (error) {
// //         res.status(400).json({ message: error.message });
// //     }
// // })


// // export default Uploadrouter





// // const express = require("express");
// // const multer = require("multer");
// // const path = require("path");
// // const { v4: uuidv4 } = require("uuid");
// // const storage = require("../config/firebaseStorage");

// // const Uploadrouter = express.Router();

// // const upload = multer({
// //     storage: multer.memoryStorage(),
// // });

// // Uploadrouter.post("/", upload.single("file"), async (req, res) => {
// //     try {
// //         const file = req.file;
// //         if (file) {
// //             const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
// //             const blob = storage.file(fileName);
// //             const blobStream = blob.createWriteStream({
// //                 resumable: false,
// //                 metadata: {
// //                     contentType: file.mimetype,
// //                 },
// //             });

// //             // Handle error
// //             blobStream.on("error", (error) => {
// //                 res.status(400).json({ message: error.message });
// //             });

// //             // Handle success
// //             blobStream.on("finish", () => {
// //                 const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${encodeURIComponent(fileName)}?alt=media`;
// //                 res.status(200).json(publicUrl);
// //             });

// //             blobStream.end(file.buffer);
            
// //             return; // Return to prevent further execution
// //         }

// //         // When there is no file
// //         res.status(400).json({ message: "Please upload a file" });

// //     } catch (error) {
// //         res.status(400).json({ message: error.message });
// //     }
// // });

// // // Export using CommonJS
// // module.exports = Uploadrouter;






// const multer = require("multer");
// const path = require("path");
// const { v4: uuidv4 } = require("uuid");
// const storage = require("../config/firebaseStorage");

// const upload = multer({
//     storage: multer.memoryStorage(),
// });

// // Controller function to handle file upload
// const uploadFile = async (req, res) => {
//     try {
//         const file = req.file;
//         if (file) {
//             const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
//             const blob = storage.file(fileName);
//             const blobStream = blob.createWriteStream({
//                 resumable: false,
//                 metadata: {
//                     contentType: file.mimetype,
//                 },
//             });

//             // Handle error
//             blobStream.on("error", (error) => {
//                 res.status(400).json({ message: error.message });
//             });

//             // Handle success
//             blobStream.on("finish", () => {
//                 const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${encodeURIComponent(fileName)}?alt=media`;
//                 res.status(200).json(publicUrl);
//             });

//             // End the stream
//             blobStream.end(file.buffer);
            
//             return; // Return to prevent further execution
//         }

//         // When there is no file
//         res.status(400).json({ message: "Please upload a file" });

//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Export the controller function
// module.exports = {
//     uploadFile,
//     upload, 
// };







const express = require("express");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const storage = require("../config/firebaseStorage"); // Import the configured Firebase Storage

const Uploadrouter = express.Router();

// Set up multer for in-memory storage
const upload = multer({
    storage: multer.memoryStorage(),
});

Uploadrouter.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file; // Get the uploaded file from the request
        if (file) {
            // Generate a unique file name using UUID and retain the original file extension
            const fileName = `${uuidv4()}${path.extname(file.originalname)}`;
            const blob = storage.file(fileName); // Create a reference to a file in Firebase Storage
            const blobStream = blob.createWriteStream({
                resumable: false, // Disable resumable uploads
                metadata: {
                    contentType: file.mimetype, // Set the file's content type for correct handling
                },
            });

            // Handle errors during the file upload
            blobStream.on("error", (error) => {
                res.status(400).json({ message: error.message });
            });

            // Handle successful upload
            blobStream.on("finish", () => {
                // Construct the public URL to access the uploaded file
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${encodeURIComponent(fileName)}?alt=media`;
                res.status(200).json({ publicUrl });
            });

            // End the stream and upload the file
            blobStream.end(file.buffer);
        } else {
            // When there is no file in the request
            res.status(400).json({ message: "Please upload a file" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); // Use status 500 for server errors
    }
});

module.exports = Uploadrouter; // Export using CommonJS
