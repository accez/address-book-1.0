let contacts = [{}]

//Listner for save button
let saveButtonListener = listen('click', '.save-button', e => {
  const firstNameInput = document.querySelector('#firstname').value
  const lastNameInput = document.querySelector('#lastname').value
  const emailInput = document.querySelector('#email').value
  const phoneInput = document.querySelector('#phonenumber').value

  CreateContact(firstNameInput,lastNameInput,emailInput,phoneInput)
})

//Creating my contact
function CreateContact(firstname,lastname,email,phonenumber){
  let contact = Object.create(contacts)
  contact.firstname = firstname
  contact.lastname = lastname
  contact.email = email
  contact.phonenumber = phonenumber
  contacts.push(contact)
  let newContacts = [...contacts]
  store.contact = newContacts
  store.save()
  return contact
}