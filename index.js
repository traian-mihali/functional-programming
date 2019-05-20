/*
 * *** Functional programming ***
 */

/*
 * Exercise 1
 * Traversing an Array
 */

function display() {
  let names = ["Traian", "Mihali", "Traian M.", "T. Mihali"];

  for (let counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}

/*
 * Exercise 2
 * Use forEach to print all the names in an array
 */
function display() {
  let names = ["Traian", "Mihali", "Traian M.", "T. Mihali"];

  names.forEach(name => console.log(name));
}
// display();

/*
 * Projecting Arrays
 */

/*
 * Exercise 3
 * Project an array of videos into an array of {id, title} pairs using for Each()
 */

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    bookmark: []
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }]
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    bookmark: []
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }]
  }
];

function projection(array) {
  const result = [];
  array.forEach(item => result.push({ id: item.id, title: item.title }));

  return result;
}

// console.log(projection(newReleases));

/* Exercise 4
 * Implement map()
 */

Array.prototype.map = function(projectionFunction) {
  let items = [];

  this.forEach(item => items.push(projectionFunction(item)));
  return items;
};

// console.log(JSON.stringify([1, 2, 3].map(n => n + 1)));

/*
 * Exercise 5
 * use map to project an array of videos into an array of {id, title} pairs
 */

function mapProjection(array) {
  return array.map(item => ({ id: item.id, title: item.title }));
}

// console.log(mapProjection(newReleases));

/*
 * Filtering Arrays
 */

/*
 * Exercise 6
 * Use forEach() to collect only those videos with a rating of 5.0
 */

function filtering(array) {
  result = [];
  array.forEach(item => (item.rating === 5.0 ? result.push(item) : null));

  return result;
}

// console.log(filtering(newReleases));

/*
 * Exercise 7
 * Implement filter()
 */

Array.prototype.filter = function(predicateFunction) {
  const result = [];
  this.forEach(item => (predicateFunction(item) ? result.push(item) : null));

  return result;
};

// console.log([1, 2, 3].filter(n => n > 1));

/*
 * Query Data by Chaining Method Calls
 */

/*
 * Exercise 8
 * Chain filter and map to collect the ids of videos that have a rating of 5.0
 */

function chaining(array) {
  return array.filter(item => item.rating === 5.0).map(item => item.id);
}

// console.log(chaining(newReleases));

/*
 * Quering Trees
 */

/*
 * Exercise 9
 * Flatten the movieLists array into an array of video ids
 */

let movieLists = [
  {
    name: "Instant Queue",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  },
  {
    name: "New Releases",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        bookmark: []
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
          },
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
          },
          {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        bookmark: [{ id: 432534, time: 65876586 }]
      }
    ]
  }
];

function flat(movies) {
  const result = [];
  movies.forEach(movie =>
    movie["videos"].forEach(video => result.push(video.id))
  );

  return result;
}

// console.log(flat(movieLists));

/*
 * Exercise 10
 * Implement concatAll()
 */

Array.prototype.concatAll = function() {
  let flatten = [];
  this.forEach(item => flatten.push.apply(flatten, item));

  return flatten;
};

// console.log([[1, 2, 3], [4, 5, 6]].concatAll());

/*
 * Exercise 11
 * Use map() and concatAll() to project and flatten the movieLists into an array of video ids
 */

function flatTwoLevelsDeep(movies) {
  return movies.map(movie => movie.videos.map(video => video.id)).concatAll();
}

// console.log(flatUsingMap(movieLists));

/*
 * Exercise 12
 * Retrieve id, title, and a 150x200 box art url for every video
 */

function flatThreeLevelsDeep(movies) {
  return movies
    .map(movie =>
      movie.videos
        .map(video =>
          video.boxarts
            .filter(box => box.width === 150 && box.height === 200)
            .map(box => ({ id: video.id, title: video.title, boxart: box.url }))
        )
        .concatAll()
    )
    .concatAll();
}

// console.log(flatThreeLevelsDeep(movieLists));

/*
 * Exercise 13
 * Implement concatMap() - a map operation followed by a concatAll
 */

Array.prototype.concatMap = function(projectionFuncThatReturnsArray) {
  return this.map(item => projectionFuncThatReturnsArray(item)).concatAll();
};

const spanishFrenchEnglishWords = [
  ["cero", "rien", "zero"],
  ["uno", "un", "one"],
  ["dos", "deux", "two"]
];

// console.log([0, 1, 2].concatMap(index => spanishFrenchEnglishWords[index]));
// console.log(spanishFrenchEnglishWords.concatMap(array => Array.from(array)));
// console.log(spanishFrenchEnglishWords.concatMap(array => [...array]));

/*
 * Exercise 14
 * Use concatMap() to retrieve id, title, and 150x200 box art url for every video
 */

function flatThreeLevelsDeepUsingConcatMap(movies) {
  return movies.concatMap(movie =>
    movie.videos.concatMap(video =>
      video.boxarts
        .filter(box => box.width === 150 && box.height === 200)
        .map(box => ({ id: video.id, title: video.title, boxart: box.url }))
    )
  );
}

// console.log(flatThreeLevelsDeepUsingConcatMap(movieLists));

/*
 * Reducing Arrays
 */

/*
 * Exercise 15
 * Use forEach to find the largest box art
 */

let boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
  }
];

function largestBoxArt(boxarts) {
  let currentSize,
    largestBoxart,
    maxSize = -1;

  boxarts.forEach(box => {
    currentSize = box.width * box.height;
    if (currentSize > maxSize) {
      largestBoxart = box;
      maxSize = currentSize;
    }
  });

  return largestBoxart;
}

// console.log(largestBoxArt(boxarts));

/*
 * Exercise 16
 * Implement reduce()
 */

Array.prototype.reduce = function(combiner, initialValue) {
  let counter, accumulator;

  if (this.length === 0) return this;

  if (arguments.length === 1) {
    counter = 1;
    accumulator = this[0];
  } else if (arguments.length >= 2) {
    counter = 0;
    accumulator = initialValue;
  } else {
    throw new Error("Invalid Arguments");
  }

  while (counter < this.length)
    accumulator = combiner(accumulator, this[counter++]);

  return [accumulator];
};

// console.log([1, 2, 3].reduce((acc, cv) => acc + cv));
// console.log([1, 2, 3].reduce((acc, cv) => acc + cv, 10));

/*
 * Exercise 17
 * Retrieve the largest rating
 */

function largestRating(ratings) {
  return ratings.reduce((accumulator, currentValue) =>
    accumulator > currentValue ? accumulator : currentValue
  );
}

// console.log(largestRating([1, 9, 5, 7, 3, 8, 6, 2]));

/*
 * Exercise 18
 * Retrieve url of the largest boxart
 */

function getLargestBoxartURL(boxarts) {
  return boxarts
    .reduce((acc, cv) =>
      acc.width * acc.height > cv.width * cv.height ? acc : cv
    )
    .map(box => box.url);
}

// console.log(getLargestBoxartURL(boxarts));

/*
 * Exercise 19
 * Reducing with an initial value
 */

let videos = [
  {
    id: 65432445,
    title: "The Chamber"
  },
  {
    id: 675465,
    title: "Fracture"
  },
  {
    id: 70111470,
    title: "Die Hard"
  },
  {
    id: 654356453,
    title: "Bad Boys"
  }
];

/* 
Expected output:
[
  {
    "65432445": "The Chamber",
    "675465": "Fracture",
    "70111470": "Die Hard",
    "654356453": "Bad Boys"
  }
]
*/

function reduceToDiffType(videos) {
  return videos.reduce((accumulatorObj, video) => {
    accumulatorObj[video.id] = video.title;
    return accumulatorObj;
  }, {});
}

// console.log(reduceToDiffType(videos));

/*
 * Exercise 20
 * Retrieve the id, title, and smallest box art url for every video.
 */

function getIdTitleAndSmallestBoxart(movies) {
  return movies.concatMap(movie =>
    movie.videos.concatMap(video =>
      video.boxarts
        .reduce((acc, box) =>
          acc.width * acc.height < box.width * box.height ? acc : box
        )
        .map(box => ({ id: video.id, title: video.title, boxart: box.url }))
    )
  );
}

// console.log(getIdTitleAndSmallestBoxart(movieLists));

/*
 * Zipping Arrays
 */

/*
 * Exercise 21
 * Combine videos and bookmarks by index
 */

videos = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0
  }
];

let bookmarks = [
  { id: 470, time: 23432 },
  { id: 453, time: 234324 },
  { id: 445, time: 987834 }
];

function videosAndBookmarksCombined(videos, bookmarks) {
  let videoIdAndBookmarkIdPairs = [];
  let min = Math.min(videos.length, bookmarks.length);

  for (let counter = 0; counter < min; counter++) {
    videoIdAndBookmarkIdPairs.push({
      videoId: videos[counter].id,
      bookmarkId: bookmarks[counter].id
    });
  }

  return videoIdAndBookmarkIdPairs;
}

// console.log(videosAndBookmarksCombined(videos, bookmarks));

/*
 * Exercise 22
 * Implement zip
 */

Array.zip = function(left, right, combiner) {
  let counter,
    minLength = Math.min(left.length, right.length),
    result = [];

  for (counter = 0; counter < minLength; counter++) {
    result.push(combiner(left[counter], right[counter]));
  }

  return result;
};

/*
 * Exercise 23
 * Combine videos and bookmarks by index
 */

function videosAndBookmarksCombinedUsingZip(videos, bookmarks) {
  return Array.zip(videos, bookmarks, (video, bookmark) => ({
    videoId: video.id,
    bookmarkId: bookmark.id
  }));
}

// console.log(videosAndBookmarksCombinedUsingZip(videos, bookmarks));

/*
 * Exercise 24
 * Retrieve each video's id, title, middle interesting moment time, and smallest box art url.
 */

movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        id: 70111470,
        title: "Die Hard",
        boxarts: [
          {
            width: 150,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        interestingMoments: [
          { type: "End", time: 213432 },
          { type: "Start", time: 64534 },
          { type: "Middle", time: 323133 }
        ]
      },
      {
        id: 654356453,
        title: "Bad Boys",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
          },
          {
            width: 140,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        interestingMoments: [
          { type: "End", time: 54654754 },
          { type: "Start", time: 43524243 },
          { type: "Middle", time: 6575665 }
        ]
      }
    ]
  },
  {
    name: "Instant Queue",
    videos: [
      {
        id: 65432445,
        title: "The Chamber",
        boxarts: [
          {
            width: 130,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
          },
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 4.0,
        interestingMoments: [
          { type: "End", time: 132423 },
          { type: "Start", time: 54637425 },
          { type: "Middle", time: 3452343 }
        ]
      },
      {
        id: 675465,
        title: "Fracture",
        boxarts: [
          {
            width: 200,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
          },
          {
            width: 120,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
          },
          {
            width: 300,
            height: 200,
            url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
          }
        ],
        url: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: 5.0,
        interestingMoments: [
          { type: "End", time: 45632456 },
          { type: "Start", time: 234534 },
          { type: "Middle", time: 3453434 }
        ]
      }
    ]
  }
];

function getIdTitleMiddleMomentTimeAndSmallestBoxURL(movies) {
  return movies.concatMap(movie =>
    movie.videos.concatMap(video =>
      Array.zip(
        video.interestingMoments.filter(moment => moment.type === "Middle"),
        video.boxarts.reduce((acc, cv) =>
          acc.width * acc.height < cv.width * cv.height ? acc : cv
        ),
        (moment, box) => ({
          id: video.id,
          title: video.title,
          time: moment.time,
          url: box.url
        })
      )
    )
  );
}

// console.log(getIdTitleMiddleMomentTimeAndSmallestBoxURL(movieLists));

/*
 * Powerful Queries
 */

/*
 * Exercise 25
 * Converting from Arrays to Trees
 */

/*
 Expected output:

 [
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"id": 675465,
				"title": "Fracture"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"id": 654356453,
				"title": "Bad Boys"
			}
		]
	}
]
 */

let lists = [
  {
    id: 5434364,
    name: "New Releases"
  },
  {
    id: 65456475,
    name: "Thrillers"
  }
];

videos = [
  {
    listId: 5434364,
    id: 65432445,
    title: "The Chamber"
  },
  {
    listId: 5434364,
    id: 675465,
    title: "Fracture"
  },
  {
    listId: 65456475,
    id: 70111470,
    title: "Die Hard"
  },
  {
    listId: 65456475,
    id: 654356453,
    title: "Bad Boys"
  }
];

function convertingFromArraysToTrees(lists, videos) {
  return lists.map(list => ({
    name: list.name,
    videos: videos
      .filter(video => video.listId === list.id)
      .map(video => ({ id: video.id, title: video.title }))
  }));
}

// console.log(convertingFromArraysToTrees(lists, videos));

/*
 * Exercise 26
 * Converting from Arrays to Deeper Trees
 */

/*
Expected output:
[
	{
		"name": "New Releases",
		"videos": [
			{
				"id": 65432445,
				"title": "The Chamber",
				"time": 32432,
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
			},
			{
				"id": 675465,
				"title": "Fracture",
				"time": 3534543,
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
			}
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{
				"id": 70111470,
				"title": "Die Hard",
				"time": 645243,
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"time": 984934,
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
			}
		]
	}
]
 */

boxarts = [
  {
    videoId: 65432445,
    width: 130,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
  },
  {
    videoId: 65432445,
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
  },
  {
    videoId: 675465,
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
  },
  {
    videoId: 675465,
    width: 120,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
  },
  {
    videoId: 675465,
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  },
  {
    videoId: 70111470,
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
  },
  {
    videoId: 70111470,
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
  },
  {
    videoId: 654356453,
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
  },
  {
    videoId: 654356453,
    width: 140,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
  }
];

bookmarks = [
  { videoId: 65432445, time: 32432 },
  { videoId: 675465, time: 3534543 },
  { videoId: 70111470, time: 645243 },
  { videoId: 654356453, time: 984934 }
];

// function convertingFromArraysToDeeperTrees(lists, videos, bookmarks, boxarts) {
//   return lists.map(list => ({
//     name: list.name,
//     videos: videos
//       .filter(video => video.listId === list.id)
//       .map(video => ({
//         id: video.id,
//         title: video.title,
//         time: bookmarks
//           .filter(bookmark => bookmark.videoId === video.id)
//           .map(bookmark => bookmark.time)
//           .toString(),
//         boxart: boxarts
//           .filter(boxart => boxart.videoId === video.id)
//           .reduce((acc, cv) =>
//             acc.width * acc.height < cv.width * cv.height ? acc : cv
//           )
//           .map(box => box.url)
//           .toString()
//       }))
//   }));
// }

function convertingFromArraysToDeeperTrees(lists, videos, bookmarks, boxarts) {
  return lists.map(list => ({
    name: list.name,
    videos: videos
      .filter(video => video.listId === list.id)
      .concatMap(video =>
        Array.zip(
          bookmarks.filter(bookmark => bookmark.videoId === video.id),
          boxarts
            .filter(boxart => boxart.videoId === video.id)
            .reduce((acc, cv) =>
              acc.width * acc.height < cv.width * cv.height ? acc : cv
            ),
          (bookmark, boxart) => ({
            id: video.id,
            title: video.title,
            time: bookmark.time,
            boxart: boxart.url
          })
        )
      )
  }));
}

// console.log(
//   convertingFromArraysToDeeperTrees(lists, videos, bookmarks, boxarts)
// );
