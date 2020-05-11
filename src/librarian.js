var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

function createLibrary(library) {
    return library
  }

class Librarian {
  constructor(name, lib) {
    this.name = name;
    this.library = lib;
  }
  greetPatron(name, morning) {
    if (morning === undefined) {
      morning = false
    };
    if (morning == false) {
      return `Hello, ${name}!`
    } else if (morning == true) {
      return `Good morning, ${name}!`
    }
  }
  findBook(title) {
    // Pass book title ("The Fifth Season"),
    //see if it is on shelves,
    // if on shelves is true
    //return "Yes, we have ${title}"
    if (searchShelf(lib, title) == true) {
      return `Yes, we have ${title}`
    } else if (searchShelf(lib, title) == false) {
      return `Sorry, we do not have ${title}`
    }
  }
}

module.exports = Librarian;
