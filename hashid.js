function hashId(hash){

  var hashList = ["Fletcher-4", "Fletcher-16", "CRC-16","Adler-32", "CRC-64", "MD5",
              "SHA-1" , "Tiger" , "SHA-224","Bcrypt", "SHA-256", "RIPEMD", "SHA-384",
              "Whirlpool", "RadioGatún"]

  var length = hash.length * 4;

  if(length == 4){
    return "Fletcher-4";
  }

  if(length == 8){
    return "Fletcher-8";
  }

  if(length == 16){
    return "CRC-16";
  }

  if(length == 32){
    return "Adler-32";
  }

  if(length == 64){
    return "CRC-64";
  }

  if(length == 128){
    return "MD5";
  }

  if(length == 160){
    return "SHA-1";
  }

  if(length == 192){
    return "Tiger";
  }

  if(length == 224){
    return "SHA-224";
  }

  if(length == 240){
    return "Bcrypt";
  }

  if(length == 256){
    return "SHA-256";
  }

  if(length == 320){
    return "RIPEMD-320";
  }

  if(length == 384) {
    return "SHA-384"
  }

  if(length == 512){
    return "Whirlpool"
  }

  if(length == 1216){
    return "RadioGatún"
  }

  if(hash == "--list"){
      return hashList;
  }

  if(hash == "--help"){
    return "USAGE : Node hashid.js argument où argument est le hash. Le programme renverra le nom de l'algorithme utilisé. node hashid.js --list pour afficher l'ensemble des hash connus par l'outil"
  }


}
console.log(hashId(process.argv[2]));
