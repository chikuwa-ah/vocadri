async function fetchDataGet(query) {
    const queryUrl = apiUrl + `?query=${encodeURIComponent(query)}`;
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

async function getData() {
    const during = document.querySelector(".during");
    during.style.display = "block";
    const userName = document.getElementById("user-name").value;
    const password = document.querySelector(".none").textContent;
    const attack = await fetchDataGet(userName);
    console.log(attack);
    if (attack.message === "ok") {
        if (attack.data[0][2] === password) {
            console.log("login成功");
            during.style.display = "none";
            const parsedJSON = JSON.stringify({ id: attack.data[0][0], userName: userName });
            localStorage.setItem("user", parsedJSON);
            localStorage.setItem("words", attack.data[0][3]);
            localStorage.setItem("type", attack.data[0][4]);
            localStorage.setItem("CumulativeScore", attack.data[0][5]);
            localStorage.setItem("WeeklyScore", attack.data[0][6]);
            localStorage.setItem("DailyScore", attack.data[0][7]);
            localStorage.setItem("Card", attack.data[0][9]);
            localStorage.setItem("Typing", attack.data[0][10]);
            localStorage.setItem("Exam", attack.data[0][11]);
            const time = attack.data[0][8];
            const day = new Date(Number(time.split('-')[0]), Number(time.split('-')[1]) - 1, Number(attack.data[0][8].split('-')[2].slice(0, 2)));
            day.setDate(day.getDate() + 1);
            localStorage.setItem("examPlay", `${day.getMonth() + 1}/${day.getDate()}`);
            const top = document.getElementById("toTop");
            top.click();
        } else {
            fail();
        }
    } else {
        fail();
    }
}

const fail = () => {
    alert("ユーザーネームかパスワードが間違えています");
    const during = document.querySelector(".during");
    during.style.display = "none";
    const textBox = document.querySelector("input");
    textBox.select();
};

window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("decision-button");
    button.addEventListener("touchend", (e) => {
        const during = document.querySelectorAll(".during *");
        for (const el of during) {
            el.style.display = "block";
        }
        getData();
    });

    const pass = document.getElementById("password");
    pass.addEventListener("input", (e) => {
        const none = document.querySelector(".none");
        if (e.data != null) {
            none.textContent += e.data;
            pass.value = "●".repeat(pass.value.length);
        } else {
            none.textContent = none.textContent.slice(0, none.textContent.length - 1);
        }
    });
});
