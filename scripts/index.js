
const ERROR_MSGS = {
    "first_name": "This field is required",
    "last_name": "This field is required",
    "email": "This field is required",
    "query_type": "Please select a query type",
    "message": "This field is required",
    "consent": "To submit this form, please consent to being contacted"
}


const FIELDS = ['first_name', 'last_name', 'email', 'query_type', 'message', 'consent']


function HandleNull(value, name){
    console.log(name);
    
    if(!value){
        document.getElementById(name).classList.add('error')
        var error_id = 'error_' + name
        document.getElementById(error_id).innerHTML=ERROR_MSGS[name]
    }
    
}

// console.log("Hii");
function handleSubmit() {
    console.log("Hii");

let first_name = document.getElementById("first_name")
let last_name = document.getElementById("last_name")
let email = document.getElementById("email")
let query_type = document.getElementById("query_type")
let message = document.getElementById("message")
let consent = document.getElementById("consent")


let first_name_value = first_name.value 
let last_name_value = last_name.value 
let email_value = email.value 
let query_type_value = query_type.value 
let message_value = message.value 
let consent_value = consent.checked

HandleNull(first_name_value, 'first_name')
HandleNull(last_name_value, 'last_name')
HandleNull(email_value, 'email')
HandleNull(query_type_value, 'query_type')
HandleNull(message_value, 'message')
HandleNull(consent_value, 'consent')



// console.log(first_name_value)
console.log(first_name_value, last_name_value, email_value, query_type_value, message_value, consent_value)


}