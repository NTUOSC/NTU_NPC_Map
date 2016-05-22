module.exports = {
 sendEmail: function(studentID) {
 	var encrypt = require ('./encrypt');
   /* var mail = require ('./mail');
    var encrypt = require ('./encrypt');
    link='127.0.0.1:3000/check?key='+encrypt.encrypt(studentID)+'&studentID='+studentID;
    link=link+'<br>'+'please enter the link<br><strong>NTU NPC MAP<br>';
    mail.sendEmail(studentID+'@ntu.edu.tw','NTU_NPC_MAP register',link);
 */
 encrypt.encrypt(studentID);
 },
 decrypt: function(key,studentID)
 {
    var encrypt = require('./encrypt');
    encrypt.decrypt(key,studentID);
 }
}