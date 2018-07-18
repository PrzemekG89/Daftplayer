$(document).ready(function () {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        appendArrows: $(".navigation"),
    });

    $('.flipper').click(function() {
        $('.play').toggleClass('active', 'unactive', 800);
        $('.stop').toggleClass('unactive', 'active', 800);
    })

    $('#more').click(function(){
        $('.menu').toggleClass('active', 'unactive');
        $('.header__text').toggleClass('unactive');
    });

    var tracks = [{
            "track": 1,
            "name": "All This Is - Joe L.'s Studio",
            "duration": "2:46",
        }, {
            "track": 2,
            "name": "The Forsaken - Broadwing Studio",
            "duration": "8:30",
        }, {
            "track": 3,
            "name": "All The King's Men - Broadwing Studio",
            "duration": "5:01",
        }, {
            "track": 4,
            "name": "The Forsaken - Broadwing Studio",
            "duration": "8:31",
        }, {
            "track": 5,
            "name": "All The King's Men - Broadwing Studio",
            "duration": "5:05",
        }, {
            "track": 6,
            "name": "All This Is - Alternate Cuts",
            "duration": "2:48",
        }, {
            "track": 7,
            "name": "All The King's Men - Alternate Cuts",
            "duration": "5:44",
        }, {
            "track": 8,
            "name": "All The King's Men - Alternate Cuts",
            "duration": "5:26",
        }, {
            "track": 9,
            "name": "Magus - Alternate Cuts",
            "duration": "5:46",
        }, {
            "track": 10,
            "name": "The State Of Wearing Address - Alternate Cuts",
            "duration": "5:25",
        }, {
            "track": 11,
            "name": "Magus - Popeye's",
            "duration": "5:53",
        }, {
            "track": 12,
            "name": "On The Waterfront - Popeye's",
            "duration": "4:40",
        }, {
            "track": 13,
            "name": "Trance - Popeye's ",
            "duration": "13:15",
        }, {
            "track": 14,
            "name": "The Forsaken - Popeye's",
            "duration": "8:12",
        }, {
            "track": 15,
            "name": "The Forsaken- Smith St. Basement",
            "duration": "8:36",
        }],
        buildPlaylist = $(tracks).each(function (key, value) {
            var trackNumber = value.track,
                trackName = value.name,
                trackDuration = value.duration;
            if (trackNumber.toString().length === 1) {
                trackNumber = '0' + trackNumber;
            }
            $('#plList').append('<li><div class="plItem"><span class="plNum">' + trackNumber + '.</span><span class="plTitle">' + trackName + '</span><span class="plLength">' + trackDuration + '</span></div></li>');
        });

    $('.playlist-btn').click(function () {
        $('.playlist').toggleClass('active-playlist');
        $('.header__text, #more').toggleClass('unactive');

    });

});