class Book {
  #title;
  #author;
  #pages;

  constructor(title, author, pages) {
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
  }

  displayInfo() {
    console.log(`${this.#title} by ${this.#author}. ${this.#pages} pages`);
  }
}

const janeAir = new Book("Jane Air", "Charlotte Brontë", 500);
const goldfinch = new Book("The Goldfinch", "Donna Louise Tartt", 320);

janeAir.displayInfo();
goldfinch.displayInfo();
