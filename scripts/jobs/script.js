document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("go_button").addEventListener("click", (event) => {
        let elements = {
            "first_name": "Иван",
            "last_name": "Иванов",
            "age": 18,
            "email": "email@email.com",
            "nickname": "Nickname",
            "password": "password",
        }

        for (let i in elements) {
            let elem = document.getElementById(i);
            if (!elem.value) {
                elem.value = elements[i];
                placeholdered = true;
                console.log("ELEM:", elem)
            }
        }

        let checked = document.querySelector('input[name="country"]:checked');
        if (!checked) {
            document.getElementById("country").checked = true;
            placeholdered_country = true;
        }

        document.getElementById("request_job").submit();
    })
});