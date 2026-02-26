// Team roster (key players only)
const teamMembers = [
    { name: "Marcus Johnson", position: "GK", number: 1, emoji: "👨‍🦰" },
    { name: "Alex Rivera", position: "DEF", number: 2, emoji: "👨" },
    { name: "David Chen", position: "MID", number: 7, emoji: "👨" },
    { name: "Luis Rodriguez", position: "FWD", number: 9, emoji: "👨‍🦲" },
    { name: "Tom Wilson", position: "MID", number: 10, emoji: "👨" },
    { name: "Carlos Silva", position: "DEF", number: 3, emoji: "👨‍🦱" }
];

// Next match
const nextMatch = {
    homeTeam: "Basel RFC",
    awayTeam: "City FC",
    date: "March 22, 2026",
    time: "7:00 PM",
    stadium: "St. Jakob Stadium"
};

// DOM
const teamGrid = document.getElementById('team-grid');
const matchEl = document.getElementById('next-match');

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderMatch();
});

// Render team
function renderTeam() {
    teamMembers.forEach(player => {
        const card = document.createElement('div');
        card.className = 'team-member';
        card.innerHTML = `
            <div>${player.emoji}<span>${player.number}</span></div>
            <h3>${player.name}</h3>
            <p>${player.position}</p>
        `;
        teamGrid.appendChild(card);
    });
}

// Render match
function renderMatch() {
    matchEl.innerHTML = `
        <div>
            <div class="match-team">${nextMatch.homeTeam}</div>
            <div class="match-info">${nextMatch.date}</div>
        </div>
        <div class="match-vs">
            <div class="match-time">${nextMatch.time}</div>
            <div class="match-date">VS</div>
        </div>
        <div>
            <div class="match-team">${nextMatch.awayTeam}</div>
            <div class="match-info">${nextMatch.stadium}</div>
        </div>
    `;
}