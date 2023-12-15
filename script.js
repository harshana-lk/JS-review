const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                      // Desturcturing
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const book = getBook(2);
book;

// const title = book.title
// const author = book.author

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0]
// const secondaryGenre = genres[1]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                    //Rest & Spread Operator
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { primaryGenre, secondaryGenre, ...otherGenre } = genres; //rest operator
console.log(primaryGenre, secondaryGenre, otherGenre);

const newGenre = ["Epic fantasy", ...genres]; //spread operator
newGenre;

const updateBook = { ...book, moviePublicationDate: "2000-05-12", pages: 1210 }; //spread operator using in objects
updateBook;

// function getYear(str) {
//   return str.split("-")[0];
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                      //Arrow functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getYear = (str) => str.split("-")[0]; //Arrow functions

console.log(getYear(publicationDate));

const summury = `${title},a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}.the book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summury;

const pagesRange = pages > 1000 ? "over a thousands" : "less than thounsand";
console.log(pagesRange);
console.log(`the book has ${pagesRange} pages`);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                      //short-cuicuiting
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(true && "some String");
console.log(false && "some String"); //short-curcuiting
console.log(hasMovieAdaptation && "This book has a movie");

//falsy: 0 , '' , null , undefined
console.log("harshana" && "Some String");
console.log(0 && "Some String");

console.log(true || "Some String");
console.log(false || "Some String");

const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

const countWrong = book.reviews.librarything.reviewsCount || "No Data";
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "No Data";
count;