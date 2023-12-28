function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    const borrowed = book.borrows.filter((borrow) => !borrow.returned);
    return acc + borrowed.length;
  }, 0);
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    acc[genre] ? acc[genre]++ : (acc[genre] = 1);
    return acc;
  }, {});

  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return sorted.map(([name, count]) => ({ name, count })).slice(0, 5);
}

function getMostPopularBooks(books) {
  const count = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });

  return count.sort((a, b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorCount = {};

  books.forEach((book) => {
    if (!authorCount[book.authorId]) {
      const { first, last } = authors.find((author) => author.id === book.authorId).name;
      authorCount[book.authorId] = { name: `${first} ${last}`, count: book.borrows.length };
    } else {
      authorCount[book.authorId].count += book.borrows.length;
    }
  });

  const sorted = Object.values(authorCount).sort((a, b) => b.count - a.count).slice(0, 5);
  return sorted;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
