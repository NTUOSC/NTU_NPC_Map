module.exports = {
  encrypt: function(accountid) {
    fs = require('fs');
    var mail = require ('./mail');
    var csv = require('ya-csv');
    var key = Math.floor(Math.random()*100000000);
    var string=accountid + ','+key+'\n';
    var accountname_address='./data/accountname.csv';
    reader = csv.createCsvFileReader( accountname_address, {
        'separator': ',',
        'quote': '"',
        'escape': '"',       
        'comment': '',
    });

    var ID=[];
    var byebye=false;
    reader.addListener('data', function(data) {
        ID.push(data[0]);
    });
    console.log(string);
            setTimeout(function(){  
            for(i=0;i<=ID.length;i++)
            {
           // console.log(key);
            if(i==ID.length){
                fs.appendFile('./data/accountid.csv', string ,'utf8', function (err,data) {
                        if (err) {
                            return console.log(err);
                }
                });
                console.log(key);
                link='127.0.0.1:3000/check?key='+key+'&studentID='+accountid;
                link=link+'<br>'+'please enter the link<br><strong>NTU NPC MAP<br>';
                mail.sendEmail(accountid+'@ntu.edu.tw','NTU_NPC_MAP register',link);
                return key;
            }
            if(ID[i]==accountid)
            {
                console.log('exist already');
                return 'exist already';
            }

            }},5000);
  },

  decrypt: function(value,ID){
    var csv = require('ya-csv');
    fs = require('fs');
    var accountid_address='./data/accountid.csv';
    var accountname_address='./data/accountname.csv';
    reader = csv.createCsvFileReader( accountid_address, {
        'separator': ',',
        'quote': '"',
        'escape': '"',       
        'comment': '',
    });

    //var writer = new csv.CsvWriter(process.stdout);
    var accountid_txt="";
    var error=true;
    reader.addListener('data', function(data) {
       // writer.writeRecord([ data[0]+','+data[1]]);
        if(value == data[1]&&ID==data[0])
        {
           // fs = require('fs');
            var string=data[0]+'\n';
            fs.appendFile(accountname_address, string ,'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }

            });
            error=false;
        }
        else
        {
            accountid_txt=accountid_txt+data[0]+','+data[1]+'\n';
            console.log(accountid_txt);
        }
    });
    
    setTimeout(function () {
     console.log(accountid_txt);
        if(!error)
            fs.writeFile( accountid_address, accountid_txt ,'utf8', function (err,data) {
        if (err) {
            return console.log(err);
            }
        })
    },5000);//not good style but could use ;
  }
}
