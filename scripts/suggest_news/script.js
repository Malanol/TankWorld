document.addEventListener("DOMContentLoaded", () => {
    let date = new Date();

    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    document.getElementById("date").value=`${year}-${month}-${day}`;

    document.getElementById("go_button").addEventListener("click", (event) => {
        let elements = {
            "first_name": "Иван",
            "last_name": "Иванов",
            "group": "БГП230",
            "email": "email@email.com",
            "phone_number": "+7(000)000-00-00",
            "source": "Источник",
            "news_text": "Текст новости"
        }

        for (let i in elements) {
            let elem = document.getElementById(i);
            if (!elem.value) {
                elem.value = elements[i];
            }
        }

        document.getElementById("suggest_form").submit();
    })
});