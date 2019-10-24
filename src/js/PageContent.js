class PageContent {
  constructor() {
    this.headerLabels = ["Name", "Email", "Phone number", "Actions"]
    this.formText = [
      {
        text: "Name",
        name: "name",
        type: "text",
        placeholder:"Enter your name"
      },
      {
        text: "Email",
        name: "email",
        type: "email",
        placeholder:"Enter your email "

      },
      {
        text: "Phone number",
        name: "phonenumber",
        type: "tel",
        placeholder:"Enter your phone number"

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
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    const form = document.createElement('form')
    const button = document.createElement('button')
    h1.innerHTML = "Contact List"
    main.append(h1)
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
    h2.innerHTML = "Add a contact"
    form.append(h2)
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
      input.setAttribute('placeholder', text.placeholder)
      div.append(input)
    })
    button.innerHTML = "Save"
    button.setAttribute('class', 'save-button')
    button.setAttribute('type', 'button')
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
  let arr = [{name:nameInput,email:emailArr,phone:phoneArr,button:'Restore',id:Date.now()}]
  if(nameInput === ''){
    alert('Need to enter a name')
  }else{
    addressBook.add(new Contact(nameInput, emailArr, phoneArr,arr))
  }
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
    input.setAttribute('type','email')
    input.setAttribute('name','edit-email')
    input.setAttribute('class','email')
    emailDiv.append(input)
})
listen('click', '.minusEmail', e => {
  const parent = document.querySelector('.input-div-email')
  parent.removeChild(parent.lastElementChild);
})
listen('click', '.plusPhone', e => {
  const emailDiv = document.querySelector('.input-div-phone')
  const input = document.createElement('input')
  input.setAttribute('type','tel')
  input.setAttribute('name','edit-phone')
  input.setAttribute('class','phone')
  emailDiv.append(input)
})
listen('click', '.minusPhone', e => {
  const parent = document.querySelector('.input-div-phone')
  parent.removeChild(parent.lastElementChild);

})
listen('click', '.save-edit', e => {
  editContact.editName()
  editContact.editEmail()
  editContact.editPhone()
  editContact.saveToHistory()
  editContact.saveEditedContact()
  editContact.renderHistoryInfo()
})

listen('click', '.Restore', e => {
  let id = e.target.getAttribute('key')
  editContact.restoreContacts(id)
  editContact.saveEditedContact()
  editContact.renderEditContact()
})