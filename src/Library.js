function createLibrary(name) {
  lib = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return lib
};

function addBook(library, book) {
  // library.shelves.fantasy[0] = book
  if (book.genre === "fantasy") {
    library.shelves.fantasy.push(book)
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.push(book)
  } else if (book.genre === "fiction") {
    library.shelves.fiction.push(book)
  }
  return library
}

function checkoutBook(library, title) {
  // if (library.shelves.fiction.includes(title) === true) {
  //   library.shelves.fictions.push(title)
  // }
  // return library
  // for (var i = 0; i < library.shelves.length; i ++) {
  //   if (title === library[i].title) {
  //     library.splice(i, 1)
  //   };
  // };
  // library.shelves.fiction.filter(el => el.title !== title);
  
  return `You have now checked out ${title} from the ${library.name}`
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
