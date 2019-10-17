class AddressBook {
  constructor() {
  }
  add(contact) {
    contact.id = store.contacts.length;
    contact.remove = 'Remove';
    store.contacts.push(contact)
    store.save()
  }
  
  delete(array,etarget){
    let idToRemove;
    array.contacts.filter((item, index) => {
      if (item.id == etarget) {
        idToRemove = index;
        return true;
      }
    })
    store.contacts.splice(idToRemove, 1)
    store.save()
    this.renderContacts()
  }

  renderContacts() {
    let tbodySelector = document.querySelector('tbody')  
    tbodySelector.innerHTML = ""
  
    store.contacts.forEach(items => {
      const tr = document.createElement('tr')
      tr.innerHTML
      tbodySelector.append(tr)
      const tdName = document.createElement('td')
      const tdEmail = document.createElement('td')
      const tdPhoneNumber = document.createElement('td')
      const tdRemove = document.createElement('td')
      tdName.innerHTML = items.name
      tdEmail.innerHTML = items.email
      tdPhoneNumber.innerHTML = items.phone
      tdRemove.innerHTML = items.remove
      tdRemove.setAttribute('class', 'remove')
      tdRemove.setAttribute('key', items.id)
      tr.append(tdName)
      tr.append(tdEmail)
      tr.append(tdPhoneNumber)
      tr.append(tdRemove)
    })
  }
}
