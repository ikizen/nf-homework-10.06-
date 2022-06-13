$(document).ready(function () {
    $('.navigators-play').on('click', function () {
            $( '.navigators-pause' ).toggle();
            $( '.navigators-play' ).toggle();
            $('#video').trigger( $('video').prop('paused') ? 'play' : 'pause');
        });
        
        
        
        
    $('.pause').on('click', function() {
        console.log('Navigator is working!');
        $('#video').trigger( $('video').prop('paused') ? 'play' : 'pause');
        $( '.navigators-pause' ).toggle();
        $( '.navigators-play' ).toggle();
    })
        
    $('.forward').on('click', function() {
        console.log('Forward button is working!');
        $('.video').toggle();
        // $('.video1').pause();
    })
    
    $('.backward').on('click', function() {
        console.log('Backward button is working!');
        $('.video').toggle();
        })
    })

    const themeSwitcher = document.getElementById("theme-switch");

    themeSwitcher.checked = false;
    function clickHandler() {
        if (this.checked) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }
    themeSwitcher.addEventListener("click", clickHandler);
    
    window.onload = checkTheme();
    
    function checkTheme() {
        const localStorageTheme = localStorage.getItem("theme");
    
        if (localStorageTheme !== null && localStorageTheme === "dark") {
            // set the theme of body
            document.body.className = localStorageTheme;
    
            // adjust the slider position
            const themeSwitch = document.getElementById("theme-switch");
            themeSwitch.checked = true;
        }
    }
