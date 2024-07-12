// Displaying information from similar objects

var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "Inception",
  actors: "Leonardo DiCaprio, Joseph Gordon-Levitt",
  directors: "Christopher Nolan"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

console.log("Movie information for " + movie4.title);
console.log("------------------------------");
console.log("Actors: " + movie4.actors);
console.log("Directors: " + movie4.directors);
console.log();
console.log("------------------------------");

var event1, event2, event3;

event1 = {
  title: "Team Meeting",
  date: "July 15, 2024",
  location: "Conference Room A"
};

event2 = {
  title: "Product Launch",
  date: "August 3, 2024",
  location: "Main Auditorium"
};

event3 = {
  title: "Company Retreat",
  date: "September 20-22, 2024",
  location: "Beach Resort"
};


console.log("Event: " + event1.title);
console.log("Date: " + event1.date);
console.log("Location: " + event1.location);
console.log();
console.log("------------------------------");


console.log("Event: " + event2.title);
console.log("Date: " + event2.date);
console.log("Location: " + event2.location);
console.log();
console.log("------------------------------");


console.log("Event: " + event3.title);
console.log("Date: " + event3.date);
console.log("Location: " + event3.location);
console.log();
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */