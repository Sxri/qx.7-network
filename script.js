$(document).ready(function() {
    $('#games').hide();
    $('#current').hide();
    $('#proxy').hide();
    $('#home').show();
    document.title = "OHIO!";
});

$(document).ready(function() {
    $('#games-btn').click(function() {
        if ($('#games').is(':visible')) {
            return;
        }
        $('#current, #home, #proxy').addClass('disabled').stop(true, true).fadeOut('slow', function() {
            $(this).removeClass('disabled');
            $('#games').addClass('disabled').fadeIn('slow', function() {
                $(this).removeClass('disabled');
            });
        });
    });

    $('#home-btn').click(function() {
        if ($('#home').is(':visible')) {
            return;
        }
        $('#games, #current, #proxy').addClass('disabled').stop(true, true).fadeOut('slow', function() {
            $(this).removeClass('disabled');
            $('#home').addClass('disabled').fadeIn('slow', function() {
                $(this).removeClass('disabled');
            });
        });
    });
  
    $('#settings-btn').click(function() {
        if ($('#proxy').is(':visible')) {
            return;
        }
        $('#games, #home, #current').addClass('disabled').stop(true, true).fadeOut('slow', function() {
            $(this).removeClass('disabled');
            $('#proxy').addClass('disabled').fadeIn('slow', function() {
                $(this).removeClass('disabled');
            });
        });
    });
  
    $('#play-btn').click(function() {
        if ($('#current').is(':visible')) {
            return;
        }
        $('#games, #home, #proxy').addClass('disabled').stop(true, true).fadeOut('slow', function() {
            $(this).removeClass('disabled');
            $('#current').addClass('disabled').fadeIn('slow', function() {
                $(this).removeClass('disabled');
            });
        });
    });
});

function changeNoodleGuy(gamename, url) {
  $('#noodleguy').text(gamename);
  $('#gameFrame').attr('src', url);
  $('#games, #home', '#proxy').addClass('disabled').stop(true, true).fadeOut('slow', function() {
      $(this).removeClass('disabled');
      $('#current').addClass('disabled').fadeIn('slow', function() {
          $(this).removeClass('disabled');
      });
  });
}

$('.card').click(function() {
  const gamename = $(this).find('.title').text();
  const url = $(this).data('url');
  changeNoodleGuy(gamename, url);
});

$('.card1').click(function() {
  $('#games, #home, #proxy').addClass('disabled').stop(true, true).fadeOut('slow', function() {
      $(this).removeClass('disabled');
      $('#current').addClass('disabled').fadeIn('slow', function() {
          $(this).removeClass('disabled');
      });
  });
});

$('.fullscreen-btn').click(function() {
  

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.getElementById('gameFrame').requestFullscreen();
  }
});

$('.resize-btn').click(function() {
  alert("We Apologize...\n\nThis feature is currently unavailable, and is undergoing development(s). Please try again later.")
});

$('.cloak-btn').click(function() {
  
  
  // Open a new tab with the URL: "about:blank":
  var newTab = window.open("about:blank", "_blank");

  // Embed an iframe(100vh, 100vw), on the new tab with the body having margin: 0;.
  newTab.document.body.style.margin = "0";
  newTab.document.body.title = "Learning | Curriculum"
  var iframe = newTab.document.createElement("iframe");
  iframe.style.width = "100vw";
  iframe.style.height = "100vh";
  iframe.src = document.getElementById("gameFrame").src;
  newTab.document.body.appendChild(iframe);

  // The source/website embedded into the iFrame will be the src value under the gameFrame element
  

  // Set a message on the new tab's console to confirm the URL is correct.
  newTab.console.log("The URL of the embedded iframe is: " + iframe.src);

  // Close the game page and return to the homepage.
  $('#current').hide();
  $('#games').fadeIn('slow');

  // Return false to prevent the default behavior of the click event.
  return false;

});

document.getElementById("proxy-input")
    .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("proxy-launch").click();
        }
    });

document.getElementById("proxy-launch").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("proxy-input").value; // if no periods are detected in the input, search google instead
    let searchUrl = "https://www.google.com/search?q=";

    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        if (!url.startsWith("http://") && !url.startsWith("https://")) { // if no http or https is detected, add https automatically
            url = "https://" + url;
        }
    }

    document.getElementById("proxyFrame").src = __uv$config.prefix + __uv$config.encodeUrl(url);
};