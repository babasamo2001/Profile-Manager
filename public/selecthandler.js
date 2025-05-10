// console.log('am workings')

const searchId=document.querySelector('#searchid')
const id=document.querySelector('#id')
const firstname=document.querySelector('#firstname')
const lastname=document.querySelector('#lastname')
const country=document.querySelector('#country')
const btnGet=document.querySelector('#btn-get')
const formContainer=document.querySelector('#container')
const btnReset=document.querySelector('#btn-reset')


//hide form fields on page load
formContainer.hidden=true

//reset the search input handler
btnReset.addEventListener('click',(e)=>{
    e.preventDefault()
    searchId.value=''
})

//event listener for get Profile btn
btnGet.addEventListener('click',(e=>{
    e.preventDefault()
    const Id=searchId.value

    //handles empty input from user
if (Id){
    console.log('Id Ok!  '+Id)
}
else{
    alert('You must provide an Id to continue')
    return
}
    
    fetch(`/getProfile/${Id}`,{
        method:'get',
        headers:{
            'content-type':'application/json'
        }
    })
    .then((response)=>{
        // console.log(response)
       return response.json()
        // response.json()
    })
    .then((data)=>{
    // console.log(data[0].Firstname)  
    id.disabled=true
    id.value=data[0].Id
    firstname.value=data[0].Firstname
    lastname.value=data[0].Lastname
    country.value=data[0].Country
    formContainer.hidden=false
    
    // regForm['btn-btnDelete2'].hidden=true
        
    })
    .catch((error)=>{
        console.log(error)
    })    
}))




