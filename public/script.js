const chatBox = document.getElementById("chat-box");
const quickReplies = document.getElementById("quick-replies");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Add a message bubble
function addMessage(text, sender = "bot") {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

// Show typing indicator
function showTyping() {
  const div = document.createElement("div");
  div.classList.add("message", "bot", "typing");

  const dot1 = document.createElement("span");
  const dot2 = document.createElement("span");
  const dot3 = document.createElement("span");
  dot1.classList.add("typing-dot");
  dot2.classList.add("typing-dot");
  dot3.classList.add("typing-dot");

  div.appendChild(dot1);
  div.appendChild(dot2);
  div.appendChild(dot3);

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

function removeTyping(node) {
  if (node && node.parentNode) node.parentNode.removeChild(node);
}

// Quick reply buttons
function setQuickReplies(options = []) {
  quickReplies.innerHTML = "";
  options.forEach((label) => {
    const btn = document.createElement("button");
    btn.classList.add("quick-btn");
    btn.textContent = label;
    btn.onclick = () => {
      // user selection appears first
      addMessage(label, "user");
      setQuickReplies([]);
      sendToBot(label);
    };
    quickReplies.appendChild(btn);
  });
}

// Send message to backend
async function sendToBot(message) {
  const typingBubble = showTyping();

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    setTimeout(() => {
      removeTyping(typingBubble);
      addMessage(data.reply, "bot");

      // Show main options again after response
      setQuickReplies([
        "Services",
        "Pricing",
        "Sales",
        "About Us",
        "Contact",
        "Careers",
        "Support",
        "FAQ"
      ]);
    }, 700);
  } catch (err) {
    removeTyping(typingBubble);
    addMessage("Sorry, I'm having trouble responding right now.", "bot");
  }
}

// Handle manual input
function handleSend() {
  const text = input.value.trim();
  if (!text) return;

  // user message ALWAYS first
  addMessage(text, "user");
  input.value = "";
  setQuickReplies([]);
  sendToBot(text);
}

sendBtn.addEventListener("click", handleSend);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});

// Initial greeting
window.addEventListener("load", () => {
  addMessage("Hi 👋 I'm MeteoriQs Assistant. What would you like to know about?", "bot");
  setQuickReplies([
    "Services",
    "Pricing",
    "About Us",
    "Contact",
    "Careers",
    "Support",
    "Clients",
    "Projects"
  ]);
});


