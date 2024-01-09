const path = require("path");
const fs = require("fs");
const dirPath = path.join(__dirname, "files");

// fs.writeFileSync(`${dirPath}/app.txt`, "This is simple text file");
// fs.readFile(`${dirPath}/app.txt`, "utf8", (err, item) => {
//   console.warn(item);
// });
fs.appendFile(`${dirPath}/app.txt`, " and file name is app.txt", (err) => {
  if (!err) {
    console.log("file is updated");
  }
});
fs.unlinkSync(`${dirPath}/app1.txt`);
