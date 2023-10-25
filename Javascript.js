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
      
      console.log(getRating(watchList));

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