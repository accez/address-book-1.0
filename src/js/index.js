class Index {
  constructor() {
    this.body = document.body
    this.createMain = document.createElement('main')
    this.main = document.querySelector('main')
    this.h1 = document.createElement('h1')
  }
  renderDOM() {
    this.createMain.innerHTML
    this.body.append(this.createMain)
    this.h1.innerText = "Contacts"
    this.createMain.append(this.h1)
    this.AddressBook = new AddressBook()
    this.Contact = new Contact()
  }
}
