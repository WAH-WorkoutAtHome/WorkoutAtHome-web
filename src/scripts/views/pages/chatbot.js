const Chatbot = {
  render() {
    return `
    <style>
      #chatContainer {
        max-width: 600px;
        margin: 50px auto;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        font-family: 'Arial', sans-serif;
      }

      h1 {
        margin: 0;
        padding: 20px;
        text-align: center;
        background: #000;
        color: white;
        font-size: 1.8em;
        font-weight: bold;
      }

      .chat-body {
        flex: 1;
        padding: 15px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-height: 400px;
        background-color: #6CF3E5;
        scroll-behavior: smooth;
      }

      .chat-message {
        display: inline-block;
        padding: 10px 15px;
        border-radius: 10px;
        max-width: 80%;
        line-height: 1.5;
        word-wrap: break-word;
        font-size: 14px;
        animation: fadeIn 0.3s ease-in-out;
      }

      .user-message {
        align-self: flex-end;
        background-color: #0078d7;
        color: white;
        text-align: right;
      }

      .bot-message {
        align-self: flex-start;
        background-color: #f1f1f1;
        color: #333;
      }

      .bot-message p,
      .bot-message strong {
        margin: 0 0 5px;
      }

      .bot-message ul {
        padding-left: 20px;
        margin: 5px 0;
      }

      .bot-message ul li {
        margin-bottom: 5px;
      }

      .bot-message strong {
        font-weight: bold;
        color: #000;
      }

      .loading-message {
        display: flex;
        align-items: center;
        color: #888;
        font-style: italic;
        font-size: 14px;
        animation: typing 1.2s infinite;
      }

      .dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 5px;
        border-radius: 50%;
        background-color: #0078d7;
        animation: bounce 1s infinite;
      }

      .dot:nth-child(1) {
        animation-delay: 0s;
      }

      .dot:nth-child(2) {
        animation-delay: 0.2s;
      }

      .dot:nth-child(3) {
        animation-delay: 0.4s;
      }

      @keyframes bounce {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
        }
      }

      @keyframes typing {
        0%, 100% {
          opacity: 0.3;
        }
        50% {
          opacity: 1;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      #inputContainer {
        display: flex;
        border-top: 1px solid #ddd;
        align-items: center;
      }

      #prompt {
        flex: 1;
        border: none;
        padding: 15px;
        font-size: 14px;
        outline: none;
      }

      #sendButton {
        background-color: #0078d7;
        color: white;
        border: none;
        padding: 15px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;
      }

      #sendButton:hover {
        background-color: #005bb5;
      }

      #sendButton:active {
        background-color: #004a93;
      }
    </style>
    <div id="chatContainer">
      <h1>WAH Bot</h1>
      <div id="chatBody" class="chat-body"></div>
      <div id="inputContainer">
        <input id="prompt" type="text" placeholder="Ketik pesan Anda..." />
        <button id="sendButton">Kirim</button>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const sendButton = document.getElementById("sendButton");
    const promptInput = document.getElementById("prompt");

    sendButton.addEventListener("click", () => this.sendRequest());
    promptInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.sendRequest();
      }
    });
  },

  async sendRequest() {
    const inputElement = document.getElementById("prompt");
    const prompt = inputElement.value.trim();

    if (!prompt) {
      alert("Silakan masukkan pesan!");
      return;
    }

    const chatBody = document.getElementById("chatBody");

    // Tambahkan pesan pengguna ke chat body
    const userMessage = document.createElement("div");
    userMessage.innerText = prompt;
    userMessage.className = "chat-message user-message";
    chatBody.appendChild(userMessage);

    // Tampilkan pesan loading
    const loadingMessage = document.createElement("div");
    loadingMessage.className = "chat-message loading-message";
    loadingMessage.innerHTML = `
      <span>Sedang mengetik...</span>
      <div class="dot"></div><div class="dot"></div><div class="dot"></div>
    `;
    chatBody.appendChild(loadingMessage);

    inputElement.value = ""; // Kosongkan input

    try {
      const response = await fetch("http://localhost:3000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Gagal menghubungi server. Coba lagi nanti.");
      }

      const data = await response.json();
      loadingMessage.remove(); // Hapus pesan loading

      // Tambahkan pesan bot ke chat body
      const botMessage = document.createElement("div");
      botMessage.innerHTML = data.response || "Tidak ada respons dari server.";
      botMessage.className = "chat-message bot-message";
      chatBody.appendChild(botMessage);

      // Scroll ke bawah untuk melihat pesan terbaru
      chatBody.scrollTop = chatBody.scrollHeight;
    } catch (error) {
      loadingMessage.remove(); // Hapus pesan loading
      const errorMessage = document.createElement("div");
      errorMessage.innerHTML = `<strong>Error:</strong> ${error.message}`;
      errorMessage.className = "chat-message error-message";
      chatBody.appendChild(errorMessage);
    }
  },
};

export default Chatbot;
