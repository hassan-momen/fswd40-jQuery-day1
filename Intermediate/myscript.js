$("form").submit(function(e) {

	e.preventDefault();
});

//$("form").remove();
$("article").append("<div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>");
$("input#msg").val("Search for...");
$("div").addClass("box");
$("footer>p>a").attr("href","http://www.codefactory.wien/");