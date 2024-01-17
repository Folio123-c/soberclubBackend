const { Storage } = require('@google-cloud/storage');
const path = require('path');
// Initialize storage
const keyFilePath = path.resolve(__dirname, 'soberclub-de1233f64640.json');

// Initialize storage
const storage = new Storage({
  keyFilename: keyFilePath,
});

const bucketName = 'my-test-bucket';
const bucket = storage.bucket(bucketName);

// Sending the upload request
bucket.upload(
  'C:/Users/Alice/Pictures/Screenshots/Screenshot 2023-10-30 163050.png',
  {
    destination: 'someFolderInBucket/image_to_upload.jpeg',
  },
  function (err, file) {
    if (err) {
      console.error('Error uploading image image_to_upload.jpeg:', err);
    } else {
      console.log(`Image image_to_upload.jpeg uploaded to ${bucketName}.`);
    }
  }
);
