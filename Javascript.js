function largestOfFour(arr){
    const results = [];
    for(let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j <arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}

function confirmEnding(str, target) {
    if (str.substr(str.length - target.length, str.length) !== target) {
        return false;
    } else {
        return true
    }
    return str;
}

function repeatStringNumTimes(str, num) {
    let accumulatedStr= '';

    for (let i = 0; i < num; i++) {
        accumulatedStr += str
    }

    return accumulatedStr
}

function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[0]);
    let sumRange = 0;
    for (let i = min; i <= max; i++) {
        sumRange += i;
    }
    return sumRange;
}

function diffArray(aar1, arr2) {
    const newArr = [];

    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if(second.indexOf(first[i]) === -1) {
                newArr.push(first[i]);
            }
        }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
}

function truncateString(str, num){
    if (str.length > num) {
        return str.slice(0, num) + "..."
    } else {
        return str;
    }
}

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
        updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

function frankieSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for(let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr1[i]);
        n++;
    }
    return localArray;
}

function bouncer(arr) {
    constfilterdArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) filteredArr.push(arr[i]);
    }

    return filteredArr;
}

function bouncer(arr) {
    return arr.filter(Boolean);
}

function getIndexToIns (arr, num) {
    arr.sort((a, b) => a -b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
        
        return i;
    }

    return arr.length;
}

function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toLowerCase();

    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) 
        return false
    }
    return true;
}

function chunkArrayGroups(arr, size) {
    let temp = [];
    const result = [];

    for (let a = 0; a < arr.length; i++) {
        if (a % size !== size - 1) temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0) result.push(temp);
    return result;
}

function joinDogFraternity (candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

function Dog(name) {
    this.name;
}

Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

//Prototype chain
function Dog(name) {
    this.name = name;
}

//let beagle = new Dog ("Snoopy");

Dog.prototype.isPrototypeOf(beagle);

Object.prototype.isPrototypeOf(Dog.prototype);


function Animal () { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

//Functional Programming

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

const tea4GreenTEamFCC = prepareGreenTea(27);
const tea4BlackTeamFCC = prepareBlackTea(13);

console.log(tea4BlackTeamFCC, tea4GreenTEamFCC);

//Understand the Hazards of Using Imperative Code

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line
  
    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // Only change code above this line
  
    return this;
   };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

  //Refactor Global Variables Out of Functions

  
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) > 0) {

    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;

    // Change code above this line
    }
}
    var newBookList = add(bookList, 'A Brief History of Time');
    var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
    var newestBooList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

    console.log(bookList);

    // Use the map Method to Extract Data from an Array

    const watchList = [
        {
            "Title": "Inception",
            "Year": "2010",
            "Rated": "PG-13",
            "Released": "16 Jul 2010",
            "Runtime": "148 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Christopher Nolan",
            "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
            "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "Language": "English, Japanese, French",
            "Country": "USA, UK",
            "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.8",
            "imdbVotes": "1,446,708",
            "imdbID": "tt1375666",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Interstellar",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "07 Nov 2014",
            "Runtime": "169 min",
            "Genre": "Adventure, Drama, Sci-Fi",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan, Christopher Nolan",
            "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
            "Metascore": "74",
            "imdbRating": "8.6",
            "imdbVotes": "910,366",
            "imdbID": "tt0816692",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Dark Knight",
            "Year": "2008",
            "Rated": "PG-13",
            "Released": "18 Jul 2008",
            "Runtime": "152 min",
            "Genre": "Action, Adventure, Crime",
            "Director": "Christopher Nolan",
            "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
            "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
            "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            "Metascore": "82",
            "imdbRating": "9.0",
            "imdbVotes": "1,652,832",
            "imdbID": "tt0468569",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
            "Language": "English, Urdu, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
            "Metascore": "70",
            "imdbRating": "8.3",
            "imdbVotes": "972,584",
            "imdbID": "tt0372784",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Avatar",
            "Year": "2009",
            "Rated": "PG-13",
            "Released": "18 Dec 2009",
            "Runtime": "162 min",
            "Genre": "Action, Adventure, Fantasy",
            "Director": "James Cameron",
            "Writer": "James Cameron",
            "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
            "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
            "Language": "English, Spanish",
            "Country": "USA, UK",
            "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
            "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
            "Metascore": "83",
            "imdbRating": "7.9",
            "imdbVotes": "876,575",
            "imdbID": "tt0499549",
            "Type": "movie",
            "Response": "True"
      }
    ];

    const ratings = watchList.map(item => ({
        title: item["Title"],
        rating: item["imdbRating"]
    }));

    //Implement the filter Method on a Prototype

    Array.prototype.myFilter == function(callback) {
        const newArray = [];

        for(let i = 0; this.length; i++) {
            if(Boolean(callback(this[i], i, this)) === true) {
                newArray.push(this[i])
            }
        }

        return newArray;

    };

    //Concat to merge new array items

    function mergeArrays (arr1, arr2) {
        return arr1.concat(arr2);
    }

    const ar1 = [1, 2, 3];
    const ar2 = [4, 5];
    mergeArrays(ar1, ar2);



    //Reduce method to analyze data
    // const watchList = [
    //     {
    //       Title: "Inception",
    //       Year: "2010",
    //       Rated: "PG-13",
    //       Released: "16 Jul 2010",
    //       Runtime: "148 min",
    //       Genre: "Action, Adventure, Crime",
    //       Director: "Christopher Nolan",
    //       Writer: "Christopher Nolan",
    //       Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    //       Plot:
    //         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    //       Language: "English, Japanese, French",
    //       Country: "USA, UK",
    //       Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    //       Poster:
    //         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    //       Metascore: "74",
    //       imdbRating: "8.8",
    //       imdbVotes: "1,446,708",
    //       imdbID: "tt1375666",
    //       Type: "movie",
    //       Response: "True"
    //     },
    //     {
    //       Title: "Interstellar",
    //       Year: "2014",
    //       Rated: "PG-13",
    //       Released: "07 Nov 2014",
    //       Runtime: "169 min",
    //       Genre: "Adventure, Drama, Sci-Fi",
    //       Director: "Christopher Nolan",
    //       Writer: "Jonathan Nolan, Christopher Nolan",
    //       Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    //       Plot:
    //         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    //       Language: "English",
    //       Country: "USA, UK",
    //       Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    //       Poster:
    //         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    //       Metascore: "74",
    //       imdbRating: "8.6",
    //       imdbVotes: "910,366",
    //       imdbID: "tt0816692",
    //       Type: "movie",
    //       Response: "True"
    //     },
    //     {
    //       Title: "The Dark Knight",
    //       Year: "2008",
    //       Rated: "PG-13",
    //       Released: "18 Jul 2008",
    //       Runtime: "152 min",
    //       Genre: "Action, Adventure, Crime",
    //       Director: "Christopher Nolan",
    //       Writer:
    //         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    //       Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    //       Plot:
    //         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    //       Language: "English, Mandarin",
    //       Country: "USA, UK",
    //       Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    //       Poster:
    //         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    //       Metascore: "82",
    //       imdbRating: "9.0",
    //       imdbVotes: "1,652,832",
    //       imdbID: "tt0468569",
    //       Type: "movie",
    //       Response: "True"
    //     },
    //     {
    //       Title: "Batman Begins",
    //       Year: "2005",
    //       Rated: "PG-13",
    //       Released: "15 Jun 2005",
    //       Runtime: "140 min",
    //       Genre: "Action, Adventure",
    //       Director: "Christopher Nolan",
    //       Writer:
    //         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    //       Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    //       Plot:
    //         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    //       Language: "English, Urdu, Mandarin",
    //       Country: "USA, UK",
    //       Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    //       Poster:
    //         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    //       Metascore: "70",
    //       imdbRating: "8.3",
    //       imdbVotes: "972,584",
    //       imdbID: "tt0372784",
    //       Type: "movie",
    //       Response: "True"
    //     },
    //     {
    //       Title: "Avatar",
    //       Year: "2009",
    //       Rated: "PG-13",
    //       Released: "18 Dec 2009",
    //       Runtime: "162 min",
    //       Genre: "Action, Adventure, Fantasy",
    //       Director: "James Cameron",
    //       Writer: "James Cameron",
    //       Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    //       Plot:
    //         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    //       Language: "English, Spanish",
    //       Country: "USA, UK",
    //       Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    //       Poster:
    //         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    //       Metascore: "83",
    //       imdbRating: "7.9",
    //       imdbVotes: "876,575",
    //       imdbID: "tt0499549",
    //       Type: "movie",
    //       Response: "True"
    //     }
    //   ];
      
      function getRating(watchList){
        // Add your code below this line
        let averageRating = watchList
        .filter(film => film.Director === "Christopher Nolan")
        .map(film => Number(film.imdbRating))
        .reduce((sumofRatings, rating) => sumofRatings + rating) /
        watchList.filter(film => film.Director === "Christopher Nolan").length; 
        // Add your code above this line
        return averageRating;
      }
      
      console.log(getRating());

      //Higher - Order Functions using filter(), map() and reduce()
      const squareList = arr => {
        // Only change code below this line
          return arr
                    .filter(num => num > 0 && num % parseInt(num) === 0)
                    .map(num => Math.pow(num, 2));
        // Only change code above this line
      };
      
      const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
      console.log(squaredIntegers);


      //Sort an Array Alphabetically Using the sort Method



      //Return a sorted Array Without Changing the Original Array

      const globalArray = [5, 6, 3, 2, 9];

      function alphabeticalOrder(arr) {
        return [].concat(arr).sort(function (x, y) {
            return x - y;
        });
      }

      nonMutatingSort(globalArray);


      //Combining an Array into a String Using the join Method
      const arr = ["Hello", "World"];
      const str = arr.join(" ");

      //Hello World

      //Example 2
      function sentensify (str) {
        return str.split(/\W/).join(" ");
      }

      sentensify("May-the-force-be-with-you");

      //Apply Functional Programming to Convert Strings to URL Slugs

      function urlSlug(title) {
        return title
                .toLowerCase()
                .trim()
                .split(/\s_/)
                .join('-')
      };


      urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");


    //   Use the every Method to Check that Every Element in an Array Meets a Criteria

    function checkPositive (arr) {
        return arr.every(function (positive) {
            return positive > 0;
        });
    };

    checkPositive([1, 2, 3, -4, 5]);

    // Use the some Method to Check that Every Element in an Array Meets a Criteria

    function checkPositive (arr) {
        return arr.some(function (someCheck) {
            return someCheck > 0;
        });
    };

    checkPositive([1, 2, 3, -4, 5]);

    // Currying and Partial Application

    function add(x) {
        return function (y) {
            return function (x) {
                return x + y + z;
            }
        }
    }

    add(10)(20)(30);

//Intermediate algorithm Scripting

function destroyer (arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valsToRemove.includes(val);
    }); 
}

//Where Art Thou
function whatIsInAName (collection, source) {
    let keys = Object.keys(source)
    return collection.filter(
        item => keys.every (
            key => item.hasOwnProperty(key) && item[key] === source[key]
        )
    )
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
 { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

 //Spinal Tap Case
 //Convvert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

 function spinalCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[^a-z\d]/ig, "-")
        .toLowerCase()
 }

 console.log(spinalCase('This Is Spinal Tap'))


 //Pig Latin - Away of altering English Words
 function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way")
  }
  
  console.log(translatePigLatin("consonant"));


  //Search and Rreplace - Performing a search and replace on the sentence
  function myReplace(str, before, after) {
    function applyCasing(source, target) {
        var targetArr = target.split("");
        var sourceArr = source.split("");
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
            if(/[A-Z]/.test(sourceArr[i])){
                targetArr[i] = targetArr[i].toUpperCase();
            }
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        return targetArr.join("");
    }
    return str.replace(before, applyCasing(before, after));
  }

  //DNA PAiring

  function pairElement(str) {
    const matchWithBasePair = function (char) {
        switch(char){
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "C":
                return ["C", "G"];
            case "G":
                return ["G", "C"];
        }
    };

    const pairs = [];
    for(let i=0; i <str.length; i++) {
        pairs.push(matchWithBasePair(str[i]));
    }
    return pairs;
  }

  //Sorted Union
// a function that takes two or more arrays and returns a new array of unique 
// values in the order of the original provided arrays.
  function uniteUnique(arr1, arr2, arr3) {
    const finalArray = [];
    for (let i =0; i < arguments.length; i++) {
      const arrayArguments = arguments[i];
  
      for (let j = 0; j <arrayArguments.length; j++) {
        let indexValue = arrayArguments[j];
  
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
    return finalArray;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


  //Converting HTML Entities
  function convertHTML(str) {

    let temp = str.split("")
  
    for (let i = 0; i < temp.length; i++) {
      switch(temp[i]){
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
    temp = temp.join("")
    return temp;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));


  //Sum of All Odd Fibonacci Numbers
  function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  

  console.log(sumFibs(4));

  //Sum of All Prime
  function sumPrimes(num) {
    function isPrime(num) {
      let sqrt = Math.sqrt(num);
      for(let i = 2; i <= sqrt; i++) {
        if (num % i ===0)
          return false;
      }
      return true
    }
  
    //Checking for Prime Factors
    let sum  = 0
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
      sum += i
    }
  
    return sum;
  }
  
  console.log(sumPrimes(10));

  //Smallest Common Multiple Challenge
  function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a -b);
    const range = Array(max-min +1)
      .fill(0)
      .map((_, i) => i + min);
    const upperBound = range.reduce((prod, curr) => prod * curr);
    
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      const divisible = range.every((value) => multiple % value ===0);
      if(divisible){
        return multiple;
      }
    }
  }
  
  console.log(smallestCommons([1,5]));

  //Drop it
  function dropElements(arr, func) {
    while(arr.length > 0 && !func(arr[0])){
      arr.shift();
    }
    return arr;
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));

  //Flattening An Array - Check if Array is an Array
  function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])){
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));

  //Binary Conversion
  function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
  
    for (let i=0; i < biString.length; i++){
      uniString.push(String.fromCharCode(parseInt(biString[i], 2)))
    }
    return uniString.join("");
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

  //
  function truthCheck(collection, pre) {
    let counter = 0;
  
    for (let c in collection) {
      if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
        counter++;
      }
    }
    return counter == collection.length;
  }
  
  console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));

  //Arguments - Check if the numbers are actual.
  function addTogether() {
    const [first, second] = arguments;
  
    function addSecond(second) {
      if (typeof (second) === "number") return first + second;
    }
  
    if (typeof (first) === "number") {
      if (arguments.length === 1) return addSecond;
      if (arguments.length === 2) return addSecond(second);
    }
    // return addSecond;
  }
  
  console.log(addTogether(2,3));

  //Make a person - Declaring variables in closures which are not properties.
  const Person = function(first, last) {
    let firstName = first;
    let lastName = last;
  
    this.getFirstName = function() {
      return firstName;
    };
  
    this.getLastName = function() {
      return lastName;
    };
  
    this.getFullName = function() {
      return this.getFirstName() + " " + this.getLastName();
    };
  
    this.setFirstName = function(first) {
      return firstName = first;
    };
  
    this.setLastName = function(last){
      return lastName = last;
    };
  
    this.setFullName = function(first, last) {
      this.setFirstName(first);
      this.setLastName(last);
      return this.getFullName();
    };
  };
  
  const bob = new Person("Bob", "Ross")
  console.log(bob.getFullName());

  //Using the Math library i.e,
  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
   
    let T = null;
    const newArray = [];
  
    for (let elem of arr) {
      T = 2*Math.PI * Math.sqrt(Math.pow(elem.avgAlt + earthRadius, 3)/GM);
      newArray.push({name: elem.name, orbitalPeriod: Math.round(T)});
    }
    return newArray;
    // orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));


  //Projects 1 of 5
  
  
  //Projects 2 of 5
  function convertToRoman(num) {
    let romanNumerals = {
      M:1000,
      CM:900,
      D:500,
      CD:400,
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      IX:9,
      V:5,
      IV:4,
      I:1
    }
    
    let result = "";
    //Loop through
    for(let prop in romanNumerals) {
      while(num >= romanNumerals[prop]){
        result += prop;
        num -= romanNumerals[prop];
      }
    }
  
   return result;
  }
  
  console.log(convertToRoman(97));

  //Caesers Cipher ROT13 encryption
  function rot13(str) {
    let result = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let index = alphabet.indexOf(char);
  
      if (index !== -1) {
        let newIndex = (index + 13) % 26;
        result += alphabet[newIndex];
      } else {
        result += char;
      }
    }
    return result;
  }
  
  console.log(rot13("SERR PBQR PNZC"));

  //Working with Regular Expressions
  function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/;
    return regex.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));

  //Loops, Arrays Objects and methods for a Cash Register
  function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let cidTotal = 0;
  
    for (let elem of cid) {
      cidTotal += elem[1] * 100;
    }
    if(change > cidTotal) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (change === cidTotal){
      return {status: "CLOSED", change: cid};
    } else {
      let result = [];
      cid = cid.reverse();
  
      let currencyUnit = {
        "ONE HUNDRED" : 10000,
        "TWENTY" : 2000,
        "TEN" : 1000,
        "FIVE" : 500,
        "ONE" : 100,
        "QUARTER" : 25,
        "DIME" : 10,
        "NICKEL" : 5,
        "PENNY" : 1
      }
      for(let elem of cid){
        let moneyHolder = [elem[0], 0];
        elem[1] = elem[1] * 100;
        while (change >= currencyUnit[elem[0]] && elem[1] > 0) {
          change -=currencyUnit[elem[0]];
          elem[1] -= currencyUnit[elem[0]];
          moneyHolder[1] += currencyUnit[elem[0]] / 100;
        }
        if (moneyHolder[1] > 0) {
          result.push(moneyHolder);
        }
      }
      if (change > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: result}
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


  //HTML CSS and JavaScript - Defining scopes

  var message = "in global";
  console.log("global: message = " + message);

  var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
  }

  function b () {
    console.log("b: message = " + message)
  }

  a();

  if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line won't be executed")
  }
  else {
    console.log("All false");
  }

  // Creating Objects
  var company = new Object();
  company.name = "Twitter";

//Functions - Objects and First-Class Data Types 
function multiply (x, y){
  return x * y;
}

console.log(multiply());

//Faction Factory
function makeMultiplier (multiplier){
    var myFunct = function(x){
      return multiplier * x;
    };

    return myFunct;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


function functionName () {
  console.log("Hi World!")
}

functionName();

//Accessing JavaScript Object properties with Dot Notation
const myObj ={
  prop1: "val1",
  prop2: "val2"
};

myProp1 = myObj.prop1;

console.log(myProp1);

//Multi-Dimensional Array/Nested Array

let teamsProp = [["Chicago", 1], ["76ers", 2]];
console.log(teamsProp);

// DOM
let btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", function() {
  alert("Hello JavaScript Developer!")
});

btnSubmit();

// Lexical this
const dogBreed = {
  species1: "Doberman",
  purpose: "Hunter",
  species3: "Beagle",
  toKind: function () {
    // const that = this;
    // console.log(`${this.species1} is a ${this.purpose}.`)
    this.purpose.forEach((purpose) => {
      console.log(`${that.species1} is a ${purpose}`);
    });
  }
}

dogBreed.toKind();

//Using the map Method to Extract Data from an Array

const techStack = [
  {
    "Stack" : "JavaScript",
    "Application" : "Web, Mobile, Data Analysis, Machine Learning",
    "Why" : "Mini-Swiss Army Knife - Language of the web"
  },
  {
    "Stack" : "Python",
    "Application" : "Everything in Software Engineering, Data Science to Security Analysis",
    "Why" : "Swiss Army Knife - General Programming"
},
{
  "Stack" : "Java",
  "Application" : "Mobile, Game Development, Data Engineering, Machine Learning, Database Management",
  "Why" : "Strict Fellow - Know Concise Well"
},
{
  "Stack" : "R",
  "Application" : "Statistical Analysis, Data Science/Analysis, Financial Engineering",
  "Why" : "Statiscal Packages - Good for big Statistical data"
},
{
  "Stack" : "SEQUEL (SQL)",
  "Application" : "Databases, Data Analysis, Data Science, Security Analysis",
  "Why": "The bread and butter of data"
},
{
  "Stack": "Excel & Access",
  "Application" : "Small to medium Data Management, Data Analysis, Financial Analysis",
  "Why" : "Never bring a toy gun in a gun fight"
}
]; 

let yourWeapon = techStack.map(weapon = () => weapon.Application);
console.log(yourWeapon);

//Working with filter()




// Working with arrow functions
const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));

const add = (n1, n2) => n1 + n2;

const milesToKm = miles => miles * 1.60934;

console.log(milesToKm(90));


// Working around Constructor functions - Creating new objects

function Developer() {
  this.name = "Obed";
  this.skills = "Vanilla JS", "ReactJS", "Tailwind", "CSS3", "HTML5"
}

//Create an object to the above class
const tech = new Developer();
console.log(tech);

//Working with Rest Operator -Without
const sum = (function() {
  return function sum (x,y,z) {
    const args = [x, y, z];
    return args.reduce((a,b) => a +b, 0);
  };
}());

console.log(sum(1, 2, 3));

// With Rest Operator
const summ = (function () {
  return function summ (...args1) {
    return args1.reduce((a,b) => a +b, 0);
  };
} ());

console.log(summ(1, 2, 3, 5));


// Working With APIs (Application Programming Interface) With Node.JS and Express JS
fetch("http://127.0.0.1")
header: "HEAD"

let http = require("http");
let server = http.createServer((req, res) => {
  if (req.url === '/') {
    // ...
  }

  if (req.url === '/api/courses') {
    // ...
  }
});

server.listen(3000); 

//Writing Higher order Arrow Functions - Map, Filter and Reduce

// They take functions as argument for data processing.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

//Node.js and Express.js


