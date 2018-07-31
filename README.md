# file-crypto

### Quick and dirty file encryption

## Install
``` bash
npm i --save @infamoustrey/file-crypto
```

## Usage
``` javascript
import FileCrypto from '@infamoustrey/file-crypto';

FileCrypto.encryptFile( 'file.txt', 'yourmotherwasahamster' )

FileCrypto.decryptFile( 'file.txt', 'yourmotherwasahamster' )

```