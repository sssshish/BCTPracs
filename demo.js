const express = require("express");
const request = require("request-promise-native"); // Using 'request-promise-native' for cleaner async handling

const app = express();

const apiUrl = "https://api.blockchain.info/stats?format=json";

// Fetch latest Bitcoin stats asynchronously
async function fetchBitcoinStats() {
  try {
    const response = await request.get(apiUrl, { json: true });
    return {
      price: response.market_price_usd,
      blocks: response.n_blocks_total,
      mined: response.n_blocks_mined,
      volume: response.estimated_transaction_volume_usd,
    };
  } catch (error) {
    return error;
  }
}

// Render the main page with all stats dynamically
app.get("/", async (req, res) => {
  const stats = await fetchBitcoinStats(); // Use async/await for clean handling
  res.render("index", { stats }); // Use a templating engine for dynamic HTML rendering
});

// Alternatively, serve pre-rendered HTML with JavaScript for data fetching:
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html")); // Serve pre-rendered index.html
// });

// Serve individual stats endpoints (consider using a router for organization)
app.get("/blocks", async (req, res) => {
  const stats = await fetchBitcoinStats();
  res.json({ blocks: stats.blocks });
});

app.get("/mined", async (req, res) => {
  const stats = await fetchBitcoinStats();
  res.json({ mined: stats.mined });
});

app.get("/volume", async (req, res) => {
  const stats = await fetchBitcoinStats();
  res.json({ volume: stats.volume });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
