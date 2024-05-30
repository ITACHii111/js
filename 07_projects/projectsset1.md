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