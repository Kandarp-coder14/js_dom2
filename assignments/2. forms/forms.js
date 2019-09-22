var btn = document.querySelector('#btn')
btn.addEventListener('click', handleSubmit)
var newBox = document.querySelector('#msg')

var wrapper = document.querySelector(".wrapper")


function handleSubmit() {
    var name = document.querySelector('#name').value
    var email = document.querySelector('#email').value
    var password = document.querySelector('#password').value
    if(name.length==0){
        newBox.innerHTML=('name field cant be empty')
    } else if (email.length==0){
        newBox.innerHTML=('email field cant be empty')
    } else if(password.length==0){
        newBox.innerHTML=('password field cant be empty')
    }else{
        wrapper.innerHTML=""
        newBox.innerHTML=(`you are ${name} your email is ${email} and your password is ${password}`)
    }
}
