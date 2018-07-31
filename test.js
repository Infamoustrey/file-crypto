
import FileCrypto from './index';
import test from 'ava';

test.serial('encrypt', t => {
    
    try{
        FileCrypto.encryptFile( 'file.txt', 'yourmotherwasahamster' )
        t.pass()
    } catch(e){
        t.fail(e)
    }

})

test.serial('decrypt', t => {
    
    try{
        FileCrypto.decryptFile( 'file.txt', 'yourmotherwasahamster' )
        t.pass()
    } catch(e){
        t.fail(e)
    }

})