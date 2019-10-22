class EditContact {
  constructor(contact) {
    this.contact = contact
  }

  renderEditContact() {
    const main = document.querySelector('main')
    const backButton = document.createElement('button')
    const saveButton = document.createElement('button')
    const h1 = document.createElement('h1')
    //innerhtml
    main.innerHTML = ""
    h1.innerHTML = "Edit Contact"
    backButton.innerHTML = 'Back'
    saveButton.innerHTML = "Save"
    //Setattribute
    backButton.setAttribute('id', 'back')
    saveButton.setAttribute('class', 'save-edit')
    //append
    main.append(h1)
    this.renderEditNameForm()
    this.renderEditEmail()
    this.renderEditPhone()
    main.append(saveButton)
    main.append(backButton)
  }

  renderEditNameForm() {
    const main = document.querySelector('main')
    const form = document.createElement('form')
    const div = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const br = document.createElement('br')
    form.innerHTML
    form.setAttribute('id', 'myForm')
    div.innerHTML
    div.setAttribute('class', 'name-edit')
    label.innerHTML = "Edit Name"
    input.innerHTML
    label.append(br)
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
    const br = document.createElement('br')
    div.innerHTML
    div.setAttribute('class', 'edit-email')
    form.append(div)
    label.innerHTML = 'Edit Email'
    div.append(label)
    label.append(br)
    div2.setAttribute('class','input-div-email')
    div.append(div2)
    this.contact.email.forEach(item =>{
      const input = document.createElement('input')
      const br = document.createElement('br')
      br.innerHTML
      input.innerHTML
      input.setAttribute('type', 'email')
      input.setAttribute('name', 'edit-email')
      input.setAttribute('class', 'email')
      input.setAttribute('value', item)
      div2.append(input)
      div2.append(br)
    })
    button.innerHTML = '+'
    button.setAttribute('class', 'plusEmail')
    button.setAttribute('type', 'button')
    div.append(button)
  }
  renderEditPhone() {
    const form = document.querySelector('form')
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const label = document.createElement('label')
    const button = document.createElement('button')
    const br = document.createElement('br')
    div.innerHTML
    div.setAttribute('class', 'edit-phone')
    form.append(div)
    label.innerHTML = 'Edit Phone'
    div.append(label)
    div2.setAttribute('class','input-div-phone')
    div.append(div2)
    label.append(br)
    this.contact.phone.forEach(item =>{
      const input = document.createElement('input')
      const br = document.createElement('br')
      br.innerHTML
      input.innerHTML
      input.setAttribute('type', 'tel')
      input.setAttribute('name', 'edit-phone')
      input.setAttribute('class', 'phone')
      input.setAttribute('value', item)
      div2.append(input)
      div2.append(br)
    })
    button.innerHTML = '+'
    button.setAttribute('class', 'plusPhone')
    button.setAttribute('type', 'button')
    div.append(button)
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
