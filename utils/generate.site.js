const { ok } = require('assert');
const fs = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path/posix');

const writeFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: "file created!"
            });
        });
    });
};

const copyFile = () => {
    fs.copyFile("./src/style.css", "./dist", err => {
        if(err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: "file has been copied!"
        })
    })
}

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// }

module.exports = { writeFile, copyFile };