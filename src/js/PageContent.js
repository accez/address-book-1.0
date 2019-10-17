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
      tr.append(th)
    })
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
    main.append(button)
    const targetTable = document.querySelector('table')
    const tbody = document.createElement('tbody')
    tbody.innerHTML
    targetTable.append(tbody)
  }
}
