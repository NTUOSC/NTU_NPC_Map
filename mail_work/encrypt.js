module.exports = {
  encrypt: function(accountid) {
    fs = require('fs');
    var key = Math.floor(Math.random()*100000000);
    var string=accountid + ','+key+'\n';
    fs.appendFile('accountid.csv', string ,'utf8', function (err,data) {
    if (err) {
        return console.log(err);
        }
    });
  },

  decrypt: function(value){
    var csv = require('ya-csv');

    reader = csv.createCsvFileReader('accountid.csv', {
        'separator': ',',
        'quote': '"',
        'escape': '"',       
        'comment': '',
    });

    var writer = new csv.CsvWriter(process.stdout);
    
    reader.addListener('data', function(data) {
        writer.writeRecord([ data[0]+','+data[1]]);
        if(value == data[1])
        {
            fs = require('fs');
            var string=data[0]+'\n';
            fs.appendFile('accountname.csv', string ,'utf8', function (err,data) {
            if (err) {
                return console.log(err);
            }
            });
        }


    });
  }
}
