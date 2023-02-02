// console.log('am working')
const formCreate=document.querySelector('#form-create')
const creationReport=document.querySelector('#creation-report')
const btnBack=document.querySelector('#btn-back')
const btnHome=document.querySelector('#btn-home')
const id=document.querySelector('#id')
const firstname=document.querySelector('#firstname')
const lastname=document.querySelector('#lastname')
const country=document.querySelector('#country')
const btnCreate=document.querySelector('#btn-create')

// hide creation report and back btn elements
creationReport.hidden=true
btnBack.hidden=true
btnHome.hidden=true
btnCreate.addEventListener('click',e=>{
    e.preventDefault()
    // console.log('event working')

    //using json
let formData={
    id:id.value,
    firstname:firstname.value,
    lastname:lastname.value,
    country:country.value
}

    // console.log(formData)
    fetch('/createProfile',{
        method:'post',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(formData)
    })
        
    .then((response)=>{
    if (response.ok){
        return response.json()
    }
    
    })
    .then((data)=>{
        console.log(data) 
    })
    .catch((error)=>{
        console.log(error)
    })
    creationReport.hidden=false
    formCreate.hidden=true
    btnBack.hidden=false
    btnHome.hidden=false
})

