const https = require("https");
const crypto = require("crypto");
const fs = require("fs");

const start = Date.now();

const doRequest = () => {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
};

const doHash = () => {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash:", Date.now() - start);
  });
};

doRequest(); // OS system (it doesn't have nothing connected with thread pool)

fs.readFile("multitask.js", "utf-8", () => {
  console.log("FS:", Date.now() - start);
}); // reading of files has delay because first node request statistics about the file and doHash will jump to free hash

// The thread pool has 4 hashes

doHash();
doHash();
doHash();
doHash();
