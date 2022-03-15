const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable :) ", 
(answer1) => {
  rl.question("What's an activity you like doing? ",
   (answer2) => {
    rl.question("What do you listen to when you are driving?? ", 
      (answer3) => {
        rl.question("What are your sun, moon and rising signs? ", 
          (answer4) => {
            rl.question("What's your favourite thing to eat for that meal? ", 
              (answer5) => {
                rl.question("What is your superpower? In a few words, tell us what you are amazing at! ",(answer6) => {
                  
                      console.log(`Name: ${answer1}`);
                      console.log(`Activities you like: ${answer2}`);
                      console.log(`Your driving music: ${answer3}`);
                      console.log(`Your BIG 3: ${answer4}`);
                      console.log(`Your favorite food: ${answer5}`);
                      console.log(`Your super power: ${answer6}`);
  
                      rl.close();
                
                });          
              });
            });
          });
        });
      });
 