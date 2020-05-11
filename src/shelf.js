function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  };
  return shelf
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i ++) {
    if (title === shelf[i].title) {
      shelf.splice(i, 1)
    };
  }; return shelf
}

function listTitles(shelf) {
  var titlesList = []
  shelf.forEach(element => titlesList.push(element.title))
  return titlesList.join(", ")
}

function searchShelf(shelf, title) {
  var titlesList = listTitles(shelf)
  return titlesList.includes(title)
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
