$(document).ready(function() {

    function headRoom() {
        var header = new Headroom(document.querySelector("#header"), {
            tolerance: {
                up: 8,
                down: 5
            },
            offset: 120,
        });
        header.init();
    }
    headRoom();

    // resize
    $(window).resize(function() {
    });
});