const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
 
}

function addBookToLibrary() {
  let title = document.querySelector(`#title`).value;
  let pages = document.querySelector(`#pages`).value;
  let author = document.querySelector(`#author`).value;
  let read = document.querySelector(`#read`).checked;
  let newBook = new Book(author,title,pages, read);
  myLibrary.push(newBook);
  render();
  
}

document.querySelector(`#newBook`).addEventListener(`submit`, function (event) {
  event.preventDefault();
  addBookToLibrary();
});


function render(){
  let library = document.querySelector(`#Library`);
  for (let i = 0; i<= myLibrary.length;  i++){
    console.log(myLibrary[i])
  }
}