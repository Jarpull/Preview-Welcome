function popup() {
    var popup = document.getElementById('popup');

    var longest = $('#popup').text().split(' ').sort(function (a, b) {
        return b.length - a.length;
    })[0];
    $('#popup').css({
        width: String(80 + (longest.length - 5) * 20) + 'px'
    });

    if (document.getElementById('message').innerHTML.includes('Vinny') && !popup.classList.contains('show')) {
        popup.classList.toggle('show');
        setTimeout(function () {
            popup.classList.toggle('show');
        }, 4000);
    }
}
