// console.log('Am working')
const id=document.querySelector('#id')
const searchId=document.querySelector('#searchid')
const firstname=document.querySelector('#firstname')
const lastname=document.querySelector('#lastname')
const country=document.querySelector('#country')
const btnUpdate=document.querySelector('#btn-update')
const formContainer=document.querySelector('#container')
const updateReport=document.querySelector('#report')

//adding event listener for update btn
btnUpdate.addEventListener('click',e=>{
    e.preventDefault()
    
    //receive user inputs
    const data={
        inpId:id.value,
        inpFirstname:firstname.value,
        inpLastname:lastname.value,
        inpCountry:country.value
    }
    
    
    //async call to server to update record for a given userid
    fetch('/updateProfile',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then((response)=>{
        if (response.ok){
            return response.json()
        }
    })
    .then((data)=>{
        updateReport.innerHTML=data
        formContainer.hidden=true
        searchId.value=''
    })
    //handle error
    .catch((error)=>{
        console.log('Error Details as follows'+error)
    })
})