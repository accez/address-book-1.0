//Rendering HTML
const body = document.body
const table = document.createElement('table')
const tr = document.createElement('tr')
const form = document.createElement('form')
const h1 = document.createElement('h1')
const button = document.createElement('button')

const headerLabels = ["ID", "First name", "Last name", "Email", "Phone number", "Actions"]
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
    type: "email"
  },
  {
    text: "Phone number",
    name: "phonenumber",
    type: "tel"
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
  input.setAttribute('id', text.name)
  div.append(input)
})
button.innerHTML = "Save"
button.setAttribute('class', 'save-button')
body.append(button)


// Delegated eventlistner

const [listen, unlisten] = (() => {

  let listeningOnType = {};
  let listeners = [];

  function listen(eventType, cssSelector, func) {
    // Register a "listener"
    let listener = { eventType, cssSelector, func };
    listeners.push(listener);
    // If no listener on window[eventType] register a 
    // a real/raw js-listener
    if (!listeningOnType[eventType]) {
      // add event listener for this type on the whole window
      window.addEventListener(eventType, e => {
        listeners
          .filter(x => x.eventType === eventType)
          .forEach(listener => {
            if (e.target.closest(listener.cssSelector)) {
              listener.func(e);
            }
          });
      });
      listeningOnType[eventType] = true;
    }
    return listener;
  }

  function unlisten(listener) {
    listeners.splice(listeners.indexOf(listener), 1);
  }

  return [listen, unlisten];

})();

//Local storage
// Initial read
let store;
try {
 store = JSON.parse(localStorage.store);
}
catch(e){
 store = {};
}
 
store.save = function(){
  localStorage.store = JSON.stringify(this);
};

const contacts = [{}]

//Creating object with 
let saveButtonListener = listen('click', '.save-button', e => {
  const firstNameInput = document.querySelector('#firstname').value
  const lastNameInput = document.querySelector('#lastname').value
  const emailInput = document.querySelector('#email').value
  const phoneInput = document.querySelector('#phonenumber').value
  let email = []
  let phone = []
  email = emailInput
  phone = phoneInput
  const contact = Object.create(contacts)
  contact.firstname = firstNameInput
  contact.lastname = lastNameInput
  
  contact.email = emailInput
  contact.phonenumber = phoneInput
  contacts.push(contact)
  
  console.log(contacts)
})
