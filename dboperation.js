const dbConfig=require('./dbconfig.js')
const sql= require('mssql')

sql.on('error',(error)=>{
    console.log(error.message)
})

//getAllProfiles()
async function getAllProfiles(){
try {
let conn=await sql.connect(dbConfig)
let result=await conn.request()
.query('SELECT * FROM Profile')
// console.log('Records successfully fetched from the profile database');
// console.log(result)
sql.close()
return result.recordset
} 
catch (error) {
    console.log(error)
    sql.close()
}

}


//     //getProfile()
async function getProfile(profileId){
    try {
    let conn=await sql.connect(dbConfig)
    let result=await conn.request()
    .input('id',sql.Int,profileId)
    .query(`SELECT * FROM Profile WHERE Id=@id`)
    // console.log('Records successfully fetched from the profile database');
    // console.log(result.recordset)
    sql.close()
    return result.recordset
    } 
    catch (error) {
        console.log(error)
        sql.close()
    }
    
    }

    //     //getSomeProfiles()
async function getSomeProfiles(leastId){
    try {
    let conn=await sql.connect(dbConfig)
    let result=await conn.request()
    .input('id',sql.Int,leastId)
    .query(`SELECT * FROM Profile WHERE Id>=@id`)
    // console.log('Records successfully fetched from the profile database');
    sql.close()
    return result.recordset
    } 
    catch (error) {
        console.log(error)
        sql.close()
    }
    
    }
        
     //deleteProfile()
async function deleteProfile(deleteId){
    try {
    let conn=await sql.connect(dbConfig)
    let result=await conn.request()
    .input('Id',sql.Int,deleteId)
    .query('DELETE FROM Profile WHERE Id=@Id')
    // console.log('Record successfully deleted from the profile database');
    sql.close()
    return result.recordset
    } 
    catch (error) {
        console.log(error)
        sql.close()
    }
    
    }
    
    //deleteAllProfiles()
    async function deleteAllProfiles(){
        try {
        let conn=await sql.connect(dbConfig)
        let result=await conn.request()
        .query('DELETE FROM Profile')
        // console.log('All records successfully deleted from the profile database');
        sql.close()
        return result.recordset
        } 
        catch (error) {
            console.log(error)
            sql.close()
        }
        
        }
    

     //editProfile()
async function editProfile(Id,URLParams){
    try {
    let conn=await sql.connect(dbConfig)
    let result=await conn.request()
    .input('id',sql.Int,Id)
    .input('fname',sql.NVarChar,URLParams.fname)
    .input('lname',sql.NVarChar,URLParams.lname)
    .input('ctry',sql.NVarChar,URLParams.ctry)
    .query("UPDATE Profile SET  Firstname=@fname,Lastname=@lname,Country=@ctry where Id=@id")
    // console.log('Record successfully updated in the profile database')
    
    sql.close()
    } 
    catch (error) {
        console.log(error)
        sql.close()
    }
    
    }


         //updateProfile()
async function updateProfile(Body){
    try {
    let conn=await sql.connect(dbConfig)
    let result=await conn.request()
    .input('id',sql.Int,parseInt(Body.inpId))
    .input('fname',sql.NVarChar,Body.inpFirstname)
    .input('lname',sql.NVarChar,Body.inpLastname)
    .input('ctry',sql.NVarChar,Body.inpCountry)
    .query("UPDATE Profile SET Firstname=@fname,Lastname=@lname,Country=@ctry where Id=@id")
    // console.log('Record successfully updated in the profile database')
    
    sql.close()
    } 
    catch (error) {
        console.log(error)
        sql.close()
    }
    
    }



    //insertProfile()
async function insertHardcodedProfile(){
    try {
    let conn=await sql.connect(dbConfig)    
    let result=await conn.request()
    .input('id',sql.Int,110)
    .input('fname',sql.NVarChar,'Mohammed')
    .input('lname',sql.NVarChar,'Durorola')
    .input('ctry',sql.NVarChar,'Australia')
    .query("INSERT INTO Profile (Id,Firstname,Lastname,Country) VALUES (@id,@fname,@lname,@ctry)");
    console.log('Record successfully inserted into the profile database');
    sql.close()
    } 
    catch (error) {
        console.log(error)
        sql.close()
    }
    
    }


    //insertDynamicProfile()
    async function insertDynamicProfile(urlParams){
        try {
        let conn=await sql.connect(dbConfig)    
        let result=await conn.request()
        .input('id',sql.Int,urlParams.id)
        .input('fname',sql.NVarChar,urlParams.fname)
        .input('lname',sql.NVarChar,urlParams.lname)
        .input('ctry',sql.NVarChar,urlParams.ctry)
        .query("INSERT INTO Profile (Id,Firstname,Lastname,Country) VALUES (@id,@fname,@lname,@ctry)");
        console.log('Record successfully inserted into the profile database');
        sql.close()
        } 
        catch (error) {
            console.log(error)
            sql.close()
        }
        
        }

        //insertDynamicProfile()
    async function createProfile(body){
        try {
        let conn=await sql.connect(dbConfig)    
        let result=await conn.request()
        .input('id',sql.Int,(body.id))
        .input('fname',sql.NVarChar,body.firstname)
        .input('lname',sql.NVarChar,body.lastname)
        .input('country',sql.NVarChar,body.country)
        .query("INSERT INTO Profile (Id,Firstname,Lastname,Country) VALUES (@id,@fname,@lname,@country)");
        console.log('Record successfullyy created into the profile database');
        sql.close()
        } 
        catch (error) {
            console.log(error)
            sql.close()
        }
        
        }
    


module.exports={
    getAllProfiles,
    getProfile,
    getSomeProfiles,
    deleteProfile,
    deleteAllProfiles,
    insertHardcodedProfile,
    insertDynamicProfile,
    editProfile,
    createProfile,
    updateProfile
}