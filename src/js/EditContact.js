class EditContact {
  constructor(contact) {
    this.contact = contact
  }
  renderEditContact() {
    const main = document.querySelector('main')
    const backButton = document.createElement('button')
    const h1 = document.createElement('h1')
    //innerhtml
    main.innerHTML = ""
    h1.innerHTML = "Edit Contact"
    backButton.innerHTML = 'Back'
    //Setattribute
    backButton.setAttribute('id', 'back')
    //append
    main.append(h1)
    this.renderEditNameForm()
    this.renderEditEmail()
    this.renderEditPhone()
    this.renderSaveButton()
    main.append(backButton)
  }
  renderSaveButton(){
    const saveButton = document.createElement('button')
    const myFormSelector = document.querySelector('#myForm')
    saveButton.innerHTML = "Save"
    saveButton.setAttribute('class', 'save-edit')
    saveButton.setAttribute('type', 'button')
    myFormSelector.append(saveButton)
  }

  renderEditNameForm() {
    const main = document.querySelector('main')
    const form = document.createElement('form')
    const div = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    form.innerHTML
    form.setAttribute('id', 'myForm')
    div.innerHTML
    div.setAttribute('class', 'name-edit')
    label.innerHTML = "Edit Name"
    input.innerHTML
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'name-edit')
    input.setAttribute('class', 'name')
    input.setAttribute('value', this.contact.name)
    main.append(form)
    form.append(div)
    div.append(label)
    div.append(input)
  }
  renderEditEmail() {
    const form = document.querySelector('form')
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const label = document.createElement('label')
    const button = document.createElement('button')
    const button2 = document.createElement('button')
    div.innerHTML
    div.setAttribute('class', 'edit-email')
    form.append(div)
    label.innerHTML = 'Edit Email'
    div.append(label)
    div2.setAttribute('class','input-div-email')
    div.append(div2)
    this.contact.email.forEach(item =>{
      const input = document.createElement('input')
      input.innerHTML
      input.setAttribute('type', 'email')
      input.setAttribute('name', 'edit-email')
      input.setAttribute('class', 'email')
      input.setAttribute('value', item)
      div2.append(input)
    })
    button.innerHTML = '+'
    button.setAttribute('class', 'plusEmail')
    button.setAttribute('type', 'button')
    div.append(button)
    button2.innerHTML = '-'
    button2.setAttribute('class', 'minusEmail')
    button2.setAttribute('type', 'button')
    div.append(button2)
  }
  renderEditPhone() {
    const form = document.querySelector('form')
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const label = document.createElement('label')
    const button = document.createElement('button')
    const button2 = document.createElement('button')
    div.innerHTML
    div.setAttribute('class', 'edit-phone')
    form.append(div)
    label.innerHTML = 'Edit Phone'
    div.append(label)
    div2.setAttribute('class','input-div-phone')
    div.append(div2)
    this.contact.phone.forEach(item =>{
      const input = document.createElement('input')
      input.innerHTML
      input.setAttribute('type', 'tel')
      input.setAttribute('name', 'edit-phone')
      input.setAttribute('class', 'phone')
      input.setAttribute('value', item)
      div2.append(input)
    })
    button.innerHTML = '+'
    button.setAttribute('class', 'plusPhone')
    button.setAttribute('type', 'button')
    div.append(button)
    button2.innerHTML = '-'
    button2.setAttribute('class', 'minusPhone')
    button2.setAttribute('type', 'button')
    div.append(button2)
  }
  findContact(array, target) {
    var item = array.contacts.find(item => item.id === Number(target))
    this.contact = item
  }
  editName() {
    const querySelectorEmail = document.querySelector('.name').value
    this.contact.name = querySelectorEmail
  }

  editEmail() {
    const querySelectorEmail = document.querySelectorAll('.email')
    let arr = []
    for (const item of querySelectorEmail) {
      arr.push(item.value)
      this.contact.email = arr
    }
  }
  editPhone() {
    const querySelectorPhone = document.querySelectorAll('.phone')
    let arr = []
    for (const item of querySelectorPhone) {
      arr.push(item.value)
      this.contact.phone = arr
    }
  }
  saveEditedContact() {
    var item = store.contacts.findIndex(item => item.id === this.contact.id)
    var item2 = store.contacts.find(item => item.id === this.contact.id)
    store.contacts.splice(item, 1, item2)
    store.save()
  }
}
