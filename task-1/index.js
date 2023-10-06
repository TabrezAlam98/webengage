document.querySelector('#form').addEventListener("submit",formSubmit)

let email=document.getElementById('email')
let num=document.getElementById('mobile')
let button=document.getElementById('btn')


email.addEventListener('input',()=>{
    if(email.value.length<8 ){
        msg1.innerHTML='Email should be 8 digits'
        msg1.style.color='red'
        
    }else{
        msg1.style.color='white'
    }
})

num.addEventListener('input',()=>{
    if(num.value.length<10 ){
        msg2.innerHTML='Number should be 10 digits'
        msg2.style.color='red'
    }else{
        msg2.style.color='white'
    }
})

let arr=[]
function formSubmit(e){
    e.preventDefault()

    let obj={
        email:form.email.value,
        mobile:form.mobile.value,
        select:form.select.value

    }
    arr.push(obj)
console.log(arr)
localStorage.setItem("formData",JSON.stringify(arr))
window.location='thankyou.html'
}