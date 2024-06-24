var sha256 = require("sha256");
function BlockChain() {
  this.chain = [];
  this.newTransactions = [];
}
BlockChain.prototype.createNewBlock = function (
  nonce,
  perivousBlockHash,
  hash
) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce: nonce,
    hash: hash,
    perivousBlockHash: perivousBlockHash,
  };
  this.newTransactions = [];
  this.chain.push(newBlock);
  return newBlock;
};
BlockChain.prototype.previousBlockHash = function () {
  return this.chain[this.chain.length - 1].hash;
};
BlockChain.prototype.getPreviousBlock = function () {
  return this.chain[this.chain.length - 1];
};
BlockChain.prototype.createNewTransaction = function (a, s, r) {
  const newTrans = {
    amount: a,
    sender: s,
    recipient: r,
  };
  this.newTransactions.push(newTrans);
  return this.getPreviousBlock()["index"] + 1;
};
//Prac 3
BlockChain.prototype.hashBlock = function (
  previousBlockHash,
  currentBlockData,
  nonce
) {
  const dataAsString =
    previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
  const hash = sha256(dataAsString);
  return hash;
};
//Prac 4
BlockChain.prototype.proofOfWork = function (
  previousBlockHash,
  currentBlockData
) {
  let nonce = 0;
  let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  while (hash.substring(0, 4) !== "0000") {
    nonce++;
    hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
  }
  return nonce;
};
module.exports = BlockChain;
