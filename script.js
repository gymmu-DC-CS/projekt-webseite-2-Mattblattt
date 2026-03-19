// Team roster (key players only)
const teamMembers = [
    { name: "Marcus Johnson", position: "Goalkeeper", number: 1, emoji: "👨‍🦰" },
    { name: "Alex Rivera", position: "Defender", number: 2, emoji: "👨" },
    { name: "David Chen", position: "Midfielder", number: 7, emoji: "👨" },
    { name: "Luis Rodriguez", position: "Forward", number: 9, emoji: "👨‍🦲" },
    { name: "Tom Wilson", position: "Midfielder", number: 10, emoji: "👨" },
    { name: "Carlos Silva", position: "Defender", number: 3, emoji: "👨‍🦱" }
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

// Init with animation
document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderMatch();
    setupSmoothScroll();
});

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Render team with animation
function renderTeam() {
    teamMembers.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'team-member';
        card.innerHTML = `
            <div>${player.emoji}<span>${player.number}</span></div>
            <h3>${player.name}</h3>
            <p>${player.position}</p>
        `;
        card.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s backwards`;
        teamGrid.appendChild(card);
    });
}

// Render match with styling
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
    matchEl.style.animation = 'slideUp 0.6s ease-out';
}