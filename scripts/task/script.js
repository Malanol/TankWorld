function check (D, A) {
    let max_A = D * Math.sqrt(2) * 0.5;

    console.log("MAX A:", max_A)
    if (A > max_A) {
        return "Нельзя";
    } else {
        return "Можно";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calc").addEventListener("click", (event) => {
        let D = parseFloat(document.getElementById("diametr_D").value);

        if (!D && D != 0) {
            alert("Введите диаметр D!");
            return;
        }

        if (D <= 0) {
            alert("Диаметр D должен быть больше 0!");
            return;
        }

        let A = parseFloat(document.getElementById("width_A").value);

        if (!A && A != 0) {
            alert("Введите ширину бруса A!");
            return;
        }

        if (A <= 0) {
            alert("Ширина бруса A должна быть больше 0!");
            return;
        }

        document.getElementById('result_field').readOnly = false;
        document.getElementById("result_field").value = check(D, A);
        document.getElementById('result_field').readOnly = true;
    })

    document.getElementById("send").addEventListener("click", (event) => {
        let result_value = document.getElementById("result_field").value;

        if (!result_value) {
            alert("Сначала нажмите вычислить!");
            return;
        }

        if (result_value != "Можно") {
            alert("Вводные данные не удовлетворяют условиям задачи. Отправка невозможна.")
            return;
        }

        document.getElementById("UserEnter").submit();
    });
});