function play(id) {
	var audio = document.getElementById(id);
	audio.play();
}


$(document).ready(function() {

    // show a dialog box when clicking on a link
    $('#A').bind('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
    source: {'iframe': {
        'src':  'quiz_A.html',
        'height': 650
    }},
    width: 800,
    title:  'Quiz A'
        });

    });
    
    $('#I').bind('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
    source: {'iframe': {
        'src':  'quiz_I.html',
        'height': 650
    }},
    width: 800,
    title:  'Quiz I'
        });

    });
    
    $('#U').bind('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
    source: {'iframe': {
        'src':  'quiz_U.html',
        'height': 650
    }},
    width: 800,
    title:  'Quiz U'
        });

    });
    
    $('#E').bind('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
    source: {'iframe': {
        'src':  'quiz_E.html',
        'height': 650
    }},
    width: 800,
    title:  'Quiz E'
        });

    });
    
    $('#O').bind('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
    source: {'iframe': {
        'src':  'quiz_O.html',
        'height': 650
    }},
    width: 800,
    title:  'Quiz O'
        });

    });
    
    $('#login').bind('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
    source: {'iframe': {
        'src':  'webserver/login/login.html',
        'height': 600
    }},
    width: 700,
    title:  'Login'
        });

    });
    
     $('#register').bind('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
    source: {'iframe': {
        'src':  'webserver/register/register.html',
        'height': 600
    }},
    width: 700,
    title:  'Register'
        });

    });

 });

