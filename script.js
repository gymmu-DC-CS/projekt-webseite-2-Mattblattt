// Teams data structure - array of objects containing team information
// Each team has name, description, and image URL for dynamic rendering
const teams = [
    { name: "Men's First Team", description: "Senior", image: "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F2428660%2Fimage_69b91e94afeea.JPG&h=1100&w=1960&t=fit&o=jpg" },
    { name: "Men's Future Team", description: "Senior", image: "https://tse4.mm.bing.net/th/id/OIP.lu5dQ8fPNIgN0PmRYp8MIQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Basel Birds", description: "Senior", image: "https://tse1.mm.bing.net/th/id/OIP.ZNfBImJSr5aJmRBiKDHYzQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "U19s", description: "Players born in 2007-2009", image: "https://img-res.pitchero.com/?url=images.pitchero.com%2Fui%2F2428660%2Fimage_69b931cc9b1e4.jpeg&h=1100&w=1960&t=fit&o=jpg" },
    { name: "U16s", description: "Players born in 2010-2011", image: "https://lh3.googleusercontent.com/pw/AP1GczOzEwim70MLw6gB6KXF2df91maIy-J2RKOqrCB8lnSqtd68h6KFLfYc_-GPGeMBkz6iN0m20y3NTtjuqySi9YQAeO-p29xaDDbAA74GGHnXUiss3CvAb7ceZdLe7W8nF98_hi8vQVpcpCVPVjWTpPQ=w1430-h953-s-no-gm?authuser=0" },
    { name: "Youth", description: "Tiger rugby, U8, U10, U12, U14", image: "https://lh3.googleusercontent.com/pw/AP1GczMEqsi0CdBy-iEtYzFpUx2jE8d0u2Vm0rqMc_W8ZWRHKUxlI--MDguOfSWk48081KYE493ge8Red3KjxuK1YGk3ywiQFedeLc8aVOKRPAQvBjy0CMaYCKHy3k0i__24Ur8S2cWRDQzrPHg1I_6ldyMd=w1428-h953-s-no-gm?authuser=0" }
];

// Upcoming matches data structure - object with team keys containing arrays of match objects
// Each match has homeTeam, awayTeam, date, time, and stadium information
const teamMatches = {
    mensFirst: [
        { homeTeam: "Basel First Team", awayTeam: "RC Bern", date: "March 22, 2026", time: "7:00 PM", stadium: "(H) Pruntrutermatte" }
    ],
    mensFuture: [
        { homeTeam: "Future Team", awayTeam: "Union Jura Rugby", date: "March 24, 2026", time: "5:00 PM", stadium: "Fribourg Rugby Club" }
    ],
    birds: [
        { homeTeam: "Basel Birds", awayTeam: "Luzern Dangels", date: "March 23, 2026", time: "6:00 PM", stadium: "Rugbyfeld Luzern Allmend" }
    ],
    u19: [
        { homeTeam: "Northern Lions U19", awayTeam: "Zug RC", date: "March 25, 2026", time: "4:00 PM", stadium: "Schulhaus Sennweid" }
    ],
    u16: [
        { homeTeam: "Northern Lions U16", awayTeam: "AS Morges", date: "March 26, 2026", time: "3:00 PM", stadium: "Morges Rugby Club" }
    ]
};

// DOM element references - storing references to HTML elements for dynamic content insertion
const teamGrid = document.getElementById('team-grid');
const mensFirstMatchesEl = document.getElementById('mens-first-matches');
const mensFutureMatchesEl = document.getElementById('mens-future-matches');
const birdsMatchesEl = document.getElementById('birds-matches');
const u19MatchesEl = document.getElementById('u19-matches');
const u16MatchesEl = document.getElementById('u16-matches');

// Initialization function - runs when DOM is fully loaded to ensure all elements exist
document.addEventListener('DOMContentLoaded', () => {
    renderTeam();        // Render all team cards
    renderTeamMatches(); // Render all match information
    setupSmoothScroll(); // Enable smooth scrolling for navigation links
});

// Smooth scroll implementation - prevents default anchor behavior and uses native smooth scrolling
function setupSmoothScroll() {
    // Select all anchor tags that link to page sections (starting with #)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Stop default jump-to-anchor behavior
            const target = document.querySelector(this.getAttribute('href')); // Find target element
            if (target) {
                // Use native smooth scrolling API for better performance
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Team rendering function - dynamically creates team cards with staggered animations
function renderTeam() {
    teams.forEach((team, index) => {
        const card = document.createElement('div'); // Create container div for each team
        card.className = 'team-member'; // Apply CSS class for styling
        
        // Use template literal to create HTML structure with team data
        card.innerHTML = `
            <img src="${team.image}" alt="${team.name}">
            <h3>${team.name}</h3>
            <p>${team.description}</p>
        `;
        
        // Apply staggered animation delay based on team index for visual effect
        card.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s backwards`;
        teamGrid.appendChild(card); // Add completed card to the team grid container
    });
}

// Main match rendering function - coordinates rendering matches for all teams
function renderTeamMatches() {
    // Call renderMatchesForTeam for each team with different animation delays
    renderMatchesForTeam(teamMatches.mensFirst, mensFirstMatchesEl, 0);
    renderMatchesForTeam(teamMatches.mensFuture, mensFutureMatchesEl, 0.1);
    renderMatchesForTeam(teamMatches.birds, birdsMatchesEl, 0.2);
    renderMatchesForTeam(teamMatches.u19, u19MatchesEl, 0.3);
    renderMatchesForTeam(teamMatches.u16, u16MatchesEl, 0.4);
}

// Individual match rendering function - creates match cards for a specific team
function renderMatchesForTeam(matches, container, delay) {
    matches.forEach((match, index) => {
        const matchCard = document.createElement('div'); // Create match card container
        matchCard.className = 'match'; // Apply CSS class for match styling
        
        // Create HTML structure for match display with home/away teams and match details
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
        
        // Apply staggered animation with base delay plus per-match delay
        matchCard.style.animation = `slideUp 0.6s ease-out ${delay + index * 0.1}s backwards`;
        container.appendChild(matchCard); // Add match card to specified container
    });
}