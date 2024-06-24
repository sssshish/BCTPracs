var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

request(
  {
    url: "https://api.blockchain.info/stats?format=json",
    json: true,
  },
  function (error, response, body) {
    btcPrice = body.market_price_usd;
    btcBlocks = body.n_blocks_total;
    btcFees = body.total_fees_btc;
    btcMined = body.n_blocks_mined;
    btcVolume = body.estimated_transaction_volume_usd;
  }
);

app.get("/", function (req, res) {
  res.sendFile("E:/MscCS/workspace/bctPracs/index.html");
});

app.post("/wallet", function (req, res) {
  var username = req.body.username;
  var fav_coin = req.body.fav_coin;
  var uses = req.body.uses;
  console.log("Your Username: " + username);
  console.log("Your Favorute Coin: " + fav_coin);
  // uses.forEach((use) => console.log(use));
  if (uses) {
    uses.forEach((use) => console.log(use));
  } else {
    console.log("No uses selected.");
  }
  // Option 2: Using map and join
  let usesString = uses?.map((use) => use).join(", ") || "No uses selected.";
  console.log("Uses:", usesString);
  res.send("Complete");
});

app.listen(3000, function () {
  console.log("Function executing...");
});
