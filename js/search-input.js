let searchContainer = document.querySelector('.search-container')
let searchBtn = searchContainer.querySelector('button');
let searchInput = searchContainer.querySelector('input')

const togleAction = (action) =>{
  searchBtn.classList[action]("active")
  searchContainer.classList[action]("active")
  searchInput.classList[action]("active")
}

searchBtn.onclick = function () {
  if (this.classList.contains('active')) { return } // here be search...
  
  togleAction('add')
}

searchInput.onblur = (event) =>{
  if (event.relatedTarget === searchBtn) { return }
  togleAction('remove')
}

searchBtn.onblur = (event) =>{
  if (event.relatedTarget === searchInput) { return }
  togleAction('remove')
}

const handleMediChange = () =>{
  if (query.matches){
    document.head.appendChild(Object.assign(document.createElement('link'), {
      rel: 'stylesheet',
      href: './css/search_input_after_860.css'
    })) 
  } else{
    const link = document.querySelector('link[href="./css/search_input_after_860.css"]')
    if (link){
      link.remove()
    }
  }
}

let burgerBtn = document.querySelector('.burger-menu')
let headerNav = document.querySelector('.header-nav')
burgerBtn.onclick = function (){
  this.classList.toggle('active')
  headerNav.classList.toggle('active')
}

const query = window.matchMedia('(max-width: 860px)')
query.addEventListener('change', handleMediChange)

handleMediChange()
