'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
   
    answers: new Array(4).fill(0),
    
    //1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
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
    
    /*3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1"*/
    
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};
//2.Call this method whenever the user clicks the "Answer poll" button
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer1.bind(poll));
