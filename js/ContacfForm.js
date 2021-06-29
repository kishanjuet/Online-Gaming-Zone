const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const nameContainer = document.getElementById('name-container')
const emailContainer = document.getElementById('email-container')
const messageContainer = document.getElementById('message-container')
const form  = document.getElementById('form')

const elements = [[name, nameContainer], [email, emailContainer], [message, messageContainer]]

form.addEventListener('submit', (e) =>{
    console.log(name.value)
    if (name.value  == ''|| name.value == null ){
        nameContainer.classList.add('not-empty')
        e.preventDefault()
    }

    if (email.value  == ''|| email.value == null ) {
        emailContainer.classList.add('not-empty')
        e.preventDefault()
    }

    if (message.value  == ''|| message.value == null ) {
        messageContainer.classList.add('not-empty')
        e.preventDefault()
    }
    console.log('presionado')
})

elements.forEach(elements =>  {
    elements[0].addEventListener('focus', () =>{
        if (elements[1].classList.contains('not-empty'))
            elements[1].classList.remove('not-empty')
    })

    elements[0].addEventListener('blur', () =>{
        if (elements[0].value == '' || elements[0].value == null ){
            if (!(elements[1].classList.contains('not-empty')))
                elements[1].classList.add('not-empty')
        }
    })

})

email.addEventListener('blur', () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email.value != '' || email.value != null){
        if (emailRegex.test(email.value.trim())){
            emailContainer.classList.remove('invalid')
        }else {
            emailContainer.classList.add('invalid')
        }
    }
})

email.addEventListener('focus', () => {
    if (emailContainer.classList.contains('invalid'))
        emailContainer.classList.remove('invalid')
})
