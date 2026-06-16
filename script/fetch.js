const key = "AKfycbx-pR_vFcDDgTtTGadG5avdI012-7CibUBAqBK2PiRSlUZNEM43QUpTQls3Liflmn8j";
const apiUrl = `https://script.google.com/macros/s/${key}/exec`;

async function fetchDataGet(query) {
    const queryUrl = apiUrl + `?query=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(queryUrl, {
            method: "GET", // GETリクエスト
            mode: "cors", // CORSを明示的に設定
            credentials: "same-origin",
        });
        const data = await response.json();
        console.log("取得したデータ:", data);
    } catch (error) {
        console.error("データ取得に失敗しました:", error);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("words") === null) {
        createWeakData("words");
    }

    if (localStorage.getItem("type") === null) {
        createTypeData("type");
    }

    document.getElementById("startBtn").addEventListener("touchend", () => {
        fetchDataGet("佐藤");
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        location.reload();
    });
});

fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({ name: "山田太郎子", passWord: "sdmkfajksfjsdnv" }),
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
});
