async function fetchNewAccountPost(name, pass) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify({ name: name, passWord: pass, weakWord: localStorage.getItem('words'), weakTyping: localStorage.getItem('type') }),
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

async function postData() {
    const during = document.querySelector(".during");
    during.style.display = "block";
    const userName = document.getElementById("user-name").value;
    const password = document.querySelector(".none").textContent;
    const attack = await fetchNewAccountPost(userName, password);
    console.log(attack);
    if (attack === "エラー") {
        fail("通信エラー");
    } else {
        try {
            if (attack.error === "このユーザー名はすでに存在します。") {
                fail(attack.error);
            } else {
                during.style.display = "none";
                const userData = { id: attack.id, userName: userName };
                const parsedJSON = JSON.stringify(userData);
                localStorage.setItem("user", parsedJSON);
                const top = document.getElementById("toTop");
                top.click();
            }
        } catch (error) {
            during.style.display = "none";
        }
    }
}

const fail = (content) => {
    alert(content);
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
        postData();
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
