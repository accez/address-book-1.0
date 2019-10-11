class Contact extends Index {
  constructor() {
    super()
    this.saveButtonListner = listen('click', '.save-button', e => {
      this.saveContact()
    });
  }
  saveContact() {
    const nameInput = document.querySelector('#name').value
    const emailInput = document.querySelector('#email').value
    const phoneNumberInput = document.querySelector('#phonenumber').value
    let data = {
      name: nameInput,
      email: emailInput,
      phonenumber: phoneNumberInput
    }
    store.push(data)
    store.forEach((value, key) => {
      value.id = key++
    })
    store.save()
    this.resetForm()
  }
  resetForm() {
    document.querySelector('#myForm').reset()
  }
}