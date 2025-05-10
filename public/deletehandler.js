const btnDelete2=document.querySelector('#btn-delete2')
const btnDelete1=document.querySelector('#btn-delete1')
const id=document.querySelector('#searchid')
const deleteReport=document.querySelector('#report')
const formContainer=document.querySelector('#container')

//event listener for delete Profile btn 1
btnDelete2.addEventListener('click',(e=>{
    e.preventDefault()
    const Id=id.value

    //async call to web server(express server)
    fetch(`/deleteProfile/${Id}`,{
        method:'get',
        headers:{
            'content-type':'application/json'
        }
    })
    
    .then((response)=>{
        if (response.ok){
            return response.json()
        }    
    })

    .then((data)=>{
        deleteReport.innerHTML=data
        deleteReport.hidden=false
        formContainer.hidden=true
        id.value=''
        
    
    })
    .catch((error)=>{
        console.log(error)
    })    

}))



//event listener for delete Profile2 btn
btnDelete1.addEventListener('click',(e=>{
    e.preventDefault()
    const Id=id.value
    // console.log(Id)

    //async call to web server(express server)
    fetch(`/deleteProfile/${Id}`,{
        method:'get',
        headers:{
            'content-type':'application/json'
        }
    })
    .then((response)=>{
        if (response.ok){
            return response.json()
        }    
    })

    .then((data)=>{
        deleteReport.innerHTML=data
        deleteReport.hidden=false
        formContainer.hidden=true
        id.value=''
    })
    
    .catch((error)=>{
        console.log(error)
    })    

}))
