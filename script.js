const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.addEventListener("click", () => {

    const value = Number(input.value);

    new Promise((resolve, reject) => {

        setTimeout(() => {

            output.innerText = `Result: ${value}`;

            resolve(value);

        }, 2000);

    })

    .then((data) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const result = data * 2;

                output.innerText = `Result: ${result}`;

                resolve(result);

            }, 1000);

        });

    })

    .then((data) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const result = data - 3;

                output.innerText = `Result: ${result}`;

                resolve(result);

            }, 1000);

        });

    })

    .then((data) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const result = data / 2;

                output.innerText = `Result: ${result}`;

                resolve(result);

            }, 1000);

        });

    })

    .then((data) => {

        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const result = data + 10;

                output.innerText = `Final Result: ${result}`;

                resolve(result);

            }, 1000);

        });

    });

});