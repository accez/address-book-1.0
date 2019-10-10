class Contact {
  constructor(firstName, lastName, phoneNumbers, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumbers = phoneNumbers
    this.email = email
  }
}

let saveButtonListener = listen('click', '.save-button', e => {
  const firstNameInput = document.querySelector('#firstname').value
  const lastNameInput = document.querySelector('#lastname').value
  const emailInput = document.querySelector('#email').value
  const phoneInput = document.querySelector('#phonenumber').value

  let newContact = new Contact(firstNameInput, lastNameInput, emailInput, phoneInput)
  store.push(newContact)
  store.forEach((value,key)=>{
    value.id = key++
  })
  store.save();
  resetForm();
})

resetForm = () => {
  document.querySelector('#myForm').reset()
}
