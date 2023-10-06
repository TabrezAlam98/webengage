let arr=JSON.parse(localStorage.getItem('formData'))
console.log(arr)

display(arr)
function display(arr){
    arr.map((e=>{
        let email=document.createElement('h2')
        email.textContent=`Email Address : ${e.email}`

        let h1tag=document.createElement('h2')

        let code=document.createElement('span')
        code.textContent=`Contact Number : ${e.select} `;

        let num=document.createElement('span')
        num.textContent=e.mobile;
        num.setAttribute("id","num")
      
        h1tag.append(code,num)
        document.querySelector('#main').append(email,h1tag)
    }))

}