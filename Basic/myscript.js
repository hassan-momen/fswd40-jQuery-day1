/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
$("*").css("background-color", "yellow");

// all p elements
$("p").css("color","red");

// the p element with an ID of "intro"

$("p#intro").css("color","gree;n")
// all elements with a class of "note"

$("*.note").css("background-color","blue");
// all DIV elements with a class of note
$("div.note").css("background-color","gray");

// all p elements in the article element
$("article>p").css("background-color","#ffcc99");

// the last element in any section which is a p tag
$("p:last").css("background-color","white");

// the first paragraph on the page
$("p:first").css("background-color","black");

// all p elements which have a link

$("p>a").css("background-color","pink");
// the second li within nested ul element
$("li:nth-child(2)").css("background-color","#660066");

// every second and third p element
$("p:nth-child(2)").css("background-color","orange");
$("p:nth-child(3)").css("background-color","orange");