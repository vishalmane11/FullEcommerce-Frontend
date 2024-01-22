// let arr: string | number[] = [1, 2, 3, 4];
type Obj = {
  name: String;
  email: String;
  pass: number;
};
let obj: Obj = {
  name: "dfdf",
  email: "dfdf",
  pass: 23445,
};
// the main differnece of type and interface is extends properties like other
// ? this is not mandatory
// readonly method do not chnge again
interface a {
  value: string;
}
type func = {
  (n: string, m: string): void;
};
interface b extends a {
  novalue?: string;
  func: func;
}
let bbc: b = {
  value: "ddf",

  func(n, m) {
    console.log(n + m);
  },
};
bbc.func("d", "ff");
type product = {
  readonly name: string;
};
type bba = (pro: product) => void;
let abc: bba = (pro) => {
  name: "vishal";
};
// console.log((abc.name = "dfdf"));
type bbd = [string, number];
let abcd: bbd = ["33", 44];
// use in html element
// let img = document.querySelector(img) as HTMLImageElement;
type person = {
  name: string;
  email: string;
};
let obja: person = {
  name: "ddsd",
  email: "dfdf",
};
let ab = (key: keyof person): string => {
  return obja[key];
};
// generic
// also use extends properties
// we are known the value of
type props = {
  name?: string;
  last?: string;
  email?: string;
};
let pro1: props = {
  name: "vishal",
  email: "vvcv",
};
let pro2: props = {
  last: "mane",
};
let func = <T, U extends T>(val: T, no: U) => {
  // console.log(val);
  return { val, no };
};
console.log(func<props, props>(pro1, pro2));
type arrtype = { name: string; age: number };
let arr: arrtype[] = [
  {
    name: "vishal",
    age: 12,
  },
  {
    name: "suma",
    age: 123,
  },
  {
    name: "tanya",
    age: 1234,
  },
  {
    name: "ramushi",
    age: 19,
  },
];
let filter = (value: string, option: string, res: string) => {};
filter();
import React, { useState } from "react";

const ttt = () => {
  const [first, setfirst] = useState<string>();
  return <div>ttt</div>;
};

export default ttt;
