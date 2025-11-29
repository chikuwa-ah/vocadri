const card = (settings) => {
    const cardContainer = document.getElementById("cardSection");
    cardContainer.style.display = "flex";

    const all = createAllWordArray(settings);
    const random = arrayShuffle(all);

    const startTime = Date.now();
    test(random, 0, 0, [], startTime, settings.grade);
};

const arrayShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const createAllWordArray = (settings) => {
    const array = [];
    for (let i = 0; i < settings.end - settings.start + 1; i++) {
        array.push(WORDS[i + settings.start]);
    }
    return array;
};

const test = (wordList, type, score, mistake, startTime, grade) => {
    let index = type === 0 ? 0 : 60;

    const wordSpace = document.getElementById("wordText");
    const choices = document.querySelector(".choices");

    const meanSplit = meanText(index, wordList);

    wordSpace.textContent = type === 0 ? wordList[index].word : meanSplit;
    const place = Math.floor(Math.random() * 4);
    choices.children[place].classList.add("correct");
    let i = 0;
    do {
        if (i === place) {
            fourIndex = index;
        } else {
            fourIndex = wordList.length - (index + 1) * (i + 1);
        }

        const meanSplit = meanText(fourIndex, wordList);

        choices.children[i].textContent = type === 0 ? meanSplit : wordList[fourIndex].word;

        i++;
    } while (i < 4);

    choices.addEventListener("touchend", (e) => {
        e.preventDefault();

        const el = e.target;
        const parent = el.parentElement;
        const children = Array.from(parent.children);
        const order = children.indexOf(el);

        if (choices.children[order].classList.contains("correct")) {
            score++;
        } else {
            mistake.push({ element: wordList[index], type: 'choice' });
        }

        for (const element of choices.children) {
            element.classList.remove("correct");
        }

        index++;
        if (type === 0) {
            if (index >= 20) {
                choices.remove();
                const card = document.getElementById("card");
                card.innerHTML += `                <div class="choices">
                    <div class="choice"></div>
                    <div class="choice"></div>
                    <div class="choice"></div>
                    <div class="choice"></div>
                </div>`;
                test(wordList, 1, score, mistake, startTime, grade);
                return;
            }
        } else {
            if (index >= 80) {
                document.getElementById('cardSection').remove();
                typing(wordList, score, mistake, startTime, grade);
            }
        }

        const meanSplit = meanText(index, wordList);

        wordSpace.textContent = type === 0 ? wordList[index].word : meanSplit;

        const place = Math.floor(Math.random() * 4);
        choices.children[place].classList.add("correct");
        let i = 0;
        do {
            if (i === place) {
                fourIndex = index;
            } else {
                fourIndex = wordList.length - (index + 1) * (i + 1);
            }

            const meanSplit = meanText(fourIndex, wordList);

            choices.children[i].textContent = type === 0 ? meanSplit : wordList[fourIndex].word;

            i++;
        } while (i < 4);
    });
};

const meanText = (index, wordList) => {
    let meanSplit;
    try {
        meanSplit = wordList[index].mean.split(":")[1].split(",")[0];
    } catch (e) {
        meanSplit = wordList[index].mean.split(":")[1];
    }
    return meanSplit;
}

const createTypingDisplay = () => {
    const display = document.querySelector(".typing-display");
    display.innerHTML = `
    <div class="keyboard">
            <div class="key-row">
                <button class="key" data-value="q">Q</button>
                <button class="key" data-value="w">W</button>
                <button class="key" data-value="e">E</button>
                <button class="key" data-value="r">R</button>
                <button class="key" data-value="t">T</button>
                <button class="key" data-value="y">Y</button>
                <button class="key" data-value="u">U</button>
                <button class="key" data-value="i">I</button>
                <button class="key" data-value="o">O</button>
                <button class="key" data-value="p">P</button>
            </div>
            <div class="key-row">
                <button class="key" data-value="a">A</button>
                <button class="key" data-value="s">S</button>
                <button class="key" data-value="d">D</button>
                <button class="key" data-value="f">F</button>
                <button class="key" data-value="g">G</button>
                <button class="key" data-value="h">H</button>
                <button class="key" data-value="j">J</button>
                <button class="key" data-value="k">K</button>
                <button class="key" data-value="l">L</button>
            </div>
            <div class="key-row">
                <button class="key" data-value="z">Z</button>
                <button class="key" data-value="x">X</button>
                <button class="key" data-value="c">C</button>
                <button class="key" data-value="v">V</button>
                <button class="key" data-value="b">B</button>
                <button class="key" data-value="n">N</button>
                <button class="key" data-value="m">M</button>
                <button class="delete" data-value="delete">⌫</button>
            </div>
            <div class="key-row">
                <button class="space" data-value=" "></button>
                <button class="enter" data-value="enter">決定</button>
            </div>
        </div>

        <div class="typing-container" id="typingSection">
            <button class="back-button" id="backBtn">← 設定に戻る</button>
            <div class="typing">
                <div id="meanText" class="mean-space"> </div>
                <div class="typing-space">
                    <div id="typingSpace" class="type-text"></div>
                    <div class="cursor visible"></div>
                </div>
            </div>
        </div>
    </div>
    `;
    document.getElementById("backBtn").addEventListener("click", () => {
        location.reload();
    });
};

const typing = (wordList, choiceScore, missList, startTime, grade) => {
    createTypingDisplay();
    let index = 120;
    let next = false;
    let score = 0;

    const meanSpace = document.getElementById("meanText");
    const typeSpace = document.getElementById("typingSpace");
    meanSpace.textContent = meanText(index, wordList);
    typeSpace.textContent = wordList[index].word.length > 1 ? wordList[index].word.slice(0, 1) : '';

    const keyboard = document.querySelector(".keyboard");
    keyboard.addEventListener("touchend", (e) => {
        e.preventDefault();
        const text = e.target.getAttribute("data-value");
        if (text === null) return;
        if (text === "delete") {
            typeSpace.textContent = typeSpace.textContent.slice(0, -1);
        } else if (text === "enter") {
            enter();
        } else if (!next) {
            typeSpace.textContent += text;
        }
        e.target.classList.add("key-active");
        setTimeout(() => {
            e.target.classList.remove("key-active");
        }, 150);
    });

    const cursor = document.querySelector(".cursor");
    const enterKey = document.querySelector(".enter");
    const enter = () => {
        if (next) {
            index++;
            if (index >= 130) {
                typingEnd(choiceScore, score, missList, startTime, grade);
                return;
            }
            next = false;
            meanSpace.textContent = meanText(index, wordList);
            typeSpace.textContent = wordList[index].word.length > 1 ? wordList[index].word.slice(0, 1) : '';
            enterKey.textContent = "決定";
            typeSpace.style.color = "#333333";
            typeSpace.parentNode.style.backgroundColor = "#ffffff";
            cursor.classList.add("visible");
        } else {
            next = true;
            cursor.classList.remove("visible");

            enterKey.textContent = "次へ";

            if (typeSpace.textContent === wordList[index].word) {
                score++;
            } else {
                missList.push({ element: wordList[index], type: 'type' });
            }

            if (next) enter();
        }
    };
};

const typingEnd = (choiceScore, typingScore, missList, startTime, grade) => {
    removeTypingDisplay();
    displayResult(choiceScore, typingScore, startTime, grade);
    createTable(missList);
    wordTouchEvent();
    const endPart = document.querySelector(".display");
    const select = document.querySelector(".select-destiny");
    endPart.style.display = "block";

    select.addEventListener(
        "click",
        (e) => {
            location.href = "./index.html";
            return;
        },
        { once: true }
    );
};

const displayResult = (choiceScore, typingScore, startTime, grade) => {
    const time = Date.now();
    const gap = (time - startTime) / 1000;
    const timeBonus = 200 - gap > 0 ? 200 - gap : 0;
    const gradeBonus = grade / 5 + 1
    const score = Math.floor((choiceScore * 26 + typingScore * 39 + timeBonus * 2.1) * gradeBonus);
    const result = document.querySelector('.result');
    result.innerHTML = `
            <div class="title">成績</div>
        <div class="row">
            <div class="cell number">4択</div>
            <div class="cell word" id>${choiceScore}/40</div>
        </div>
        <div class="row">
            <div class="cell number">タイピング</div>
            <div class="cell word">${typingScore}/10</div>
        </div>
        <div class="row">
            <div class="cell number">タイム</div>
            <div class="cell word">${Math.floor(gap)}秒</div>
        </div>
        <div class="row">
            <div class="cell number">スコア</div>
            <div class="cell word score">${score}</div>
        </div>
    `;

    const CumulativeScore = Number(localStorage.getItem('CumulativeScore'));
    localStorage.setItem('CumulativeScore', CumulativeScore + score);
    const WeeklyScore = Number(localStorage.getItem('WeeklyScore'));
    localStorage.setItem('WeeklyScore', WeeklyScore + score);
    localStorage.setItem('DailyScore', score);

    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const today = `${month}/${day}`;
    localStorage.setItem('examPlay', today);
}

const removeTypingDisplay = () => {
    const display = document.querySelector(".typing-display");
    display.innerHTML = "";
};

const createTable = (missList) => {
    const parent = document.getElementById("table-container");
    parent.innerHTML = `<div class="container" id="wordList"></div>`;
    const container = document.getElementById("wordList");
    const weakList = [getLocalStorage("words"), getLocalStorage("type")];

    container.innerHTML = `
    <div class="title">ミスした単語</div>
        <div class="row header">
            <div class="cell number">No.</div>
            <div class="cell word">単語</div>
        </div>`;

    for (const word of missList) {
        const row = document.createElement("div");
        row.className = "row";
        if (weakList[1][`${word.element.number}`]) {
            row.style.backgroundColor = "#cbffb3";
        }
        if (weakList[0][`${word.element.number}`]) {
            row.style.backgroundColor = "#b3f5ff";
        }

        const numberCell = document.createElement("div");
        numberCell.className = "cell number";

        const numberText = document.createElement("p");
        numberText.className = "number-p number";
        numberText.textContent = word.element.number;

        const wordCell = document.createElement("div");
        wordCell.className = "cell word";
        wordCell.textContent = word.element.word;

        for (const miss of missList) {
            if (miss.element.number === word.element.number) {
                if (miss.type === "choice") {
                    numberText.style.backgroundColor = "#f67171";
                    numberText.style.color = "#ffffff";
                } else {
                    numberText.style.backgroundColor = "#f6eb71";
                    numberText.style.color = "#363636";
                }
                break;
            }
        }

        numberCell.appendChild(numberText);
        row.appendChild(numberCell);
        row.appendChild(wordCell);
        container.appendChild(row);
    }
};

const showPopUp = (number) => {
    const wordBox = document.getElementById("pop-word");
    const meanBox = document.getElementById("pop-mean");
    wordBox.textContent = WORDS[number].word;
    meanBox.textContent = WORDS[number].mean;
    document.querySelector(".pop-overlay").style.display = "block";
    document.querySelector(".pop-up").style.display = "block";
};

const closePopUp = () => {
    document.querySelector(".pop-overlay").style.display = "none";
    document.querySelector(".pop-up").style.display = "none";
};

const wordTouchEvent = () => {
    const weakList = [getLocalStorage("words"), getLocalStorage("type")];
    let startY = 0;
    let moved = false;
    const threshold = 10;

    const container = document.getElementById("wordList");

    container.addEventListener("touchstart", (e) => {
        startY = e.touches[0].clientY;
        moved = false;
    });

    container.addEventListener("touchmove", (e) => {
        const currentY = e.touches[0].clientY;
        if (Math.abs(currentY - startY) > threshold) {
            moved = true;
        }
    });

    container.addEventListener("touchend", (e) => {
        if (moved) return;
        e.preventDefault();

        const target = e.target;
        let parent = target.parentNode;
        let style = getComputedStyle(parent);

        if (target.classList[1] === "word" && target.textContent !== "単語") {
            const number = Number(parent.children[0].textContent);
            showPopUp(number);
        }

        if (target.classList[1] === "number" && target.textContent !== "No.") {
            if (e.target.classList[0] === "number-p") {
                parent = parent.parentNode;
                style = getComputedStyle(parent);
            }
            const number = Number(target.textContent);
            if (style.backgroundColor === "rgb(255, 255, 255)") {
                parent.style.backgroundColor = "#b3f5ff";
                weakList[0][`${number}`] = true;
                setLocalStorage("words", weakList[0]);
            } else {
                weakList[0][`${number}`] = false;
                setLocalStorage("words", weakList[0]);

                if (weakList[0][`${number}`]) {
                    parent.style.backgroundColor = "#b3f5ff";
                } else {
                    parent.style.backgroundColor = "#fff";
                }
            }
        }
    });
};

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startBtn").addEventListener("touchend", () => {
        const now = new Date();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const today = `${month}/${day}`;
        if (localStorage.getItem('examPlay') === today) {
            alert('本日は挑戦済みです。');
            return;
        }

        const exam = localStorage.getItem('Exam');
        localStorage.setItem('Exam', Number(exam) + 1);
        const selector = document.getElementById("range-select");
        const grade = [0, 817, 1151, 1428];
        const start = grade[Number(selector.value - 1)] + 1;
        const end = grade[Number(selector.value)];

        const settings = document.querySelector(".origin");
        settings.style.display = "none";

        card({
            start: start,
            end: end,
            grade: Number(selector.value),
        });
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        location.reload();
    });

    document.getElementById('rank').addEventListener('touchend', () => {
        location.href = "./ranking.html";
    })
});
