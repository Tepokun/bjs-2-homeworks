// Задача 1. Печатное издание

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        return;
      }
  
      if (!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [];
      }
  
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks.hasOwnProperty(subject)) {
        return 0;
      }
  
      const marks = this.marks[subject];
      const sum = marks.reduce((acc, mark) => acc + mark, 0);
      return sum / marks.length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      const totalSum = subjects.reduce((acc, subject) => {
        const average = this.getAverageBySubject(subject);
        return acc + average;
      }, 0);
  
      return totalSum / subjects.length;
    }
  }
  
  // Задача 2 библиотека
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.getState() > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (const book of this.books) {
        if (book[type] === value) {
          return book;
        }
      }
      return null;
    }
  
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          const book = this.books[i];
          this.books.splice(i, 1);
          return book;
        }
      }
      return null;
    }
  }
  
  // Задача 3 Журнал
  
  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) {
        return;
      }
  
      if (!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [];
      }
  
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks.hasOwnProperty(subject)) {
        return 0;
      }
  
      const marks = this.marks[subject];
      const sum = marks.reduce((acc, mark) => acc + mark, 0);
      return sum / marks.length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      const totalSum = subjects.reduce((acc, subject) => {
        const average = this.getAverageBySubject(subject);
        return acc + average;
      }, 0);
  
      return totalSum / subjects.length;
    }
  }

  // добавление оценок по предметам
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
