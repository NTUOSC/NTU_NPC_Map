module.exports = {
 sendEmail: function(studentID) {
 	var encrypt = require ('./encrypt');
 	encrypt.encrypt(studentID);
 },
 decrypt: function(key,studentID)
 {
    var encrypt = require('./encrypt');
    encrypt.decrypt(key,studentID);
 }
}