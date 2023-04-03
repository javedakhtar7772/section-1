let movies = ['pathaan', 'john wick', 'farzi', 'shazam', 'flash'];
console.log(movies);

// indexing

console.log(movies[0]);
console.log(movies.at(-2));

// slicing

console.log(movies.slice(1,3));
console.log(movies.length);

// adding new element
movies.push('kabza');  //to add element at the end of Array 
movies.push('Iranman');  //to add element at the start of Array 

console.log(movies);

// removing elements 
movies.pop(); // removes single element from end of aarray
movies.shift(); // removes single element from beginning
console.log(movies);

movies.splice( 2,2 );
console.log(movies);



