function updateClock() {
    
    const now = new Date()

    const hours = now.getHours() 
    const mins = now.getMinutes()
    const seconds = now.getSeconds()

    const hourDeg = (hours % 12) * 30 + mins * 0.5;
    const minuteDeg = mins * 6;
    const secondDeg = seconds * 6;

    document.querySelector('.hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.querySelector('.minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.querySelector('.second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

    const formatTime = `${hours % 12 || 12} : ${String(mins).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`
    document.querySelector('.digital-clock').textContent = formatTime

    const dateOptions = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
    document.querySelector('.date').textContent = now.toLocaleDateString(undefined, dateOptions)
}
setInterval(updateClock, 1000)
updateClock()