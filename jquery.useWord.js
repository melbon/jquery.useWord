/*
 * February 2015
 * useWord 2.0.2
 * @author Mario Vidov
 * @url http://vidov.it
 * @twitter MarioVidov
 * MIT license
 */
$.fn.useWord = function(options) {
    var settings = $.extend({
        word: "first"
    }, options);

    return this.each(function() {
        var text = this.innerHTML.trim().split(" ");

        switch (settings.word) {
            case "first": {
                var first = text.shift();
                this.innerHTML = ((text.length > 0 ? "<span class='useWord-first'>" + first + "</span> " : first) + text.join(" "));
            }
            break;
            case "last": {
                var last = text.pop();
                this.innerHTML = (text.join(" ") + (text.length > 0 ? " <span class='useWord-last'>" + last + "</span>" : last));
            }
            break;
        }
    });
};