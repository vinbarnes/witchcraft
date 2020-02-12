function disableAutoplay() {
    var ap_toggle = document.getElementById('toggle');
    if (ap_toggle) {
        ap_toggle.hasAttribute('checked') && ap_toggle.click();
    } else {
        setTimeout(disableAutoplay, 500);
    }
}

function main(event) {
    document.getElementsByTagName("video")[0].playbackRate = 1.25;
    disableAutoplay();
}

window.addEventListener("load", main);
