var requestLedStatus = new XMLHttpRequest();
requestLedStatus.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('led_status').innerText = "LEDS ARE CURRENTLY " + requestLedStatus.responseText.toUpperCase();
    }
};
requestLedStatus.open("GET", "/ledstatus", true);
requestLedStatus.send();

var requestToggleOn = new XMLHttpRequest();
requestToggleOn.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        requestLedStatus.open("GET", "ledstatus", true);
        requestLedStatus.send();
    }
};

var requestToggleOff = new XMLHttpRequest();
requestToggleOff.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        requestLedStatus.open("GET", "ledstatus", true);
        requestLedStatus.send();
    }
};

document.getElementById('toggle_on').onclick = function() {
    requestToggleOn.open("GET", "/ledon", true);
    requestToggleOn.send();
};

document.getElementById('toggle_off').onclick = function() {
    requestToggleOff.open("GET", "/ledoff", true);
    requestToggleOff.send();
};