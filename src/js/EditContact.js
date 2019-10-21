class EditContact {
  constructor(contact){
    this.contact = contact
  }

  renderEditContact(){
    const main = document.querySelector('main')
    const button = document.createElement('button')
    const h1 = document.createElement('h1')
    //innerhtml
    main.innerHTML = ""
    h1.innerHTML = "Edit Contact"
    button.innerHTML = 'back'
    //Setattribute
    button.setAttribute('id','back')
    //append
    main.append(h1)
    this.renderEditNameForm()
    this.renderEditEmail()
    this.renderEditPhone()
    main.append(button)
  }

  renderEditNameForm(){
    const main = document.querySelector('main')
    const form = document.createElement('form')
    const div = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    form.innerHTML
    div.innerHTML
    div.setAttribute('class','name-edit')
    label.innerHTML = "Edit Name"
    input.innerHTML
    input.setAttribute('type','text')
    input.setAttribute('name','name-edit')
    input.setAttribute('value', this.contact.name)
    main.append(form)
    form.append(div)
    div.append(label)
    div.append(input)
  }
  renderEditEmail(){
    const form = document.querySelector('form')
    const div = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    div.innerHTML
    div.setAttribute('class','edit-email')
    form.append(div)
    label.innerHTML = 'Edit Email'
    div.append(label)
    input.innerHTML
    input.setAttribute('type','email')
    input.setAttribute('name','edit-email')
    input.setAttribute('value', this.contact.email)
    div.append(input)
  }
  renderEditPhone(){
    const form = document.querySelector('form')
    const div = document.createElement('div')
    const label = document.createElement('label')
    const input = document.createElement('input')
    div.innerHTML
    div.setAttribute('class','edit-phone')
    form.append(div)
    label.innerHTML = 'Edit Phone'
    div.append(label)
    input.innerHTML
    input.setAttribute('type','tel')
    input.setAttribute('name','edit-Phone')
    input.setAttribute('value', this.contact.phone)
    div.append(input)
  }
  findContact(array,target){
    var item = array.contacts.find(item => item.id === Number(target))
    this.contact = item
    console.log(this.contact)
  }
}
