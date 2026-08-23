#!/usr/bin/env node
// hello — greet someone from the command line.
//
//   hello            → Hello, world!
//   hello Ada        → Hello, Ada!
//   hello --shout Ada → HELLO, ADA!

const args = process.argv.slice(2);
const shout = args.includes("--shout");
const name = args.filter((a) => !a.startsWith("--"))[0] ?? "world";

let line = `Hello, ${name}!`;
if (shout) line = line.toUpperCase();

console.log(line);
