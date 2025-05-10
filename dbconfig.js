const config={
    server:'localhost',
    user:'deola',
    password:'sammy1',
    database:'Student',
    options:{
        trustedconnection:true,
        trustServerCertificate: true,
        enableArithAbort:true,
        instancename: 'SQLEXPRESS'
    },
    port:49702 //you can use a different port number
}

module.exports=config