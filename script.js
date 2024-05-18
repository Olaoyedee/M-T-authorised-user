const myForm=document.querySelector('#form')
const input = document.querySelectorAll('.input')
const errs = document.querySelectorAll('.error')
const ssn =document.querySelector('.ssn')
const dob =document.querySelector('.dob')
const yes =document.querySelector('#yes')
const no =document.querySelector('#no')
const pNumber=document.querySelector('.Pnumber')
const check= document.querySelector('#checkb')
const button = document.querySelector('.button')
const container =document.querySelector('.container')
const serviceID ="service_islpyqb"
const templateID ="template_xq933ds"
let citizen









 
    

yes.addEventListener('click', checkit)

function checkit(e){
 e.target.checked= true
 no.checked=false
 if(e.target.checked){
    citizen ='yes'
    
 }
}

no.addEventListener('click', uncheckit)
function uncheckit(e){
    e.target.checked= true
    yes.checked=false
    if(e.target.checked){
        citizen='no'
    }
}
ssn.addEventListener('keyup', ssndown)
pNumber.addEventListener('keyup', prephone)
dob.addEventListener('keyup', dobdown)
function prephone(){
    if(pNumber.value.length===1){
        pNumber.value= '+1('+ pNumber.value
    }
    if(pNumber.value.length===6){
        pNumber.value= pNumber.value+') '
    }
    if(pNumber.value.length===11){
        pNumber.value=pNumber.value+'-'
    }
}
function dobdown(){
    if(dob.value.length===2){
        dob.value=dob.value + '-'
    }
    if(dob.value.length===5){
        dob.value=dob.value + '-'
    }
}
function ssndown(){
 
  if(ssn.value.length===3){
    ssn.value=ssn.value + '-'
  }
  if(ssn.value.length===6){
    ssn.value=ssn.value + '-'
  } 

  
}
check.addEventListener('click', checksit)
function checksit(e){
 e.target.checked=true

}




myForm.addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault()

    let valid=true
    
    let selectedState =container.firstElementChild.value
    

    input.forEach((input) => {
        input.style.borderColor = 'green'
    })
    errs.forEach((err) => {
        err.style.color ='red'
        err.textContent =''
        
    })
 

    if(input[0].value.length <3 || /\d/.test(input[0].value)){
        input[0].style.borderColor = 'red'
        errs[0].textContent = 'Name not accepted,input a valid name'
        valid = false
       
    }
    if(input[1].value.length >1 || /\d/.test(input[1].value)){
        input[1].style.borderColor = 'red'
        errs[1].textContent = 'Middle Initials only,input a valid initial'
        valid = false
       
    }
    if(input[2].value.length <3 || /\d/.test(input[2].value)){
        input[2].style.borderColor = 'red'
        errs[2].textContent = 'Name not accepted,input a valid name'
        valid = false
       
    }
    if(input[3].value.length < 11 || !/\d+$/.test(input[3].value)){
        input[3].style.borderColor = 'red'
        errs[3].textContent = 'Your ssn should be a number'
        valid = false
    }
    if(input[4].value.length < 10 || !/\d+$/.test(input[4].value)){
        input[4].style.borderColor = 'red'
        errs[4].textContent = 'date of birth inaccurate'
        valid = false
    }
    if(input[5].value.length <3 ){
        input[5].style.borderColor = 'red'
        errs[5].textContent = 'enter a valid address'
        valid = false
    }
    if(input[7].value.length <5 || !/\d+$/.test(input[3].value)){
        input[7].style.borderColor = 'red'
        errs[7].textContent = 'Invalid Zipcode'
        valid = false
    }
    if(input[8].value.length <2 || /\d/.test(input[8].value)){
        input[8].style.borderColor = 'red'
        errs[8].textContent = 'City Name not accepted,input a valid city name'
        valid = false
       
    }
    if(input[10].value.length >16 || !/\d+$/.test(input[10].value)){
        input[10].style.borderColor = 'red'
        errs[10].textContent = 'Invalid Phone number'
        valid = false
    }
    if(!input[11].value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        input[11].style.borderColor = 'red'
        errs[11].textContent = 'Invalid email'
        valid = false
    }
    if(input[12].value.length >8 || !/\d+$/.test(input[12].value)){
        input[12].style.borderColor = 'red'
        errs[12].textContent = 'Amount suspicion'
        valid = false
    }
    if(input[13].value.length >8 || !/\d+$/.test(input[13].value)){
        input[13].style.borderColor = 'red'
        errs[13].textContent = 'Amount suspicion'
        valid = false
    }
    
   
    if(dob.value.charAt(0)>1){
        dob.style.borderColor = 'red'
        errs[4].textContent = 'date of birth inaccurate'
        valid = false
    }
    // if(dob.value.charAt(1)>2){
    //     dob.style.borderColor = 'red'
    //     errs[4].textContent = 'date of birth inaccurate'
    //     valid = false
    // }
    console.log(dob.value.charAt(6)>2)
    if(dob.value.charAt(3)>3){
        dob.style.borderColor = 'red'
        errs[4].textContent = 'date of birth inaccurate'
        valid = false
    }
    if(dob.value.charAt(6)>2){
        dob.style.borderColor = 'red'
        errs[4].textContent = 'date of birth inaccurate'
        valid = false
    }
    if(2024 - Number(dob.value.substring(6,10)) <=17){
        dob.style.borderColor = 'red'
        errs[4].textContent = 'Under 18 are not allowed'
        valid = false
    }
    if(!check.checked){
        valid=false
        errs[14].textContent = 'check the box above to proceed'
    }
   
    if(selectedState==='--choose your state--'){
        input[9].style.borderColor='red'
        errs[9].textContent='select a state'
        valid = false
        container.style.borderColor='red'
    }
   if(valid){
    
  
    button.disabled = true
    console.log(citizen)
    console.log((dob.value.substring(6,10)))
    console.log(selectedState)
    sendMail()
    
    myForm.reset()
    
   
   
    
   }
  
   button.disabled = false
  
   
   
}

function sendMail(){
    let selectedState =container.firstElementChild.value
    var params={
        firstname: input[0].value,
        mid: input[1].value,
        lastname: input[2].value,
        ssn: input[3].value,
        date: input[4].value,
        address1: input[5].value,
        address2: input[6].value,
        zipcode: input[7].value,
        city: input[8].value, 
        state: input[9].value,
        pnumber: input[10].value,
        email: input[11].value,
        ai: input[12].value,
        mr: input[13].value,
        ss: selectedState,
        yes: citizen
    }
    emailjs.send(serviceID,templateID,params)
        .then(
            (res=>{
                input[0].value="";
                input[1].value="";
                input[2].value="";
                input[3].value="";
                input[4].value="";
                input[5].value="";
                input[6].value="";
                input[7].value="";
                input[8].value="";
                input[9].value="";
                input[10].value="";
                input[11].value="";
                input[12].value="";
                input[13].value="";
                selectedState="";
                citizen=""
                console.log(res);
                alert('message sent') 
            })
            // .catch(err=>console.log(err))
        )
    
}
async function getbreeds(){
    const response = await fetch(`https://gist.githubusercontent.com/shawnbot/ab11ace1bafa23be290c193049a71cb5/raw/f5e9c2788d2221fe4afe1930567c2cbe60c7e77a/states-array.json`)
    const data = await response.json()
    document.querySelector('.container').innerHTML = ` 
    <select id='ss' name='ss' class='container select'; >
    <option>--choose your state--</option>
    ${data.map(dat => {
        return `<option>${dat.name}</option>`
        
    })}
    </select>`

    
     
     
     
 }
 
  
 getbreeds()






 
