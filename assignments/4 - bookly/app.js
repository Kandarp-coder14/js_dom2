var bookArr = JSON.parse(localStorage.getItem('book-arr')) || [];

var addBtn = document.querySelector('.addButton')
addBtn.addEventListener('click', addBooks)

document.querySelector('#hide').addEventListener('click', visibilityNone)

var bookInput = document.querySelector('.bookInput')
var searchInput = document.querySelector('.searchInput')

window.addEventListener('keyup', (e)=>searchBooks(e))



function addBooks (event){
    event.preventDefault()
    bookArr.push(bookInput.value)
    console.log(bookArr)
    bookInput.value= '';
    display(bookArr)

}

function searchBooks (e) {
    e.preventDefault()

   if( e.keyCode == 13) {
        var bookName = searchInput.value
        var filterBook = bookArr.filter(book => book==bookName) 
        display(filterBook)
    }
}

function display(arr) {
    document.querySelector('#addBook').innerHTML = ''
    arr.forEach(book => {
       var li = document.createElement('li')
       li.innerText=book
       document.querySelector('#addBook').appendChild(li) 
    })
    localStorage.setItem("book-arr",JSON.stringify(bookArr));
}


function visibilityNone () {
    var checkBox = document.querySelector('#hide')
    if(checkBox.checked){
        document.querySelector('ul').innerHTML = "";  
    }else{
        display(bookArr)      
    }
}

    display(bookArr);


