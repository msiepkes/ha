$ = jQuery;

$(document).bind("mobileinit", function () {
  $.mobile.ajaxEnabled = false;
  $.mobile.hashListeningEnabled = false;
});

if (typeof(ui_widget_content) == 'undefined') {var ui_widget_content = '';}
if (typeof(ui_form_comment) == 'undefined') {var ui_form_comment = '';}

$(document).ready(function () {
    var icon = null;
	$('#sidebar .widget_links ul, #sidebar .widget_nav_menu ul, #sidebar .widget_recent_comments ul, #sidebar .widget_categories ul, #sidebar .widget_recent_entries ul, #sidebar .widget_meta ul, #sidebar .widget_rss ul, #sidebar .widget_archive ul, #sidebar .widget_pages ul,  #sidebar .widget_jqmobile_theme ul').attr('data-role', 'listview').attr('data-inset', 'false').attr('data-theme', ui_widget_content);


	$('#commentform input, #commentform textarea, #commentform select').attr('data-theme', ui_form_comment);
	$('.widget .textwidget, .widget #calendar_wrap, .widget .tagcloud').addClass('ui-body ui-body-c');
	$('.widget select').attr('data-native-menu', 'false');
	$('option:first', $('.widget select')).removeAttr('value');
	$('#wp-calendar #prev a, #wp-calendar #next a, a.post-edit-link, p.tags a, p.pages span').attr('data-role', 'button').attr('data-inline', 'true');

	$('#button-up').bind('click', function(){
		 $.mobile.silentScroll(0);
		return false;
	});
	
	$('#day').bind('change', function () {
	    $('<form id="form2" method="post" enctype="multipart/form-data" data-ajax="false"><input id="dag" name="dag" type="hidden" value="' + $(this).val() + '"></form>').appendTo($('body'));
	    $('#form2').submit();
	});

	$('body').on('click', '.check', function (e) {
	    e.preventDefault();
	    e.stopPropagation();

	    icon = $(this).attr('data-vink');

	    $('#verlopen').attr('toestelid', $(this).attr('data-toestelid'));
	    $.mobile.changePage("#verlopen", { role: "dialog", corners: false, overlayTheme: "a", closeBtn: "right" });         
	});

	$('body').on('click', '.BIGcheck', function (e) {
	    e.preventDefault();
	    e.stopPropagation();

	    icon = $(this).attr('data-vink');

	    $('#verlopen').attr('toestelid', $(this).attr('data-toestelid'));
	    $.mobile.changePage("#verlopen", { role: "dialog", corners: false, overlayTheme: "a", closeBtn: "right" });
	});


	$('#verlopen BUTTON').click(function () {
	    if (icon != null) {
	        $('IMG[data-vink=' + icon + ']').each(function() {
	            $(this).attr('src', 'images/' + $(this).attr('data-pre') + 'checkgreen.png');
	        });
	        icon = null;
	    }
                
	    var postForm = {  
	        'id': parseInt($('#verlopen').attr('toestelid')),
	        'oordeel': parseInt($(this).attr('data-oordeel'))
	    };
	    $.ajax({
	        type: "POST", url: 'functions.php',
	        data: postForm,
	        dataType: "json"
	    });


	    $("#verlopen").dialog("close");
	});
	


	$(".pageschema").on("swipeleft", function () {
	    var nr = parseInt($('#day').val());
	    var max = parseInt($('#day OPTION').length);

	    if (nr < max) {
	        $('#day').val((nr + 1)).change();
	    }
	});
	$(".pageschema").on("swiperight", function () {
	    var nr = parseInt($('#day').val()); 

	    if (nr > 1) {
	        $('#day').val((nr - 1)).change();
	    }
	});


	$(".trainingdetail").on("swipeleft", function () {
	    var nr = parseInt($(this).attr('data-nr'));
	    nr++;
	    if ($(".trainingdetail[data-nr=" + nr + "]").length > 0) {
	        var id = $(".trainingdetail[data-nr=" + nr + "]").attr('id');

	        $.mobile.changePage("#" + id, { transition: 'slide' });
	    }
	});

	$(".trainingdetail").on("swiperight", function () {
	    var nr = parseInt($(this).attr('data-nr'));
	    nr--;
	    if ($(".trainingdetail[data-nr=" + nr + "]").length > 0) {
	        var id = $(".trainingdetail[data-nr=" + nr + "]").attr('id');

	        $.mobile.changePage("#" + id, { transition: 'slide', reverse: true });
	    }
	});
});