function createTitle(bookIdea) {
  return `The ${bookIdea}`
};

function buildMainCharacter(name, age, pronouns) {
  var charObj = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return charObj
};

function saveReview(review, reviewArray) {
  if (reviewArray.find(element => element === review)) {
    return reviewArray
  } else {
    reviewArray.push(review)
  };
 return reviewArray
}

function calculatePageCount(ofBook) {
  pageCount = ofBook.length * 20
  return pageCount
}

function writeBook(title, mainChar, genre) {
  return {
    title: title,
    mainCharacter: mainChar,
    pageCount: calculatePageCount(title),
    genre: genre
  }
};

function editBook(book) {
  book.pageCount = (book.pageCount * 0.75)
  return book.pageCount
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
};
