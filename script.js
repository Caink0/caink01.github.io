let playerName;

function startGame() {
    playerName = document.getElementById('playerName').value.trim();
    if (playerName === "") {
        alert("請輸入你的名字！");
        return;
    }
    document.getElementById('playerInfo').style.display = 'none';
    document.getElementById('introduction').style.display = 'block';
    document.getElementById('playerNameSpan').textContent = playerName;
}

function startTest() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    displayChoices();
}

const values = [
    { name: "包容", description: "接納接納多樣文化包容不同的人" },
    { name: "團隊合作", description: "身在團隊中並樂於貢獻" },
    { name: "別出心裁", description: "用新的眼光看待問題，願意嘗試用新的方法完成目標有創意肯創新" },
    { name: "開放", description: "敞開心胸分享自己的想法、知識、資訊並且樂意傾聽各方意見" },
    { name: "冒險", description: "經過評估後有勇氣和意願冒險，跨出自己的舒適圈" },
{ name:  "樂趣",description: "有能力在工作中樂在其中" },
{ name: "成就", description: "成功地達達成或超越目標" },
{ name: "一致", description: "言行舉止，前後一致值得托" },
{ name: "熱情", description: "對個人的工作、理想和信念保持著興奮和熱誠的態度" },
{ name: "值得信賴", description: "行為與所言相符說到做到身體力行" },
{ name: "有擔當", description: "為行動或結果負起責任" },
{ name: "尊重個人", description: "能用尊重對方的方式與其互動" },
{ name: "信任他人", description: "相信他人的誠意與能力" },
{ name: "效率", description: "準確執行盡快達成目標" },
{ name: "正直", description: "有明確的工作生活準則，並要求自己每天做到" },
{ name: "勝任", description: "積極培育及展現高效率工作所需的知識與技能" },
{ name: "適應改變", description: "能在常見的環境中發展茁壯" },
{ name: "誠實", description: "說實話，真實面對" },
{ name: "授權", description: "願意教負責任和權利給他人，讓對方擔起責任" },
{ name: "家庭", description: "即使工作繁忙，也要與重要的家人有高品質的相處時間" },
{ name: "負責", description: "對自己及他人負責處理人事物都要有責任感" },
{ name: "顧客",  description:"在顧客滿意度上表現卓越" },
{ name: "忠誠", description: "終於對他人的承諾或自己的理想" },
{ name:"公正",  description:"公平的對待自己和他人" },
{ name:"終身學習", description: "願意成長學習投資在自我發展上" },
{ name:"創業精神", description: "是自己為企業的經營夥伴" },
{ name:"傳承",  description:"有所成就留下後人可追隨的足跡" },
{ name:"有迫切感", description: "凡事用最快的速度完成有執行力不拖延" },
{ name:"保持平衡", description: "重視並追求在工作興趣和人際之間保持平衡" },
{ name:"品質",  description:"正常地完成工作，並且能達到或超越目標的期待" },
{ name: "事業發展", description: "持續強化事業的資歷與個人發展" },
{ name: "全力以赴", description: "為了完成任務不計代價的投入且堅持不懈" },
{ name: "肯定",  description:"重視有達成目標和成功完成任務而給予接受他人肯定及感謝" },
];

const selectionCount = {};
const excludedOptions = {};
values.forEach(value => {
    selectionCount[value.name] = 0;
    excludedOptions[value.name] = false;
});

let rounds = 40; // 總回合數

function getRandomChoices() {
    const availableValues = values.filter(value => !excludedOptions[value.name]);
    const shuffled = availableValues.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
}

function displayChoices() {
    const [choice1, choice2] = getRandomChoices();
    document.querySelector('#choice1 .value-text').innerHTML = `<strong>${choice1.name}</strong>: ${choice1.description}`;
    document.querySelector('#choice2 .value-text').innerHTML = `<strong>${choice2.name}</strong>: ${choice2.description}`;
    document.getElementById('choice1').dataset.value = choice1.name;
    document.getElementById('choice2').dataset.value = choice2.name;
}

function makeChoice(option) {
    const choice = document.getElementById('choice' + option).dataset.value;
    selectionCount[choice]++;
    rounds--;
    if (rounds > 0) {
        displayChoices();
    } else {
        displayResults();
    }
}

function excludeOption(option) {
    const excludedValue = document.getElementById('choice' + option).dataset.value;
    excludedOptions[excludedValue] = true;
    displayChoices();
}

function displayResults() {
    const topValues = Object.keys(selectionCount)
                            .sort((a, b) => selectionCount[b] - selectionCount[a])
                            .slice(0, 6);
    const resultsList = document.getElementById('topValues');
    topValues.forEach(value => {
        const listItem = document.createElement('li');
        listItem.textContent = value;
        resultsList.appendChild(listItem);
    });
    document.getElementById('game').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

window.onload = function() {
    // The game does not start until the user clicks 'Start Game'.
}