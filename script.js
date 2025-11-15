let length = document.getElementById("length_password");

let num_check = document.getElementById("numbers");
let symbol_check = document.getElementById("symbols");
let upperCase_check = document.getElementById("toUpperCase");

let display = document.getElementById("outputs");

let copy_btn = document.getElementById("copy");

let form = document.getElementById("app");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (length.value == "" || length.value <= 0) {
        alert("Enter a valid number")
    } else {

        let arr = "abcdefghijklmnopqrstuvwxyz";
        arr = arr.split("");

        let symbols = "!@#$%^&*";
        symbols = symbols.split("");

        let number = "012345689";
        number = number.split("").map(Number);

        if (num_check.checked == true) {
            number.forEach((value) => {
                arr.push(value)
            });
            arr = arr.sort(() => Math.random() - 0.5)
        }


        if (symbol_check.checked == true) {
            symbols.forEach((value) => {
                arr.push(value)
            });
            arr = arr.sort(() => Math.random() - 0.5)
        }

        let outputArr = [];

        function random() {

            for (let i = 0; i < length.value; i++) {
                let num = Math.round(Math.random() * arr.length - 1);
                let alphabet = arr[num];
                outputArr.push(alphabet);
            }

            outputArr = outputArr.join("");

            let str = `${outputArr}`
            display.value = str;

            if (upperCase_check.checked == true) {
                str = str.toUpperCase();
                display.value = str;
                console.log(str)
            }
        }
        random()

        function copy() {
            display.select();
            display.setSelectionRange(0, 99999);

            navigator.clipboard.writeText(display.value)

            alert(`Copied Successfully: ${display.value}`)
        }
        copy_btn.addEventListener("click", copy)
    }

});

window.addEventListener("load", () => {
    const footer = document.body.querySelector("footer");

    if (footer && footer.innerHTML.includes("Satyansh")) {
        console.log(footer.innerHTML);
    } else {
        document.body.innerHTML = "";

        const error = document.createElement("div");
        error.textContent = "Error: Website Has been Tempered";
        error.style.color = "red";
        error.style.fontSize = "1.5rem";
        error.style.textAlign = "center";
        error.style.marginTop = "50px";

        document.body.appendChild(error);
    }
});