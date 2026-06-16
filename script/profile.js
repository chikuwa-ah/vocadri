window.addEventListener("DOMContentLoaded", () => {
    const out = document.querySelector(".log-out");
    out.addEventListener("touchend", (e) => {
        if (confirm("本当にログアウトしますか？")) {
            c();
            createWeakData("words");
            createWeakData("type");
            localStorage.setItem("CumulativeScore", 0);
            localStorage.setItem("WeeklyScore", 0);
            localStorage.setItem("DailyScore", 0);
            const top = document.getElementById("toTop");
            top.click();
        }
    });

    const user = document.getElementById('user-name');
    user.textContent = JSON.parse(localStorage.getItem('user')).userName;
    const weekly = document.getElementById('weekly-score');
    weekly.textContent = localStorage.getItem('WeeklyScore');
    const cumulative = document.getElementById('cumulative-score');
    cumulative.textContent = JSON.parse(localStorage.getItem('CumulativeScore'));
    const card = document.getElementById('card');
    card.textContent = JSON.parse(localStorage.getItem('Card'));
    const typing = document.getElementById('typing');
    typing.textContent = JSON.parse(localStorage.getItem('Typing'));
    const exam = document.getElementById('exam');
    exam.textContent = JSON.parse(localStorage.getItem('Exam'));
});
