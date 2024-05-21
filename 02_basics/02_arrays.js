const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// arrray ke andar array aa chuka hai, array can take any data 

// console.log(marvel_heros[3][2]);

// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(another_array.length)
// console.log(real_another_array)


console.log(Array.from("tarun"))
console.log(Array.from({name: "tarun"}))      // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))