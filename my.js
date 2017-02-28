$(function() {
    console.log("hello there");
    $.get("data.txt", function(data) {
        console.log(data);
    });
});