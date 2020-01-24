const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const config = require('./config');

//get jwt
function getJWT (userId){
    return jwt.sign({ id: user.id }, config.secret, {expiresIn: 172800 // expires in 24 hours
    });
}

// Generate key from password
    async function genEncryptionKey (password, mode, length) {
    var algo = {
    name: 'PBKDF2',
    hash: 'SHA-256',
    salt: new TextEncoder().encode('a-unique-salt'),
    iterations: 1000
    };
    var derived = { name: mode, length: length };
    var encoded = new TextEncoder().encode(password);
    var key = await crypto.subtle.importKey('raw', encoded, { name: 'PBKDF2' }, false, ['deriveKey']);
    
    return crypto.subtle.deriveKey(algo, key, derived, false, ['encrypt', 'decrypt']);
    }

// Encrypt function
    async function encrypt (text, password, mode, length, ivLength) {
    var algo = {
    name: mode,
    length: length,
    iv: crypto.getRandomValues(new Uint8Array(ivLength))
    };
    var key = await genEncryptionKey(password, mode, length);
    var encoded = new TextEncoder().encode(text);
    
    return {
    cipherText: await crypto.subtle.encrypt(algo, key, encoded),
    iv: algo.iv
    };
    }

    // Decrypt function
    async function decrypt (encrypted, password, mode, length) {
    var algo = {
    name: mode,
    length: length,
    iv: encrypted.iv
    };
    var key = await genEncryptionKey(password, mode, length);
    var decrypted = await crypto.subtle.decrypt(algo, key, encrypted.cipherText);
    
    return new TextDecoder().decode(decrypted);
    }
        