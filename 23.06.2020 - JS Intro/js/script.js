// console.log("Hello P116")

// var x=5;
// x="Kamran";
// x=true;
// x='a';
// x=[1,2,3];
// console.log(x)

// var a;
// var word=null;
// var str="adasfs30";
// var num=parseInt(str);
// console.log(str);
// var arr=["Javid","Test"];
// console.log(arr[2]);

// var a=10;
// console.log(a);
// var a="Kamran";
// console.log(a);

// let a=10;
// a="Kamran";

// for (var i = 0; i < 10; i++) {

// }

// console.log(i)

// const pi=3.14;

// console.log(pi)

// let age = 18;

// let result = age > 18 ? "Xosh gelmisiniz" : "Xosh Getdiniz";
// console.log(result);

// let x=5;

// let y="5";

// console.log(!(x==y))
// console.log(x!==y);

// console.log(x+1+y)

// let arr=[1,"bir",true,2.5,'a'];

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index])]
// }

// let age = 15;
// if (age > 18) {
//     console.log("Okey")
// } else if (age == 18) {
//     console.log("beraberdir")
// } else {
//     console.log("kichikdir")
// }

// switch (age) {
//     case 18:
//         console.log("Boyuyub")
//         break;
//     case 16:
//         console.log("Yeniyetme")
//         break;
//     default:
//         console.log("Other")
//         break;
// }

// let arr=["Tural","Elshen","Ulvi"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let item of arr) {
//     console.log(item)
// }

// let i=1;

// while(i<=10){
//     console.log(i)
//     i++;
// }

// do{
//     i++;
//     console.log(i)
   
// }while(i<=10)

let student={
    name:"Tural",
    surname:"Mehdiyev",
    age:18
}

for (const key in student) {
    console.log(key+" - "+student[key])
}