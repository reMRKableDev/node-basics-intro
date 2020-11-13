const cloudinary = require("cloudinary"); // No need to use .v2 here --> bad documentation on cloudinary's part
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "movie-folder-test", // The name of the folder in cloudinary.
    allowedFormats: ["jpg", "png"], // The allowed formats of files to upload to cloudinary.
    use_filename: true, // Give the file a name to refer to when uploading to cloudinary.
  },
});

// pass Cloudinary Storage to multer so that it can be used in the routes
const uploadCloud = multer({ storage });

module.exports = uploadCloud;
