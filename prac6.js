var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser");
var bitcore = require("bitcore-lib");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", function (req, res) {
  res.sendFile("E:/MscCS/workspace/bctPracs/index2.html");
});

app.post("/wallet", function (req, res) {
  var username = req.body.username;
  var input = new Buffer.from(username);
  var hash = bitcore.crypto.Hash.sha256(input);
  var bn = bitcore.crypto.BN.fromBuffer(input);
  var pk = new bitcore.PrivateKey(bn).toWIF();
  var addr = new bitcore.PrivateKey(bn).toAddress();
  console.log("Username: " + username);
  res.send(
    "Brain wallet of <br> User = " +
      username +
      " <br> Adress = " +
      addr +
      "<br> Private key = " +
      pk
  );
});

app.listen(3000, function () {
  console.log("Function executing...");
});
