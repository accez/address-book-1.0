class EditContact {
  constructor(){

  }

  renderEditContact(){
    const main = document.querySelector('main')
    main.innerHTML = ""
    const p = document.createElement('p')
    p.innerHTML = 'back'
   p.setAttribute('id','back')
    main.append(p)
  }
}