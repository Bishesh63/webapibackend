const path = require('path');
module.exports = {
    client: 'pg',
    connection:{
        host:'localhost',
        user: 'prabin',
        password:'prabin' ,
      database:'blood_bank_android'
    },
    migration:{
        tableName: 'migrations',
        directory: path.resolve(__dirname,'./migrations'),
    },
     useNullAsDefault:true
};