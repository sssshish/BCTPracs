//Creating API endpoints with Blockchain
var express = require("express");
var app = express();
var request = require("request");

request(
  {
    url: "https://api.blockchain.info/stats?format=json",
    json: true,
  },
  function (error, reponse, body) {
    btcPrice = body.market_price_usd;
    btcBlocks = body.n_blocks_total;
    btcFees = body.total_fees_btc;
    btcMined = body.n_blocks_mined;
    btcVolume = body.estimated_transaction_volume_usd;
  }
);
app.get("/", function (request, reponse) {
  reponse.send("Bitcoin transaction demo and current price is" + btcPrice);
});
app.get("/blocks", function (request, reponse) {
  reponse.send("\nBitcoin transaction demo and current height is" + btcBlocks);
});
app.get("/fees", function (request, reponse) {
  reponse.send("\nBitcoin transaction demo and current height is" + btcFees);
});
app.get("/mined", function (request, reponse) {
  reponse.send("\nBitcoin transaction demo and current mined is" + btcMined);
});
app.get("/volume", function (request, reponse) {
  reponse.send(
    "\nBitcoin transaction demo and current block volume is" + btcVolume
  );
});
app.listen(3000, function () {
  console.log("Function executing");
});
