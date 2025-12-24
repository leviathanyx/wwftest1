const wrestlers = [
    { name: "Stone Cold Steve Austin", rank: 1, height: 188, weight: 115, matches: 815, wins: 560, titles: 19, biceps: 48, chest: 132, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Stone_Cold_Steve_Austin_stat--885f67b55f1309f4007b065a44046554.png" },
    { name: "The Rock", rank: 2, height: 196, weight: 118, matches: 840, wins: 510, titles: 17, biceps: 50, chest: 137, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/09/The_Rock_stat--496735e5d17062402928399589d81387.png" },
    { name: "The Undertaker", rank: 3, height: 208, weight: 136, matches: 2300, wins: 1700, titles: 15, biceps: 52, chest: 140, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/10/The_Undertaker_stat--90c8f53765f0490f8457639550b3e64d.png" },
    { name: "John Cena", rank: 4, height: 185, weight: 114, matches: 2200, wins: 1750, titles: 25, biceps: 49, chest: 127, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/John_Cena_stat--f8955b21021484196884674686411267.png" },
    { name: "Brock Lesnar", rank: 5, height: 191, weight: 130, matches: 430, wins: 310, titles: 12, biceps: 53, chest: 135, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Brock_Lesnar_stat--f8832a82643a18e0f666b60e8d021c9a.png" },
    { name: "Triple H", rank: 6, height: 193, weight: 116, matches: 1900, wins: 1100, titles: 24, biceps: 51, chest: 132, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/03/Triple_H_stat--988c838933e100f2257d90393c830f30.png" },
    { name: "Kurt Angle", rank: 7, height: 183, weight: 108, matches: 1500, wins: 950, titles: 13, biceps: 46, chest: 122, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2017/04/Kurt_Angle_stat--429713b19280f68285511b0e9b98d281.png" },
    { name: "Kane", rank: 8, height: 213, weight: 147, matches: 2800, wins: 1500, titles: 18, biceps: 54, chest: 142, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/04/Kane_stat--151322069f109054790387532dfa9a30.png" },
    { name: "Batista", rank: 9, height: 198, weight: 132, matches: 1000, wins: 700, titles: 10, biceps: 53, chest: 137, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2019/10/Batista_stat--886d99784346e9f1a048a1d1e4479545.png" },
    { name: "Shawn Michaels", rank: 10, height: 185, weight: 102, matches: 1300, wins: 800, titles: 14, biceps: 43, chest: 115, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Shawn_Michaels_stat--89868f07612f0674092f6b83f3e6919b.png" },
    { name: "Chyna", rank: 15, height: 178, weight: 92, matches: 450, wins: 320, titles: 3, biceps: 41, chest: 112, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2019/02/Chyna_stat--0226388414439c3664d60c2834b68452.png" },
    { name: "Stacy Keibler", rank: 45, height: 180, weight: 59, matches: 120, wins: 50, titles: 0, biceps: 25, chest: 86, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Stacy_Keibler_stat--71348ecf4a6211831885a1a1f10731f8.png" },
    { name: "Mankind", rank: 11, height: 188, weight: 130, matches: 1200, wins: 600, titles: 7, biceps: 45, chest: 130, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/01/Mankind_stat--08d070b4f8d6896263e8e207914e1017.png" },
    { name: "Edge", rank: 12, height: 196, weight: 109, matches: 1700, wins: 1100, titles: 31, biceps: 46, chest: 120, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Edge_stat--1230623a4f82662f558a0112440b8f05.png" },
    { name: "Chris Jericho", rank: 13, height: 183, weight: 103, matches: 2000, wins: 1050, titles: 30, biceps: 44, chest: 118, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2017/12/Chris_Jericho_stat--c028c1995116773f324220b221008d53.png" },
    { name: "Eddie Guerrero", rank: 14, height: 173, weight: 100, matches: 1300, wins: 750, titles: 12, biceps: 45, chest: 115, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/01/Eddie_Guerrero_stat--0997198d023f77df2306d152c9339e3b.png" },
    { name: "Big Show", rank: 16, height: 213, weight: 174, matches: 2200, wins: 1200, titles: 15, biceps: 56, chest: 160, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2018/04/Big_Show_stat--e68f3078430f89069d3e8e2e2837340d.png" },
    { name: "Randy Orton", rank: 17, height: 193, weight: 113, matches: 2100, wins: 1250, titles: 20, biceps: 47, chest: 125, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/11/Randy_Orton_stat--61d683526693a2e7c483a9108b394e35.png" },
    { name: "Trish Stratus", rank: 25, height: 163, weight: 57, matches: 300, wins: 180, titles: 7, biceps: 30, chest: 91, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Trish_Stratus_stat--74776100574d715dfc08f447781f7274.png" },
    { name: "Lita", rank: 26, height: 168, weight: 61, matches: 280, wins: 160, titles: 4, biceps: 29, chest: 89, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Lita_stat--2c44279b9a896d885a8f6d89953d3326.png" },
    { name: "Goldberg", rank: 18, height: 193, weight: 129, matches: 360, wins: 320, titles: 3, biceps: 51, chest: 135, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Goldberg_stat--f94297800166299f1396f4e138a0f9a2.png" },
    { name: "Rey Mysterio", rank: 19, height: 168, weight: 79, matches: 1500, wins: 980, titles: 15, biceps: 41, chest: 107, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Rey_Mysterio_stat--0223f0012290f68285511b0e9b98d281.png" },
    { name: "Booker T", rank: 20, height: 191, weight: 116, matches: 2000, wins: 1150, titles: 35, biceps: 46, chest: 122, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/10/Booker_T_stat--886d99784346e9f1a048a1d1e4479545.png" },
    { name: "Jeff Hardy", rank: 21, height: 185, weight: 102, matches: 1400, wins: 850, titles: 22, biceps: 41, chest: 112, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2021/09/Jeff_Hardy_stat--2c44279b9a896d885a8f6d89953d3326.png" },
    { name: "Matt Hardy", rank: 22, height: 185, weight: 107, matches: 1500, wins: 880, titles: 14, biceps: 43, chest: 117, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2019/02/Matt_Hardy_stat--0226388414439c3664d60c2834b68452.png" },
    { name: "Rob Van Dam", rank: 23, height: 183, weight: 107, matches: 1300, wins: 810, titles: 16, biceps: 46, chest: 120, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2021/03/Rob_Van_Dam_stat--71348ecf4a6211831885a1a1f10731f8.png" },
    { name: "Ric Flair", rank: 24, height: 185, weight: 110, matches: 4000, wins: 3100, titles: 16, biceps: 41, chest: 115, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Ric_Flair_stat--89868f07612f0674092f6b83f3e6919b.png" },
    { name: "Chris Benoit", rank: 27, height: 180, weight: 100, matches: 1100, wins: 700, titles: 10, biceps: 48, chest: 125, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2016/09/Chris_Benoit_stat.png" },
    { name: "Scott Hall", rank: 28, height: 201, weight: 130, matches: 1200, wins: 750, titles: 11, biceps: 48, chest: 130, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2022/03/Scott_Hall_stat--988c838933e100f2257d90393c830f30.png" },
    { name: "Kevin Nash", rank: 29, height: 208, weight: 149, matches: 1100, wins: 700, titles: 6, biceps: 51, chest: 145, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/04/Kevin_Nash_stat--151322069f109054790387532dfa9a30.png" },
    { name: "JBL", rank: 30, height: 198, weight: 132, matches: 1400, wins: 780, titles: 14, biceps: 46, chest: 132, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2020/02/JBL_stat--886d99784346e9f1a048a1d1e4479545.png" },
    { name: "Bret Hart", rank: 31, height: 183, weight: 107, matches: 2500, wins: 1900, titles: 12, biceps: 43, chest: 117, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Bret_Hart_stat--0997198d023f77df2306d152c9339e3b.png" },
    { name: "Dudley Boyz (Bubba)", rank: 32, height: 191, weight: 125, matches: 1800, wins: 1100, titles: 23, biceps: 48, chest: 135, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2018/04/Bubba_Ray_Dudley_stat--e68f3078430f89069d3e8e2e2837340d.png" },
    { name: "D-Von Dudley", rank: 33, height: 188, weight: 115, matches: 1800, wins: 1100, titles: 23, biceps: 46, chest: 127, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2018/04/D-Von_Dudley_stat--e68f3078430f89069d3e8e2e2837340d.png" },
    { name: "Victoria", rank: 46, height: 173, weight: 70, matches: 350, wins: 200, titles: 2, biceps: 34, chest: 96, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2021/01/Victoria_stat--71348ecf4a6211831885a1a1f10731f8.png" },
    { name: "Mickie James", rank: 47, height: 163, weight: 56, matches: 400, wins: 260, titles: 6, biceps: 28, chest: 88, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2017/01/Mickie_James_stat--74776100574d715dfc08f447781f7274.png" },
    { name: "Torrie Wilson", rank: 48, height: 175, weight: 60, matches: 150, wins: 70, titles: 0, biceps: 26, chest: 90, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2019/03/Torrie_Wilson_stat--0226388414439c3664d60c2834b68452.png" },
    { name: "William Regal", rank: 34, height: 191, weight: 110, matches: 1600, wins: 850, titles: 15, biceps: 44, chest: 122, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2017/01/William_Regal_stat--429713b19280f68285511b0e9b98d281.png" },
    { name: "Shelton Benjamin", rank: 35, height: 188, weight: 111, matches: 1100, wins: 650, titles: 6, biceps: 46, chest: 120, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2023/03/Shelton_Benjamin_stat--f8955b21021484196884674686411267.png" },
    { name: "Christian", rank: 36, height: 185, weight: 96, matches: 1600, wins: 980, titles: 19, biceps: 42, chest: 112, img: "https://www.wwe.com/f/styles/wwe_large/public/all/2021/01/Christian_stat--1230623a4f82662f558a0112440b8f05.png" }
    // Add more stars as needed following this pattern!
];

let playerDeck = [];
let cpuDeck = [];

function initGame() {
    const shuffled = [...wrestlers].sort(() => Math.random() - 0.5);
    playerDeck = shuffled.slice(0, Math.ceil(shuffled.length / 2));
    cpuDeck = shuffled.slice(Math.ceil(shuffled.length / 2));
    updateCounts();
    renderPlayerCard();
}

function updateCounts() {
    document.getElementById('p-count').innerText = playerDeck.length;
    document.getElementById('c-count').innerText = cpuDeck.length;
}

function renderPlayerCard() {
    const card = playerDeck[0];
    const container = document.getElementById('player-card');
    if (!card) {
        container.innerHTML = "<h2>GAME OVER - YOU LOSE</h2>";
        return;
    }

    container.innerHTML = `
        <img src="${card.img}" alt="${card.name}">
        <h2>${card.name}</h2>
        <div class="stats-container">
            ${createStatRow('Rank', card.rank, 'rank')}
            ${createStatRow('Height (cm)', card.height, 'height')}
            ${createStatRow('Weight (kg)', card.weight, 'weight')}
            ${createStatRow('Matches', card.matches, 'matches')}
            ${createStatRow('Wins', card.wins, 'wins')}
            ${createStatRow('Titles Won', card.titles, 'titles')}
            ${createStatRow('Biceps (cm)', card.biceps, 'biceps')}
            ${createStatRow('Chest (cm)', card.chest, 'chest')}
        </div>
    `;
}

function createStatRow(label, value, key) {
    return `<div class="stat-row" onclick="playRound('${key}')">
                <span>${label}</span>
                <span><b>${value}</b></span>
            </div>`;
}

function playRound(stat) {
    const pCard = playerDeck[0];
    const cCard = cpuDeck[0];
    const cpuContainer = document.getElementById('cpu-card');

    // Reveal CPU card
    cpuContainer.classList.remove('hidden');
    cpuContainer.innerHTML = `
        <img src="${cCard.img}" alt="${cCard.name}">
        <h2>${cCard.name}</h2>
        <div class="stats-container">
            <div class="stat-row"><span>${stat}</span><span><b>${cCard[stat]}</b></span></div>
        </div>
    `;

    let playerWins = false;
    if (stat === 'rank') {
        playerWins = pCard[stat] < cCard[stat]; // Lower rank wins
    } else {
        playerWins = pCard[stat] > cCard[stat];
    }

    const msg = document.getElementById('message');
    if (playerWins) {
        msg.innerText = "YOU WIN THIS ROUND!";
        msg.style.color = "#00ff00";
        playerDeck.push(playerDeck.shift(), cpuDeck.shift());
    } else {
        msg.innerText = "YOU LOSE THIS ROUND!";
        msg.style.color = "#ff0000";
        cpuDeck.push(cpuDeck.shift(), playerDeck.shift());
    }

    document.getElementById('next-btn').style.display = "block";
    updateCounts();
}

function nextRound() {
    if (playerDeck.length === 0 || cpuDeck.length === 0) {
        alert(playerDeck.length === 0 ? "CPU Wins the game!" : "You are the Champion!");
        location.reload();
        return;
    }
    document.getElementById('cpu-card').classList.add('hidden');
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('message').innerText = "Pick a stat to attack!";
    document.getElementById('message').style.color = "white";
    renderPlayerCard();
}

initGame();
