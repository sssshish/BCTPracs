//Study of sha256
const prompt = require("prompt-sync")();
const BlockChain = require("./Blockchain");
var bitcoin = new BlockChain();
bitcoin.createNewBlock(123, "genesis", "block1");
var nonce;
var hash;
var phash = "ASJAJAJDHSJAJJSHSAK";
for (var i = 0; i < 2; i++) {
  numtrans = prompt("Enter the number of transactions: ");
  for (var j = 0; j < numtrans; j++) {
    amount = prompt("Enter amount: ");
    sender = prompt("Enter sender: ");
    recipient = prompt("Enter recipient: ");
    bitcoin.createNewTransaction(amount, sender, recipient);
  }
  nonce = prompt("Enter nonce: ");
  hash = bitcoin.hashBlock(phash, bitcoin.chain[i], nonce);
  phash = bitcoin.previousBlockHash();
  bitcoin.createNewBlock(nonce, phash, hash);
}
console.log(JSON.stringify(bitcoin, null, "  "));
