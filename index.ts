const name = "momo",
  age = 27,
  gender = "male";

const sayHi = (name, age, gender?) => {
  //gender ==> optional
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {}; //bug fix
