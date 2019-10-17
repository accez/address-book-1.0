class Contact {
  constructor(name, email, phone) {
    this.name = name
    this.email = email
    this.phone = phone
  }
}
const addressBook = new AddressBook()

listen('click', '.save-button', e => {
  let emailArr = []
  let phoneArr = []
  const nameInput = document.querySelector('#name').value
  const emailInput = document.querySelector('#email').value
  const phoneNumberInput = document.querySelector('#phonenumber').value
  emailArr.push(emailInput)
  phoneArr.push(phoneNumberInput)
  addressBook.add(new Contact(nameInput, emailArr, phoneArr))
  addressBook.renderContacts()
});

listen('click', '.remove', e => {
  let id = e.target.getAttribute('key')
  addressBook.delete(store,id)
});