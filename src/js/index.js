const body = document.body
const table = document.createElement('table')
const tr = document.createElement('tr')
const form = document.createElement('form')
const h1 = document.createElement('h1')
const button = document.createElement('button')

const headerLabels  = ["ID", "First name", "Last name", "Email", "Phone number", "Actions"]
const formText = [
  {
    text: "First name",
    name: "firstname",
    type: "text"
  },
  {
    text: "Last name",
    name: "lastname",
    type: "text"
  },
  {
    text: "Email",
    name: "email",
    type: "text"
  },
  {
    text: "Phone number",
    name: "phonenumber",
    type: "text"
  }
]

//Rendering html
h1.innerText = "Contacts"
body.append(h1)
table.innerHTML
body.append(table)
tr.innerHTML
table.append(tr)
form.innerHTML
body.append(form)

//forEach to render out all the th elements
headerLabels.forEach(text => {
  const th = document.createElement('th')
  th.innerHTML = text
  tr.append(th)
})

//forEach to render out all forms.
formText.forEach((text) => {
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
  div.append(input)
})
button.innerHTML = "Save"
body.append(button)