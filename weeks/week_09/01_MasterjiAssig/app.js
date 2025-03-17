const moodButtons = document.querySelectorAll('.mood-btn');
const submitButton = document.getElementById('submitMood');
const moodHistory = document.getElementById('moodHistory');
const dateInput = document.getElementById('moodDate');
const calendarGrid = document.getElementById('calendarGrid');

let selectedMood = null; 
let selectedEmo = null;

// Handle mood selection
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedMood = button.getAttribute('data-mood');
        selectedEmo = button.innerText;
        console.log(selectedEmo)
        console.log("Selected Mood:", selectedMood);
    });
});

// Save mood for the selected date
submitButton.addEventListener('click', () => {
    const selectedDate = dateInput.value;

    if (!selectedDate) {
        alert('Please select a date first!');
        return;
    }

    let moodLogs = JSON.parse(localStorage.getItem('moodLogs')) || [];

    // Check if a mood already exists for this date
    const existingMood = moodLogs.find(log => log.date === selectedDate);

    if (existingMood) {
        console.log("Mood already set for this date:", existingMood.mood);
        return;
    }

    if (selectedMood) {
        moodLogs.push({ date: selectedDate, mood: selectedMood, emo: selectedEmo });

        localStorage.setItem('moodLogs', JSON.stringify(moodLogs));

        loadMoodHistory();
        generateWeekView();
    }
});

// Load past moods
function loadMoodHistory() {
    let moodLogs = JSON.parse(localStorage.getItem('moodLogs')) || [];
    
    moodHistory.innerHTML = ""; 

    moodLogs.forEach(log => {
        const entry = document.createElement('p');
        entry.textContent = `${log.date}: ${log.mood} ${log.emo}`;
        moodHistory.appendChild(entry);
    });
}

// Generate a simple calendar with moods
function generateWeekView() {
    calendarGrid.innerHTML = ""; 

    let moodLogs = JSON.parse(localStorage.getItem("moodLogs")) || [];

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();

    let startOfWeek = new Date(year, month, day - today.getDay()); // Sunday start
    let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let calendarHTML = "<table><tr>";

    for (let i = 0; i < 7; i++) {
        let currentDay = new Date(startOfWeek);
        currentDay.setDate(startOfWeek.getDate() + i);
        let dateString = currentDay.toISOString().split('T')[0];

        let moodEntry = moodLogs.find(log => log.date === dateString);

        calendarHTML += `<td>${weekDays[i]}<br>${currentDay.getDate()}`;
        if (moodEntry) {
            calendarHTML += `<br>${moodEntry.emo}`;
        }
        calendarHTML += `</td>`;
    }

    calendarHTML += "</tr></table>";
    calendarGrid.innerHTML = calendarHTML;
}

// Load everything on page start
window.onload = () => {
    loadMoodHistory();
    generateWeekView();
};
