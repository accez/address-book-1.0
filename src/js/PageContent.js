class PageContent {
  constructor() {
    this.headerLabels = ["Name", "Email", "Phone number", "Actions"]
    this.formText = [
      {
        text: "Name",
        name: "name",
        type: "text"
      },
      {
        text: "Email",
        name: "email",
        type: "email"
      },
      {
        text: "Phone number",
        name: "phonenumber",
        type: "tel"
      }
    ]
    this.renderMain()
    this.renderAddressBook()
    new AddressBook().renderContacts()
  }
  renderMain(){
    const body = document.body
    const main = document.createElement('main')
    main.innerHTML
    body.append(main)
  }
  renderAddressBook() {
    //Table content
    const main = document.querySelector('main')
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    const form = document.createElement('form')
    const button = document.createElement('button')
    table.innerHTML
    main.append(table)
    tr.innerHTML
    table.append(tr)
    this.headerLabels.forEach(text => {
      const th = document.createElement('th')
      th.innerHTML = text
      th.setAttribute('id',text)
      tr.append(th)
    })
    const select = document.querySelector('#Actions')
    select.setAttribute('colspan', '2')
    //Form content
    form.innerHTML
    main.append(form)
    form.setAttribute("id", "myForm")
    this.formText.forEach((text) => {
      const div = document.createElement('div')
      const label = document.createElement('label')
      const input = document.createElement('input')
      div.innerHTML
      form.append(div)
      label.innerHTML = text.text
      div.append(label)
      //setting attributes to the input element
      input.setAttribute('type', text.type)
      input.setAttribute('name', text.name)
      input.setAttribute('id', text.name)
      input.setAttribute('value', text.name)
      div.append(input)
    })
    button.innerHTML = "Save"
    button.setAttribute('class', 'save-button')
    form.append(button)
    const targetTable = document.querySelector('table')
    const tbody = document.createElement('tbody')
    tbody.innerHTML
    targetTable.append(tbody)
  }
}

//EventListners
const addressBook = new AddressBook()
const editContact = new EditContact()
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
  addressBook.delete(store, id)
})
listen('click', '.edit', e => {
  let id = e.target.getAttribute('key')
  editContact.findContact(store, id)
  editContact.renderEditContact()
})
listen('click', '#back', e => {
  document.querySelector("main").outerHTML = ""
  new PageContent()
})
listen('click', '.plusEmail', e => {
    const emailDiv = document.querySelector('.input-div-email')
    const input = document.createElement('input')
    const br = document.createElement('br')
    input.setAttribute('type','email')
    input.setAttribute('name','edit-email')
    input.setAttribute('class','email')
    emailDiv.append(input,br)
})
listen('click', '.plusPhone', e => {
  const emailDiv = document.querySelector('.input-div-phone')
  const input = document.createElement('input')
  const br = document.createElement('br')
  input.setAttribute('type','tel')
  input.setAttribute('name','edit-phone')
  input.setAttribute('class','phone')
  emailDiv.append(input,br)
})
listen('click', '.save-edit', e => {
  editContact.editName()
  editContact.editEmail()
  editContact.editPhone()
  editContact.saveEditedContact()
})

