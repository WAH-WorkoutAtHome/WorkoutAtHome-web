const Chatbot = {
  render() {
    return `
    <style>

      
      #chatContainer {
        padding: 50px;
        height: 500px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        font-family: 'Arial', sans-serif;
      }

      h1 {
        background-color: #0078d7;
        padding: 15px;
        border-radius: 10px;
        max-width: 100%;
        margin: 0 0 15px;
        font-size: 18px;
        color: #fff;
      }

      .chat-body {
      border-radius: 10px;
        flex: 1;
        padding: 15px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 15px;
        max-height: 100%;
        scroll-behavior: smooth;
        background-color: #6CF3E5;
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

      @media (max-width: 600px) {
        #chatContainer {
          padding: 20px;
        }
      }

      #inputContainer {
        gap: 15px;
        display: flex;
        align-items: center;
      }

      #prompt {
        flex: 1;
        border: none;
        padding: 15px;
        font-size: 14px;
        outline: none;
        border-radius: 8px;
      }

      #sendButton {
        background-color: #0078d7;
        color: white;
        border: none;
        padding: 15px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;
        border-radius: 8px;
      }

      #sendButton:hover {
        background-color: #005bb5;
      }

      #sendButton:active {
        background-color: #004a93;
      }
    </style>
    <div id="chatContainer">
    <div class="chat-body">
      <h1>WAH Bot</h1>
          <div id="chatBody" class="chat-body"></div>
          <div id="inputContainer">
            <input id="prompt" type="text" placeholder="Ketik pesan Anda..." />
            <button id="sendButton">Kirim</button>
          </div>
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

    const userMessage = document.createElement("div");
    userMessage.innerText = prompt;
    userMessage.className = "chat-message user-message";
    chatBody.appendChild(userMessage);

    const loadingMessage = document.createElement("div");
    loadingMessage.className = "chat-message loading-message";
    loadingMessage.innerHTML = `
      <span>Sedang mengetik...</span>
      <div class="dot"></div><div class="dot"></div><div class="dot"></div>
    `;
    chatBody.appendChild(loadingMessage);

    inputElement.value = "";

    try {
      const response = await fetch(
        "https://workoutathome.pemweb.cloud/chatbot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal menghubungi server. Coba lagi nanti.");
      }

      const data = await response.json();
      loadingMessage.remove();

      const botMessage = document.createElement("div");
      botMessage.innerHTML = data.response || "Tidak ada respons dari server.";
      botMessage.className = "chat-message bot-message";
      chatBody.appendChild(botMessage);

      chatBody.scrollTop = chatBody.scrollHeight;
    } catch (error) {
      loadingMessage.remove();
      const errorMessage = document.createElement("div");
      errorMessage.innerHTML = `<strong>Error:</strong> ${error.message}`;
      errorMessage.className = "chat-message error-message";
      chatBody.appendChild(errorMessage);
    }
  },
};

export default Chatbot;
