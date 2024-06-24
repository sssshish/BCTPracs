const prompt = require("prompt-sync")();
const BlockChain = require("./Blockchain");
var bitcoin = new BlockChain();
bitcoin.createNewBlock(123, "genesis", "block1");
//bitcoin.createNewTransaction(0, "Default", "Default");
var nonce;
var hash;
var phash;
var transactions;
function myLoop() {
  numtrans = prompt("Enter the number of transactions: ");
  //Add while(true), add pending transactions to the block
  for (var j = 1; j <= numtrans; j++) {
    amount = prompt("Enter amount: ");
    sender = prompt("Enter sender: ");
    recipient = prompt("Enter recipient: ");
    bitcoin.createNewTransaction(amount, sender, recipient);
  }
  console.log("Loop running...");
}
function myBlockLoop() {
  bitcoin.createNewBlock(nonce, phash, hash);
}
// Start the loop with 10-second intervals
let intervalId = setInterval(myLoop, 5000);
let blockID = setInterval(myBlockLoop, 20000);
// Stop the loop after 1 minute (60 seconds)
setTimeout(() => {
  clearInterval(intervalId);
  clearInterval(blockID);
  console.info(JSON.stringify(bitcoin, null, "  "));
}, 60000);
//console.info(JSON.stringify(bitcoin, null, "  "));
