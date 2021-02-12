function attachEventsListeners() {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const daysType = document.getElementById('days');
    const daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', day, false);
    const hoursType = document.getElementById('hours');
    const hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', hour, false);
    const minutesType = document.getElementById('minutes');
    const minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', minute, false);
    const secondsType = document.getElementById('seconds');
    const secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', second, false);

    function day() {
        days = daysType.value;
        hours = days * 24;
        minutes = hours * 60;
        seconds = minutes * 60;
        hoursType.value = hours;
        minutesType.value = minutes;
        secondsType.value = seconds;
    }

    function hour() {
        hours = hoursType.value;
        days = hours / 24;
        minutes = hours * 60;
        seconds = minutes * 60;
        daysType.value = days;
        minutesType.value = minutes;
        secondsType.value = seconds;
    }

    function minute() {
        minutes = minutesType.value;
        hours = minutes / 60;
        days = hours / 24;
        seconds = minutes * 60;
        hoursType.value = hours;
        daysType.value = days;
        secondsType.value = seconds;
    }

    function second() {
        seconds = secondsType.value;
        minutes = seconds / 60;
        hours = minutes / 60;
        days = hours / 24;
        hoursType.value = hours;
        minutesType.value = minutes;
        daysType.value = days;
    }
}