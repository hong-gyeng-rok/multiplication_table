const gugudanDiv = document.getElementById("gugudan");
const form = document.getElementById("gugudan-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 제출 동작을 막습니다.

    const danInput = document.getElementById("dan");
    const dan = parseInt(danInput.value, 10);

    if (isNaN(dan) || dan < 2 || dan > 9) {
        alert("2부터 9 사이의 숫자를 입력하세요.");
        return;
    }

    // 결과를 초기화합니다.
    gugudanDiv.innerHTML = '';

    // 입력된 단의 결과만을 표시합니다.
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    caption.textContent = `${dan}단`;
    table.appendChild(caption);

    for (let j = 1; j <= 9; j++) {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        cell1.textContent = `${dan} x ${j}=`;
        cell2.textContent = dan * j;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    gugudanDiv.appendChild(table);
});