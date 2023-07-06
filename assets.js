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
}

    form {
        padding: 2rem 1rem 1.5rem;
    }

    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        color:white;
        flex-direction: column;
    
        width:250px;
        height: auto;
        background-image: linear-gradient(80deg, #212121, #3b3b3b);

        word-wrap: break-word;
        overflow-wrap: break-word;
        letter-spacing:2px;
        padding:12px;
        border-radius:3px;
    }
    .user-qs{
        margin-bottom: 1.5rem;
        display: flex;
        color:black;
        flex-direction: column;
    
        width:250px;
        height: auto;
        background: white;
        margin-left:85px;

        word-wrap: break-word;
        overflow-wrap: break-word;
        letter-spacing:2px;
        padding:12px;
        border-radius:3px;
    }

    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }

    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
    }

    .form__field input {
        height: 48px;
    }

    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }

    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        background-color: #000;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }

    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }
    .footer{
        position:relative;
        top:15px;
        
    }

    .send{
        margin-left:45px;
        height:37px;
    }
    .send-input{
        width:220px;
        border:none;
        outline:none;
        border-radius:5px;
        background-color:#283046;
        color:white;
    }

    .send-input::placeholder{
          padding: 5px;
          color:white;
    }

    .send-btn{
        background:#76B947;
        padding:6px;
        width:75px;
        border-radius:5px;
        border:none;
        outline:none;
        color:white;
        cursor:pointer;
    }
`;

export const MESSAGE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
`;

export const CLOSE_ICON = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;