let userInput = '';

let userConfirmed = false;
while (!userConfirmed) {
  userInput = prompt('enter a word to spell:');

  if (userInput === '' || userInput === null) {
    alert('nope, enter something');
  } else {
    userConfirmed = confirm(
      'do you want to spell this word?\n\n- "' + userInput + '"'
    );
  }
}

let spelledOut = 'all spelled out:\n';
for (let nextLetter of userInput) {
  spelledOut = spelledOut + '\n- ' + nextLetter;
}

alert(spelledOut);
