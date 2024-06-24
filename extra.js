//Study of sha256
const prompt = require("prompt-sync")();
const BlockChain = require("./Blockchain");
var bitcoin = new BlockChain();
bitcoin.createNewBlock(123, "genesis", "block1");
var phash = "0000ASJAJAJDHSJAJJSHSAK";
const currentBlockData = [
  {
    amount: 10,
    sender: "a",
    recipient: "as",
  },
  {
    amount: 120,
    sender: "sa",
    recipient: "dsc",
  },
];
console.log(bitcoin.proofOfWork(phash, currentBlockData));

// const prompt = require("prompt-sync")();
// const BlockChain = require("./Blockchain");
// var bitcoin = new BlockChain();
// bitcoin.createNewBlock(123, "genesis", "block1");
// //bitcoin.createNewTransaction(0, "Default", "Default");
// var nonce;
// var hash;
// var phash;
// var transactions;
// function myLoop() {
//   var choice = "Y";
//   console.log("NEW 5 seconds LOOP");
//   //Add while(true), add pending transactions to the block
//   while (choice == "Y") {
//     amount = prompt("Enter amount: ");
//     sender = prompt("Enter sender: ");
//     recipient = prompt("Enter recipient: ");
//     bitcoin.createNewTransaction(amount, sender, recipient);
//     choice = prompt("Continue? Y or N ");
//   }
// }
// function myBlockLoop() {
//   bitcoin.createNewBlock(nonce, phash, hash);
// }

// let intervalId = setInterval(myLoop, 5000);
// let blockID = setInterval(myBlockLoop, 5000);
// // Stop the loop after 1 minute (60 seconds)
// setTimeout(() => {
//   clearInterval(intervalId);
//   clearInterval(blockID);
//   console.info(JSON.stringify(bitcoin, null, "  "));
// }, 20000);
// //console.info(JSON.stringify(bitcoin, null, "  "));
