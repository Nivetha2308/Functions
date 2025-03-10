// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

var movie2;

movie2 = {
  title: "The Shawshank Redemption",
  actors: "Tim Robbins, Morgan Freeman",
  directors: "Frank Darabont"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

var blogPost;

blogPost = {
  title: "JavaScript Basics",
  author: "John Doe",
  content: "This is a blog post about JavaScript basics...",
  published: "July 10, 2024"
};


console.log("Blog Post: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Published Date: " + blogPost.published);
console.log("------------------------------");
console.log("Content:");
console.log(blogPost.content);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */