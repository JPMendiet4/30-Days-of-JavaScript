// Ciclos

// for
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// for in 
const user = {
	name: "Pepito",
  age: 20,
  role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}

// for of
const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}


// while

let i = 1;
while (i <= 10){
  console.log(i);
  i++;
}

// do-while
let i = 1;
do {
	console.log(i);
	i++;
	} while (i <= 10);