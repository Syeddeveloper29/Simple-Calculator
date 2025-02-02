let string = "";
let input = document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let memory = 0;

let buttonsArray = Array.from(buttons);

buttonsArray.forEach(btn => {
    btn.addEventListener("click", (e) => {

        if (e.target.innerHTML == 'DEL') {

            string = string.substring(0, string.length- 1);
            input.value = string;

        } else if (e.target.innerHTML === '÷') {

            string += ('/');
            input.value = string;

        } else if (e.target.innerHTML == '=') {

                                          // Check for division by zero
            if (string.includes('/0')) {

                input.value = "Error"; // Reset string to avoid further errors

            } else {

                string = eval(string);
                input.value = string;
            }

        } else if (e.target.innerHTML == 'AC') {

            string = '';
            input.value = string;

        } else if (e.target.innerHTML == 'x<sup>2</sup>') {

            string = string ** 2;
            input.value = string;

        } else if (e.target.innerHTML == '%') {

            string = string / 100;
            input.value = string;

        } else if (e.target.innerHTML === 'M+') {

            memory += Number(input.value) || 0;

        } else if (e.target.innerHTML === 'M-') {

            memory -= Number(input.value) || 0;

        } else if (e.target.innerHTML === 'MRC') {

            if (input.value == memory) {
                memory = 0;

            } else {

                input.value = memory;
                string = memory;

            }
        } else if (e.target.innerHTML === 'x'){

            string += '*';
            input.value = string;

        } else {

            string += e.target.innerHTML;
            input.value = string;

        }
    });
});
