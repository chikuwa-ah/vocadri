for (let i = 1; i < 1428; i++) {
    try {
        meanSplit = WORDS[i].mean.split(":")[1].split(",")[0];
    } catch (e) {
        meanSplit = WORDS[i].mean.split(":")[1];
    }

    console.log(i, meanSplit);
}