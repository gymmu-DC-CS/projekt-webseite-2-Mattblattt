// Teams
const teams = [
    { name: "Men's First Team", description: "Senior", image: "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F2428660%2Fimage_69b91e94afeea.JPG&h=1100&w=1960&t=fit&o=jpg" },
    { name: "Men's Future Team", description: "Senior", image: "https://tse4.mm.bing.net/th/id/OIP.lu5dQ8fPNIgN0PmRYp8MIQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Basel Birds", description: "Senior", image: "https://tse1.mm.bing.net/th/id/OIP.ZNfBImJSr5aJmRBiKDHYzQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "U19s", description: "Players born in 2007-2009", image: "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F2428660%2Fimage_69b931cc9b1e4.jpeg&h=1100&w=1960&t=fit&o=jpg" },
    { name: "U16s", description: "Players born in 2010-2011", image: "https://lh3.googleusercontent.com/pw/AP1GczOzEwim70MLw6gB6KXF2df91maIy-J2RKOqrCB8lnSqtd68h6KFLfYc_-GPGeMBkz6iN0m20y3NTtjuqySi9YQAeO-p29xaDDbAA74GGHnXUiss3CvAb7ceZdLe7W8nF98_hi8vQVpcpCVPVjWTpPQ=w1430-h953-s-no-gm?authuser=0" },
    { name: "Youth", description: "Tiger rugby, U8, U10, U12, U14", image: "https://lh3.googleusercontent.com/pw/AP1GczMEqsi0CdBy-iEtYzFpUx2jE8d0u2Vm0rqMc_W8ZWRHKUxlI--MDguOfSWk48081KYE493ge8Red3KjxuK1YGk3ywiQFedeLc8aVOKRPAQvBjy0CMaYCKHy3k0i__24Ur8S2cWRDQzrPHg1I_6ldyMd=w1428-h953-s-no-gm?authuser=0" }
];

// Upcoming matches for each team
const teamMatches = {
    mensFirst: [
        { homeTeam: "Basel RFC", awayTeam: "City FC", date: "March 22, 2026", time: "7:00 PM", stadium: "St. Jakob Stadium" }
    ],
    mensFuture: [
        { homeTeam: "Future Basel", awayTeam: "Riverside Club", date: "March 24, 2026", time: "5:00 PM", stadium: "Practice Field" }
    ],
    birds: [
        { homeTeam: "Basel Birds", awayTeam: "Phoenix RFC", date: "March 23, 2026", time: "6:00 PM", stadium: "Women's Rugby Field" }
    ],
    u19: [
        { homeTeam: "Basel U19", awayTeam: "City U19", date: "March 25, 2026", time: "4:00 PM", stadium: "Youth Field" }
    ],
    u16: [
        { homeTeam: "Basel U16", awayTeam: "District U16", date: "March 26, 2026", time: "3:00 PM", stadium: "Youth Field" }
    ]
};

// DOM
const teamGrid = document.getElementById('team-grid');
const mensFirstMatchesEl = document.getElementById('mens-first-matches');
const mensFutureMatchesEl = document.getElementById('mens-future-matches');
const birdsMatchesEl = document.getElementById('birds-matches');
const u19MatchesEl = document.getElementById('u19-matches');
const u16MatchesEl = document.getElementById('u16-matches');

// Init with animation
document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderTeamMatches();
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

// Render matches for each team
function renderTeamMatches() {
    renderMatchesForTeam(teamMatches.mensFirst, mensFirstMatchesEl, 0);
    renderMatchesForTeam(teamMatches.mensFuture, mensFutureMatchesEl, 0.1);
    renderMatchesForTeam(teamMatches.birds, birdsMatchesEl, 0.2);
    renderMatchesForTeam(teamMatches.u19, u19MatchesEl, 0.3);
    renderMatchesForTeam(teamMatches.u16, u16MatchesEl, 0.4);
}

// Render individual match cards for a team
function renderMatchesForTeam(matches, container, delay) {
    matches.forEach((match, index) => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match';
        matchCard.innerHTML = `
            <div>
                <div class="match-team">${match.homeTeam}</div>
                <div class="match-info">${match.date}</div>
            </div>
            <div class="match-vs">
                <div class="match-time">${match.time}</div>
                <div class="match-date">VS</div>
            </div>
            <div>
                <div class="match-team">${match.awayTeam}</div>
                <div class="match-info">${match.stadium}</div>
            </div>
        `;
        matchCard.style.animation = `slideUp 0.6s ease-out ${delay + index * 0.1}s backwards`;
        container.appendChild(matchCard);
    });
}