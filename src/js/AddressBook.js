class AddressBook extends Index {
  constructor() {
    super()
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
    this.renderAddressBook();
    this.renderContacts()
  }
  renderAddressBook() {
    //Table content
    const table = document.createElement('table')
    const tr = document.createElement('tr')
    const form = document.createElement('form')
    const button = document.createElement('button')
    table.innerHTML
    this.main.append(table)
    tr.innerHTML
    table.append(tr)
    this.headerLabels.forEach(text => {
      const th = document.createElement('th')
      th.innerHTML = text
      tr.append(th)
    })
    //Form content
    form.innerHTML
    this.main.append(form)
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
      div.append(input)
    })
    button.innerHTML = "Save"
    button.setAttribute('class', 'save-button')
    this.main.append(button)
  }
  renderContacts() {
    this.copyStore.forEach((items)=>{
      const targetTable = document.querySelector('table')
      const tr = document.createElement('tr')
      const tdName = document.createElement('td')
      const tdEmail = document.createElement('td')
      const tdPhoneNumber = document.createElement('td')
      tr.innerHTML
      targetTable.append(tr)
      tdName.innerHTML = items.name
      tdEmail.innerHTML = items.email
      tdPhoneNumber.innerHTML = items.phonenumber
      tr.append(tdName)
      tr.append(tdEmail)
      tr.append(tdPhoneNumber)
    })
  }
}
