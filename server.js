const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Load knowledge base from JSON file
let knowledge = {};
try {
  knowledge = JSON.parse(fs.readFileSync("knowledge.json", "utf8"));
} catch (error) {
  console.error("❌ Error loading knowledge.json:", error.message);
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Chat Response Logic
app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  for (let keyword in knowledge) {
    if (userMessage.includes(keyword)) {
      return res.json({ reply: knowledge[keyword] });
    }
  }

  // Default fallback response
  res.json({
    reply: knowledge["default"] ||
      "I'm not sure about that yet — try asking about services, pricing, careers or support 😊."
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 MeteoriQs Chatbot running on http://localhost:${PORT}`);
});


