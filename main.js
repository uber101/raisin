const btn = document.querySelector('.submit_btn');
const input = document.querySelector('.input_box');

btn.addEventListener('click', () => {
    // if input value is "He is not who you think he is"
    // show a text: where oriental spices meet the numbers lies your first clue
    // else show a text: wrong answer

    if (input.value === "he is not who you think he is") {
        // show a text div
        const text = document.querySelector('.text');
        text.classList.add('show_text');
    }
} );

// Path: main.js