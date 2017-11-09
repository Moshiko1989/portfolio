'use strict'
console.log('Ex 35 Solution');

/*Write the function encrypt that gets a string and encrypt 
it by replacing each character c with c+5 
(i.e. 'r' will be replaced by: 'w'), 
now write a function to decrypt a message.*/

var gStr    = 'vwxyz';
console.log('Global str: ', gStr);
var alphaBet = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';

//This function takes a string and encrypts it as requsted.
function doEncryption(str){
    var encryption = '';
    
    for (var i = 0; i <= str.length-1; i++){
        var indexStr = str.charAt(i);
        // console.log('expected seperated gStr: ', indexStr);
        var indexAlphaBet = alphaBet.split(',');
        // console.log('expected arr: ', indexAlphaBet);
        // console.log(alphaBet.length);
        for (var j = 0; j < alphaBet.length; j++){
            // console.log('expectes abc...:', indexAlphaBet[j]);
            // console.log('expectes i ...:', indexAlphaBet[i]);
            if (indexAlphaBet[j] === indexStr) {        
                // console.log('yes');
                // console.log('expected gStr', indexStr);
                // console.log('?', indexAlphaBet[j])
                encryption += indexAlphaBet[j+5];
            } 
        }
     
    }
    return encryption;
}
var encrypt = doEncryption(gStr)
console.log('expected gStr+5: ', encrypt);
// A lot of work, no help. my tests are in the function.

// This function dycrpts the encryption.
function doDecryption(encrypt) {
    var decryption = '';
    // var length = encrypt.length;
    // console.log('expected 5: ', length);
    var indexAlphaBet = alphaBet.split(',');
    // console.log('expected arr of a-z: ', indexAlphaBet);          
    for (var i = 0; i < encrypt.length; i++) {
            var indexStr = encrypt.charAt(i);
            // console.log('expected f-j:', indexStr);
            for (var j = 0; j < alphaBet.length; j++) {
                if (indexAlphaBet[j] === indexStr) {        
                    // console.log('yes');
                    // console.log('expected gStr', indexStr);
                    // console.log('?', indexAlphaBet[j])
                    decryption += indexAlphaBet[j-5];
                } 
            }
        }   

    return decryption;

}

var decrypt = doDecryption(encrypt);
console.log('expected original gStr', doDecryption(encrypt));
console.log('DONE');

