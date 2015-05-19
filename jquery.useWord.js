/*
 * February 2015
 * useWord 2.0.0
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
 */
$.fn.useWord = function(options) {
    var settings = $.extend({
        word: "first"
    }, options);

    var text = this.text().trim().split(" ");

    switch (settings.word) {
        case "first": {
            var first = text.shift();
            this.html((text.length > 0 ? "<span class='useWord-first'>" + first + "</span> " : first) + text.join(" "));
        }
        break;
        case "last": {
            var last = text.pop();
            this.html(text.join(" ") + (text.length > 0 ? " <span class='useWord-last'>" + last + "</span>" : last));
        }
        break;
    }
};