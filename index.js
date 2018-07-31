
const crypto = require('crypto');
const fs = require('fs');

class FileCrypto {

    constructor(){
        this.algo = 'aes-256-ctr';
    }

    encryptFile(path, key){

        let cipher = crypto.createCipher(this.algo, key);

        let data = fs.readFileSync(path);

        let encrypted = Buffer.concat(
            [
                cipher.update( Buffer.from(data) ),
                cipher.final()
            ]
        );

        fs.writeFileSync(path, encrypted);

    }

    decryptFile(path, key) {

        let cipher = crypto.createDecipher(this.algo, key);

        let data = fs.readFileSync(path);

        let decrypted = Buffer.concat([
            cipher.update( Buffer.from(data) ),
            cipher.final()
        ]);

        fs.writeFileSync(path, decrypted);

    }

}

module.exports = new FileCrypto();