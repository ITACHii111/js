# projects related to DOM

# project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-iwkt7d?file=index.html)

# solution code

## project 1

```java script
console.log("Tarun")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)  
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
  })
})

```


### project 2 solution

```javascript


const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#result');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result 18.6 24.9
    if (bmi < 18.6) {
      results.innerHTML = `<span>
        ${bmi}<br>
        underweight
      </span>`;
    } else if (bmi < 24.9) {
      results.innerHTML = `<span>
        ${bmi}<br>
        normal weight
      </span>`;
    } else {
      results.innerHTML = `<span>
        ${bmi}<br>
        overweight
      </span>`;
    }
  }
});
  

```


### project 3 solution code 

``` javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')


setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)


```

### project 4


``` javascript

let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  // the guess is in the correct range
  if(guess === '' || guess <= 0 || guess > 100 || isNaN(guess)){
    alert('Please enter a valid number between 1 and 100')
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess == randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Guess is toooo low`)
  }else{
    displayMessage(`Guess is too high`)
  }
}

function displayGuess(guess){
  userInput.value = ''            // clean up
  guessSlot.innerHTML += ` ${guess}`
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  // 
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  //
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    e.preventDefault()
    randomeNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    newGuess = 1
    guessSlot.innerHTML = ``
    remaining.innerHTML = `10`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}

```