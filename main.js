import {
  CLOSE_ICON,
  MESSAGE_ICON,
  styles
} from "./assets.js";

class MessageWidget {
  constructor(position = "bottom-right") {
    this.position = this.getPosition(position);
    this.open = false;
    this.initialize();
    this.injectStyles();
  }

  position = "";
  open = false;
  widgetContainer = null;




  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    let tenant_id = ''
    let gpt_data = ''
    let gpt_template = ''
    let api_key = ''

    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    /**
     * Create a button element and give it a class of button__container
     */
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    /**
     * Create a span element for the widget icon, give it a class of 'widget__icon', update it's innerHTML property to an icon which would serve as the widget icon.
     */
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = MESSAGE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    /**
     * Create a span element for the close icon, give it a class of 'widget__icon' and 'widget__hidden' which would be removed whenever the widget is closed, update it's innerHTML property to an icon which would serve as the widget icon during that state.
     */
    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    /**
     * Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
     */
    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    /**
     * Create a container for the widget and add the following classes:- "widget__hidden", "widget__container"
     */

    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");


    /**
     * Invoke the `createWidget()` method
     */
    getTenantDomain();
    this.createWidgetContent();
    /**
     * Append the widget's content and the button to the container
     */
    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
    const welcomeMessage = document.createElement("div");
    welcomeMessage.classList.add("welcome-message");
    const welcomeMessageValue = 'Hello 👋 How can I help you?';
    welcomeMessage.textContent = welcomeMessageValue

    const chatIcon = document.createElement('img');
    chatIcon.src = 'download.webp';
    chatIcon.classList.add("icon-svg");
    welcomeMessage.appendChild(chatIcon)


    document.getElementsByClassName('chat-area')[0].appendChild(welcomeMessage);
    document.getElementById('promptButton').addEventListener('click', function (event) {
      if (event.target.matches('#promptButton')) {
        sendPromptMessage();
      }
    });
    document.getElementById('clearButton').addEventListener('click', function (event) {
      if (event.target.matches('#clearButton')) {
        clearChat();
      }
    });

    //function for clearing  chat
    function clearChat() {
      const list = document.getElementsByClassName('chat-area')[0];
      while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
      }
      const welcomeMessage = document.createElement("div");
      welcomeMessage.classList.add("welcome-message");
      const welcomeMessageValue = 'Hello 👋 How can I help you?';
      welcomeMessage.textContent = welcomeMessageValue
      const chatIcon = document.createElement('img');
      chatIcon.src = 'download.webp';
      chatIcon.classList.add("icon-svg");
      welcomeMessage.appendChild(chatIcon)
      document.getElementsByClassName('chat-area')[0].appendChild(welcomeMessage);
    }

    //For sending prompt to ChatGPT
    function sendPromptMessage() {
      const Prompt = document.createElement("div");
      Prompt.classList.add("user-prompt");
      const PromptValue = document.getElementById('prompt-message').value;
      Prompt.textContent = PromptValue
      const userIcon = document.createElement('img');
      userIcon.src = 'user.png';
      userIcon.classList.add("icon-svg");
      userIcon.classList.add("user-icon");
      Prompt.appendChild(userIcon)
      document.getElementsByClassName('chat-area')[0].appendChild(Prompt);
      const loading = document.createElement("p");
      loading.classList.add("loading-typing");
      loading.id = 'loading';

      loading.textContent = ''
      document.getElementsByClassName('chat-area')[0].appendChild(loading);


      fetchDataFromGPT();

    }
     //Fetch tenant domain details
    async function getTenantDomain() {
      const url = window.location.href
      const hostname = new URL(url);
      var domain_name = hostname.hostname.replace('.cloudweb.app', '')
      var myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      var urlencoded = new URLSearchParams();
      urlencoded.append("domain_name", domain_name);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      const rawResponse = await fetch(

        "https://api.briks.store/api/webApp/getTenantIdByDomainName",
        requestOptions
      );

      const response = await rawResponse.json();
      if (response.status == true) {
        getTenantDetailsByID(response.data[0].tenant_id,response.data[0].api_key);
        api_key = response.data[0].api_key
      }


    }
   
    
    //Fetch tenant details
    async function getTenantDetailsByID(Id,key) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append('x-api-key', key);
      var urlencoded = new URLSearchParams();
      urlencoded.append("tenant_id", Id);
      urlencoded.append("user_type", "public_user");
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
      };
      const rawResponse = await fetch(

        "https://api.briks.store/api/app/getTenantDetailsById",
        requestOptions
      );
      const response = await rawResponse.json();
      tenant_id = response.data[0].tenant_id
      gpt_data = response.data[0].products_gpt_url
      ChatInstructions(Id,key);

    }

    //Fetch chat prompt template
    async function ChatInstructions(Id,key) {
      var myHeaders = new Headers();
      myHeaders.append('x-api-key',key);
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("tenant_id", Id);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
      };

      const rawResponse = await fetch(
        "https://api.briks.store/api/getChatInstructions",

        requestOptions
      );
      const response = await rawResponse.json();
      gpt_template = response.productsData

    }


    //Fetching response for prompt from ChatGPT
    async function fetchDataFromGPT() {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      myHeaders.append('x-api-key', api_key);
      var urlencoded = new URLSearchParams();
      urlencoded.append("tenant_id", tenant_id);
      urlencoded.append("user_id", null);
      urlencoded.append("product_gpt_url", gpt_data);
      urlencoded.append("question", document.getElementById('prompt-message').value);
      urlencoded.append("chat_id", 0);
      urlencoded.append("question_type", 'product');
      urlencoded.append("qatemplate", gpt_template);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
      };
      const rawResponse = await fetch(

        "https://api.briks.store/api/getResultThroughChatGPT",
        requestOptions
      );
      const response = await rawResponse.json();

      const ChatResponse = document.createElement("div");
      ChatResponse.classList.add("form__field");
      const ChatResponseValue = response.data.text;
      ChatResponse.textContent = ChatResponseValue
      const chatIcon = document.createElement('img');
      chatIcon.src = 'download.webp';
      chatIcon.classList.add("icon-svg");
      ChatResponse.appendChild(chatIcon)

      document.getElementsByClassName('chat-area')[0].appendChild(ChatResponse);
      document.getElementById('prompt-message').value = ''
      const loader = document.getElementById('loading')
      loader.remove();
    }

  }


  //Create chat content
  createWidgetContent() {
    this.widgetContainer.innerHTML = `
        <header class="widget__header">
            <h3>Welcome to ChatGPT</h3>
        </header>

        <div class='chat-area'></div>
        
       <div class='footer'>
           <input
           type="text"
           id="prompt-message"
           name="propmt"
           placeholder="Send a message"
           class='sendPrompt send-input'
       />
     
       <button class='clear-btn' id="clearButton"><i class="fa fa-refresh" id="clearButton"></i></button>
       <button class='send-button send-btn' id="promptButton"><i class="fa fa-send" id="promptButton"></i></button>
       </div>
    `;
  }


 /**
  * The function injects a set of styles into the document by creating a style tag and appending it to
  * the head of the document.
  */
  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");


    } else {
      // this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }
}



function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();