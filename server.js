//importing the required modules
const express=require('express')
const dbOperation=require(__dirname+'/dboperation.js')
const server=express()
const router=express.Router()
server.use(router)
const public= (express.static('public'))
router.use(express.json())
router.use(public)
//getAllProfiles RESTful API endpoint
router.route('/getAllProfiles').get((req,res)=>{
dbOperation.getAllProfiles()
.then((response)=>{
    res.status(201).json(response)
})
.catch((error)=>{
    res.json(error)
})
})


//getProfile RESTful API endpoint
router.route('/getProfile/:id').get((req,res)=>{
    let id=parseInt(req.params.id)
    // console.log(id)
    dbOperation.getProfile(id)
    .then((response)=>{
        // console.log(response)
        res.status(201).send(response)
    })
    .catch((error)=>{
        res.json(error)
    })  
    })
    
//getSomeProfiles RESTful API endpoint
router.route('/getSomeProfiles/:leastid').get((req,res)=>{
    let leastid=parseInt(req.params.leastid)
    dbOperation.getSomeProfiles(leastid)
    .then((response)=>{
        res.status(201).json(response)
    })
    .catch((error)=>{
        res.json(error)
    })  
    })



    //deleteProfile RESTful API endpoint
router.route('/deleteProfile/:id').get((req,res)=>{
    let deleteid=parseInt(req.params.id)
    dbOperation.deleteProfile(deleteid)
    .then((response)=>{
        res.status(201).json('Record successfully deleted from the profile database')
    })
    .catch((error)=>{
        res.json(error)
    })    
    })


    

    //deleteAllProfiles RESTful API endpoint
router.route('/deleteAllProfiles').get((req,res)=>{
    let deleteid=parseInt(req.params.deleteid)
    dbOperation.deleteAllProfiles()
    .then((response)=>{
        res.status(201).json(response)
    })
    .catch((error)=>{
        res.json(error)
    })
       
    })

    
    //insertHarcodedProfile RESTful API endpoint
router.route('/insertHardcodedProfile').get((req,res)=>{
    dbOperation.insertHardcodedProfile() //hard-coded data
    .then((response)=>{
        res.status(200).json('Record successfully inserted into the profile database')
    })
    .catch((error)=>{
        res.json(error)
    })
       
    })


    //editProfile RESTful API endpoint
    router.route('/editProfile/:id,:fname,:lname,:ctry').get((req,res)=>{
        let id=parseInt(req.params.id)
        let urlParams=req.params
        // console.log(urlParams)
        dbOperation.editProfile(id,urlParams)
        .then((response)=>{
            res.status(200).json('Record successfully updated in the profile database')
        })
        .catch((error)=>{
            res.json(error)
        })
           
        })

//editProfile RESTful API endpoint
router.route('/updateProfile').post((req,res)=>{
    let body=req.body
    dbOperation.updateProfile(body)
    .then((response)=>{
        res.status(200).json('Record successfully updated in the profile database')
    })
    .catch((error)=>{
        res.json(error)
    })
       
    })


//Form API endpoint
router.route('/').get((req,res)=>{
    res.sendFile(__dirname+'/index.html')   
    })


 //insertDynamicProfile RESTful API endpoint
    router.route('/insertDynamicProfile/:id,:fname,:lname,:ctry').get((req,res)=>{
    let urlParams=req.params
    // console.log(urlParams)
    dbOperation.insertDynamicProfile(urlParams) //dynamic data
    .then((response)=>{
        res.status(200).json('Record successfully inserted into the profile database')
    })
    .catch((error)=>{
        res.json(error)
    })
       
    })

//createProfile RESTful API endpoint
router.route('/createProfile').post((req,res)=>{
    // console.log(req.body)
    const data=req.body
    dbOperation.createProfile(data)
    .then((response)=>{
        res.status(200).json('Record successfully created in the profile database')
    })
    .catch((error)=>{
        res.json(error)
    })
       
    })




const port=30500
server.listen(port,(()=>{
    console.log(`Server is listening to client request on port ${port}`)
}))