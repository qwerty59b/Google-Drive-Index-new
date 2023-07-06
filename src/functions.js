// Key Generation for AES-128-CBC for 256 Bit Key
async function generateKey() {
    const key = await crypto.subtle.generateKey(
      { name: 'AES-CBC', length: 128 },
      true,
      ['encrypt', 'decrypt']
    );
  
    return key;
  }
  
async function generateAndLogKey() {
    const key = await generateKey();
    const keyBytes = await crypto.subtle.exportKey('raw', key);
    const keyHex = Array.from(new Uint8Array(keyBytes))
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
    
    console.log('Generated Key:', keyHex);
}
  
generateAndLogKey();

// IV Generation for AES-128-CBC for 128 Bit IV
const iv = crypto.getRandomValues(new Uint8Array(16));
const ivString = JSON.stringify(Array.from(iv));
console.log('IV:', ivString);