/* Copyright Trevor D Miller 2013 */
/*		GLOBAL VARS		**************************************************************************************/
// Assign current list to include all filters on startup
function loadSearchList() {
    var e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Alex</li>');
    while (e < alex.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + alex[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Cameron</li>');
    while (e < cameron.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + cameron[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Claire</li>');
    while (e < claire.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + claire[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Gloria</li>');
    while (e < gloria.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + gloria[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Haley</li>');
    while (e < haley.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + haley[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Jay</li>');
    while (e < jay.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + jay[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Luke</li>');
    while (e < luke.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + luke[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Manny</li>');
    while (e < manny.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + manny[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Mitchell</li>');
    while (e < mitchell.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + mitchell[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchList").append('<li data-role="list-divider"><span class="ui-icon-tag"> </span>Phil</li>');
    while (e < phil.length) {
        $("#searchList").append('<li><a class="searchItem" href="#">"' + phil[e].Quote + '"' + "</a></li>");
        e++
    }
    e = 0;
    $("#searchlist").listview("refresh")
}
function loadRandomQuote(e, t) {
    if (e == 1) {
        randomQuoteIndex = Math.floor(Math.random() * t.length);
        currentQuote = t[randomQuoteIndex].Quote;
        currentAuthor = t[randomQuoteIndex].Author;
        currentCategory = t[randomQuoteIndex].Category;
        currentEpisode = t[randomQuoteIndex].Episode;
        $(".currentQuote").html(currentQuote);
        $(".currentAuthor").html(currentAuthor);
        $(".currentCategory").html(currentCategory);
        $(".currentEpisode").html(currentEpisode)
    } else if (e == 0) {
        randomQuoteIndex = Math.floor(Math.random() * t.length);
        currentQuote = t[randomQuoteIndex].Quote;
        currentAuthor = t[randomQuoteIndex].Author;
        currentCategory = t[randomQuoteIndex].Category;
        currentEpisode = t[randomQuoteIndex].Episode;
        $(".quote").fadeOut(200, function() {
            $(".currentQuote").html(currentQuote);
            $(".currentAuthor").html(currentAuthor);
            $(".currentCategory").html(currentCategory);
            $(".currentEpisode").html(currentEpisode);
            $(".quote").fadeIn(200)
        })
    }
}
function shareQuote() {
    currentShareQuote = '"' + currentQuote + '" - ' + currentAuthor;
    window.plugins.socialsharing.share(currentShareQuote, "A quote from Modern Family", null, "http://modernfamilyquotes.net")
}
function showNoInternetAlert() {
    alert("Sorry, but you need an internet connection to use this app!")
}
function showRateDialog() {
    $.mobile.changePage("#rate-dialog", {
        transition: "pop",
        role: "dialog"
    })
}
function rate() {
    var e = window.open(encodeURI("http://modernfamilyquotes.net/forward.html"), "_system", "location=yes")
}
var randomQuoteIndex, currentQuote, currentAuthor, currentShareQuote, selectedCategory;
$(document).on("pageinit", "#home", function() {
    navigator.onLine || setTimeout(showNoInternetAlert, 100);
    var e = jQuery.merge(jQuery.merge([], alex), cameron);
    e = jQuery.merge(e, claire);
    e = jQuery.merge(e, gloria);
    e = jQuery.merge(e, haley);
    e = jQuery.merge(e, jay);
    e = jQuery.merge(e, luke);
    e = jQuery.merge(e, manny);
    e = jQuery.merge(e, mitchell);
    e = jQuery.merge(e, phil);
    selectedCategory = e;
    $(".filters-container").hide();
    loadRandomQuote(!0, selectedCategory);
    loadSearchList();
    $("#RandomButton").click(function() {
        loadRandomQuote(!1, selectedCategory)
    });
    $("#share-btn").click(function() {
        shareQuote()
    });
    $(".return-home").click(function() {
        $.mobile.changePage("#home")
    });
    $(".rate-btn").click(function() {
        rate()
    });
    $("#allRadioButton").click(function() {
        selectedCategory = e;
        $(".filter").html("Showing all");
        $(".filters-container").hide();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#alexRadioButton").click(function() {
        selectedCategory = alex;
        $(".filter").html("Alex");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#cameronRadioButton").click(function() {
        selectedCategory = cameron;
        $(".filter").html("Cameron");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#claireRadioButton").click(function() {
        selectedCategory = claire;
        $(".filter").html("Claire");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#gloriaRadioButton").click(function() {
        selectedCategory = gloria;
        $(".filter").html("Gloria");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#haleyRadioButton").click(function() {
        selectedCategory = haley;
        $(".filter").html("Haley");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#jayRadioButton").click(function() {
        selectedCategory = jay;
        $(".filter").html("Jay");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#lukeRadioButton").click(function() {
        selectedCategory = luke;
        $(".filter").html("Luke");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#mannyRadioButton").click(function() {
        selectedCategory = manny;
        $(".filter").html("Manny");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#mitchellRadioButton").click(function() {
        selectedCategory = mitchell;
        $(".filter").html("Mitchell");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $("#philRadioButton").click(function() {
        selectedCategory = phil;
        $(".filter").html("Phil");
        $(".filters-container").show();
        loadRandomQuote(!0, selectedCategory);
        $.mobile.changePage("#home")
    });
    $(".searchItem").click(function() {
        var t = $(".searchItem").index(this);
        currentQuote = e[t].Quote;
        currentAuthor = e[t].Author;
        currentCategory = e[t].Category;
        currentEpisode = e[t].Episode;
        $(".currentQuote").html(currentQuote);
        $(".currentAuthor").html(currentAuthor);
        $(".currentCategory").html(currentCategory);
        $(".currentEpisode").html(currentEpisode);
        $.mobile.changePage("#home")
    });
    if (localStorage.runCount == null)
        localStorage.runCount = 0;
    else {
        localStorage.runCount++;
        localStorage.runCount == 4 && setTimeout(showRateDialog, 1e3)
    }
});
