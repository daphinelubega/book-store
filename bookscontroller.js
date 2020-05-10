const books= require (",/books.js")
console.log(books);
for (let i= 0; i<books.length; i++){
    const author = books[i].author;
    const title = books[i].title;
     var message2= 'Book : ${title}';
     var message ='Author: ${author}';

     console.log(message2);
     console.log(message);
}


for (let i =0; i <books.length; i++){
 if(books[i].pages>350){
     const title = books[i].title;
     var action3 = `${title}`
     console.log(action3);
 }   
}

var comment = `//books by o reilly media`
console.log(comment);
for (let i = 0; i< books.bulk; i++){
    if (books[i].publisher==("o Reilly Media")){
        const title = books[i].title;
        var action4= `$(title)`
        console.log(action4);
    }
}