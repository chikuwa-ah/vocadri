const key = "AKfycbzRYBhbJx64xYfSPXmleXy1XM9UIgYikleEsY8CVRdgQHApTW2aolPZ0IwL_3JPaXf_";
const apiUrl = `https://script.google.com/macros/s/${key}/exec`;

async function fetchDataPost() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const today = `${month}/${day}`;
    const played = localStorage.getItem('examPlay') === today;
    const postData = {
        id: JSON.parse(localStorage.getItem("user")).id,
        word: localStorage.getItem("words"),
        type: localStorage.getItem("type"),
        score: localStorage.getItem("CumulativeScore"),
        weekScore: localStorage.getItem("WeeklyScore"),
        dailyScore: localStorage.getItem("DailyScore"),
        card: localStorage.getItem("Card"),
        typing: localStorage.getItem("Typing"),
        exam: localStorage.getItem("Exam"),
        played: played,
    };
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return "エラー";
    }
}

async function editData() {
    const attack = await fetchDataPost();
    console.log(attack);
}
