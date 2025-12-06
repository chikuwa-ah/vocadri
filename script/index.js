window.addEventListener("DOMContentLoaded", () => {
    const name = document.querySelector(".login").children;
    try {
        if (localStorage.getItem("user").length != 0) {
            name[0].textContent = JSON.parse(localStorage.getItem("user")).userName;
            name[0].href = "./profile.html";
        }
    } catch (error) {
        console.log("no user");
    }

    if (localStorage.getItem("words") === null) {
        createWeakData("words");
    }
    if (localStorage.getItem("type") === null) {
        createWeakData("type");
    }
    if (localStorage.getItem("CumulativeScore") === null) {
        localStorage.setItem("CumulativeScore", 0);
    }
    if (localStorage.getItem("WeeklyScore") === null) {
        localStorage.setItem("WeeklyScore", 0);
    }
    if (localStorage.getItem("DailyScore") === null) {
        localStorage.setItem("DailyScore", 0);
    }
    if (localStorage.getItem("Card") === null) {
        localStorage.setItem("Card", 0);
    }
    if (localStorage.getItem("Typing") === null) {
        localStorage.setItem("Typing", 0);
    }
    if (localStorage.getItem("Exam") === null) {
        localStorage.setItem("Exam", 0);
    }

    const now = new Date();
    const week = now.getDay();
    const examPlay = localStorage.getItem('examPlay').split('/');
    if (week === 1 && (Number(examPlay[0]) !== now.getMonth() + 1 || Number(examPlay[1]) !== now.getDate())) {
        localStorage.setItem('WeeklyScore', 0);
    }

    editData();
});
