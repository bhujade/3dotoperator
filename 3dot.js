const obj1 ={
    name: "rohan",
    age:23
}

const obj2 ={
    nationality:"indian",
    city:"pune"
}

const obj3 = {...obj1,...obj2};
console.log("obj3",obj3)