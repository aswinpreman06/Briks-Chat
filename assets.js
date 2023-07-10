export const styles = `
    .widget__container * {
        box-sizing: border-box;
    }        

    h3, p, input {
        margin: 0;
        padding: 0;
    }

    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        height:600px;
        overflow: auto;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: black;
        border-radius: 10px;
        box-sizing: border-box;
      
    }


    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }

    .widget__hidden {
        transform: scale(0);
    }
    .button__container {
        border: none;
        background-color: #0f172a;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }

    .widget__container.hidden {
        max-height: 0px;
    }

    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #000;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }

    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }
   .chat-area{
    height:450px;
    overflow-y: auto;
    color:white;
    }

     .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        color:white;
        flex-direction: column;
        margin-left:110px;
        width:250px;
        height: auto;
        background-image: linear-gradient(80deg, #212121, #3b3b3b);
        word-wrap: break-word;
        overflow-wrap: break-word;
        letter-spacing:2px;
        padding:12px;
        border-radius:3px;
    }
    .welcome-message{
        margin-bottom: 1.5rem;
        display: flex;
        color:white;
        flex-direction: column;
        margin-left:110px;
        width:250px;
        height: auto;
        background-image: linear-gradient(80deg, #212121, #3b3b3b);
        word-wrap: break-word;
        overflow-wrap: break-word;
        letter-spacing:2px;
        padding:12px;
        border-radius:3px;
        animation: appearString 4s forwards;
    }
    @keyframes appearString {
        0% {
            left: -100%;
            /* Starting position */
            opacity: 0;
            /* Starting opacity */
        }
    
        100% {
            left: 0;
            /* Ending position (center of the container) */
            opacity: 1;
            /* Ending opacity */
        }
    }
    
    .icon-svg,.user-icon{
        margin-left: 200px; /* Adjust the margin as needed */
        width:24px;
        height:24px;
        border-radius:10px;
       
      }
     
    .user-prompt{
        margin-bottom: 1.5rem;
        display: flex;
        color:black;
        flex-direction: column;
        margin-left:10px;
        width:250px;
        height: auto;
        background: white;
        word-wrap: break-word;
        overflow-wrap: break-word;
        letter-spacing:2px;
        padding:12px;
        border-radius:3px;
    }

    .footer{
        position:relative;
        top:15px;
        
    }

    .sendPrompt{
        margin-left:15px;
        height:37px;
    }
    .send-input{
        width:270px;
        border:none;
        outline:none;
        border-radius:5px;
        background-color:#283046;
        color:white;
    }

    .send-input::placeholder{
          padding: 15px;
          color:white;
    }

    .send-btn{
        background:#76B947;
        padding:6px;
        width:45px;
        border-radius:5px;
        border:none;
        outline:none;
        color:white;
        cursor:pointer;
        height:37px;
    }
    .clear-btn{
        // background-color:#283046;
        background:transparent;
        padding:6px;
        width:45px;
        border-radius:5px;
        border:1px solid #283046;
        outline:none;
        color:white;
        cursor:pointer;
        height:37px;
    }
    .loading-typing{
        color: #3369f2;
        font-weight: 50;
        margin-left:350px;
    }
    .loading-typing:after {
        content: '.';
        font-size: 32px;
        font-weight: 500;
        animation: dots 1s steps(5, end) infinite;
    }
      
      @keyframes dots {
        0%, 20% {
          color: rgba(0,0,0,0);
          text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);}
        40% {
          color: #3369f2;
          text-shadow:
            .25em 0 0 rgba(0,0,0,0),
            .5em 0 0 rgba(0,0,0,0);}
        60% {
          text-shadow:
            .25em 0 0 #3369f2,
            .5em 0 0 rgba(0,0,0,0);}
        80%, 100% {
          text-shadow:
            .25em 0 0 #3369f2,
            .5em 0 0 #3369f2;}
        }

        
    
`;

export const MESSAGE_ICON = `
<i class="fa fa-wechat" style="font-size:30px;color:white"></i>
`;

export const CLOSE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;