// Teams
const teams = [
    { name: "Men's First Team", description: "Senior", image: "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F2428660%2Fimage_69b91e94afeea.JPG&h=1100&w=1960&t=fit&o=jpg" },
    { name: "Men's Future Team", description: "Senior", image: "https://tse4.mm.bing.net/th/id/OIP.lu5dQ8fPNIgN0PmRYp8MIQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Women's First Team", description: "Senior", image: "PASTE_IMAGE_URL_HERE" },
    { name: "U19s", description: "Yeargroup of 2007-2009", image: "PASTE_IMAGE_URL_HERE" },
    { name: "U16s", description: "Yeargroup of 2010-2011", image: "PASTE_IMAGE_URL_HERE" },
    { name: "Youth", description: "Tiger rugby, U8, U10, U12, U14", image: "PASTE_IMAGE_URL_HERE" }
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

// Render teams with animation
function renderTeam() {
    teams.forEach((team, index) => {
        const card = document.createElement('div');
        card.className = 'team-member';
        card.innerHTML = `
            <img src="${team.image}" alt="${team.name}">
            <h3>${team.name}</h3>
            <p>${team.description}</p>
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