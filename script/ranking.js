const createRank = (data, span) => {
    const container = document.getElementById("wordList");

    container.innerHTML = `
        <div class="row header">
            <div class="cell rank">順位</div>
            <div class="cell name">名前</div>
            <div class="cell score">スコア</div>
        </div>`;

    let i = 1;
    for (const user of data) {
        const row = document.createElement("div");
        row.className = "row";

        const rankCell = document.createElement("div");
        rankCell.className = "cell rank";
        rankCell.textContent = i;

        const nameCell = document.createElement("div");
        nameCell.className = "cell name";
        nameCell.textContent = user[1];

        const scoreCell = document.createElement("div");
        scoreCell.className = "cell score";
        scoreCell.textContent = user[span + 5];

        row.appendChild(rankCell);
        row.appendChild(nameCell);
        row.appendChild(scoreCell);
        container.appendChild(row);
        i++;
    }
};

async function fetchDataGet() {
    const queryUrl = apiUrl + "?query=all";
    try {
        const response = await fetch(queryUrl, {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return "エラー";
    }
}

async function getData(span) {
    const during = document.querySelector(".during");
    during.style.display = "block";

    const attack = await fetchDataGet();
    attack.data.data.shift();
    during.style.display = "none";

    attack.data.data.sort((a, b) => b[span + 5] - a[span + 5]);

    console.log(attack.data.data[0][span + 5], span + 5);
    console.log(attack.data.data);

    let recent;
    if (span === 1) {
        const monday = new Date();
        const day = monday.getDay();
        const diff = (day === 0 ? 6 : day - 1);
        monday.setDate(monday.getDate() - diff);

        recent = attack.data.data.filter(str => new Date(str[8]) >= monday);
    } else if (span === 2) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        recent = attack.data.data.filter(str => new Date(str[8]) >= today);
    } else {
        recent = attack.data.data;
    }

    createRank(recent, span);
}


window.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById("section-select");
    selector.addEventListener("change", () => {
        const during = document.querySelectorAll(".during *");
        for (const el of during) {
            el.style.display = "block";
        }
        getData(Number(selector.value));
    });

    const during = document.querySelectorAll(".during *");
    for (const el of during) {
        el.style.display = "block";
    }
    getData(Number(selector.value));
})