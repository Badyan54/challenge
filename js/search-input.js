const query = window.matchMedia('(max-width: 860px)')
let searchContainer = document.querySelector('.search-container')
let searchBtn = searchContainer.querySelector('button');
let searchInput = searchContainer.querySelector('input')

// mediaQuery.addListener(() =>{
//   if (query.matches){
//     return // here change 
//   }
// })

const togleAction = (action) =>{
  searchBtn.classList[action]("active")
  searchContainer.classList[action]("active")
  searchInput.classList[action]("active")
}

searchBtn.onclick = function () {
  searchInput.focus()
  if (this.classList.contains('active')) { return } // here be search...
  
  togleAction('add')
}

searchInput.onblur = (event) =>{
  if (event.relatedTarget === searchBtn) {
    return
  }
  togleAction('remove')
}

