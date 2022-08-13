'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
   
    answers: new Array(4).fill(0),
    registerNewAnswer1() {
        //return prompt(this.question + ' ' + [...this.options]);
        const ans = Number(
            prompt(
                `${this.question}\n ${this.options.join('\n')}\n(Write option number)`
            )
        );
        //console.log(ans);
        typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;
        //console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer1.bind(poll));
