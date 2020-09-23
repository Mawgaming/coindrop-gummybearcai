// TODO: add officialWebsite to the object properties

const paymentMethods = [
    {
        id: "payPal",
        displayName: "PayPal",
        category: 'app',
        iconSvg: {
            path: <path fill="#00457C" d="M6.908 24H3.804c-.664 0-1.086-.529-.936-1.18l.149-.674h2.071c.666 0 1.336-.533 1.482-1.182l1.064-4.592c.15-.648.816-1.18 1.48-1.18h.883c3.789 0 6.734-.779 8.84-2.34s3.16-3.6 3.16-6.135c0-1.125-.195-2.055-.588-2.789 0-.016-.016-.031-.016-.046l.135.075c.75.465 1.32 1.064 1.711 1.814.404.75.598 1.68.598 2.791 0 2.535-1.049 4.574-3.164 6.135-2.1 1.545-5.055 2.324-8.834 2.324h-.9c-.66 0-1.334.525-1.484 1.186L8.39 22.812c-.149.645-.81 1.17-1.47 1.17L6.908 24zm-2.677-2.695H1.126c-.663 0-1.084-.529-.936-1.18L4.563 1.182C4.714.529 5.378 0 6.044 0h6.465c1.395 0 2.609.098 3.648.289 1.035.189 1.92.519 2.684.99.736.465 1.322 1.072 1.697 1.818.389.748.584 1.68.584 2.797 0 2.535-1.051 4.574-3.164 6.119-2.1 1.561-5.056 2.326-8.836 2.326h-.883c-.66 0-1.328.524-1.478 1.169L5.7 20.097c-.149.646-.817 1.172-1.485 1.172l.016.036zm7.446-17.369h-1.014c-.666 0-1.332.529-1.48 1.178l-.93 4.02c-.15.648.27 1.179.93 1.179h.766c1.664 0 2.97-.343 3.9-1.021.929-.686 1.395-1.654 1.395-2.912 0-.83-.301-1.445-.9-1.84-.6-.404-1.5-.605-2.686-.605l.019.001z" />,
        },
    },
    {
        id: "venmo",
        displayName: "Venmo",
        category: 'app',
        iconSvg: {
            path: <path fill="#3D95CE" d="M3.94 9.72c.17.27.24.54.24.89 0 1.11-.95 2.55-1.72 3.57H.71L0 9.96l1.54-.15.37 3c.35-.56.78-1.45.78-2.06 0-.33-.06-.56-.15-.75l1.4-.28zm2 1.85c.28 0 1-.13 1-.53 0-.2-.14-.3-.3-.3-.29 0-.66.35-.7.83zm-.03.8c0 .5.27.7.64.7.4 0 .77-.1 1.27-.35l-.19 1.26c-.35.17-.89.28-1.42.28-1.33 0-1.81-.8-1.81-1.82 0-1.31.78-2.7 2.38-2.7.88 0 1.38.49 1.38 1.18 0 1.1-1.43 1.45-2.25 1.46zm6.69-1.67c0 .17-.03.4-.05.56l-.46 2.92h-1.5l.42-2.68.03-.3c0-.2-.12-.24-.26-.24-.2 0-.4.09-.52.15l-.48 3.07h-1.5l.68-4.37h1.3l.02.35c.31-.2.72-.43 1.29-.43.76 0 1.03.4 1.03.98zm4.45-.49c.43-.3.83-.48 1.4-.48.76 0 1.03.4 1.03.98a4 4 0 01-.05.55l-.46 2.92h-1.5l.43-2.73.02-.22c0-.22-.12-.27-.27-.27-.18 0-.37.08-.5.15l-.48 3.07h-1.5l.43-2.74.02-.21c0-.22-.12-.27-.27-.27-.2 0-.39.09-.52.15l-.47 3.06h-1.51l.69-4.36h1.28l.05.36c.3-.22.7-.44 1.24-.44.48 0 .78.2.94.48zm5.41 1.27c0-.35-.09-.6-.35-.6-.6 0-.72 1.05-.72 1.58 0 .41.11.66.38.66.56 0 .69-1.1.69-1.64zm-2.6.92c0-1.38.74-2.67 2.41-2.67 1.27 0 1.73.75 1.73 1.78 0 1.36-.72 2.77-2.44 2.77-1.27 0-1.7-.83-1.7-1.88z" />,
        },
    },
    {
        id: "cashApp",
        displayName: "CashApp",
        category: 'app',
        iconSvg: {
            path: <g>
                <path fill="#64dd17" d="M14 6h20a8 8 0 018 8v20a8 8 0 01-8 8H14a8 8 0 01-8-8V14a8 8 0 018-8z" />
                <path fill="#fafafa" d="M23.056 33.933c-.122 0-.245-.001-.37-.004-3.612-.088-5.98-2.312-6.781-3.198a.497.497 0 01.011-.68l1.664-1.876a.495.495 0 01.667-.05c.738.58 2.446 2.054 4.696 2.177 2.612.142 3.829-.601 3.986-1.736.149-1.075-.375-1.986-3.277-2.739-5.185-1.345-6.115-4.37-5.796-6.897.335-2.659 3.09-4.777 6.285-4.745 4.566.047 7.38 2.086 8.361 2.938.22.191.225.525.018.73l-1.581 1.786a.494.494 0 01-.617.068c-.799-.52-2.392-2.074-5.236-2.074-1.75 0-2.816.668-2.927 1.541-.154 1.22.661 2.274 3.155 2.837 5.527 1.247 6.457 4.467 5.87 7.068-.54 2.395-3.277 4.854-8.128 4.854z" />
                <path fill="#fafafa" d="M28.032 16.592l.839-3.99a.5.5 0 00-.489-.602h-3.065a.5.5 0 00-.489.397l-.843 4.011 4.047.184zM20.916 31l-.925 4.397a.5.5 0 00.49.603h3.065a.5.5 0 00.489-.397L25.003 31h-4.087z" />
                  </g>,
            viewBox: "0 0 48 48",
        },
    },
    {
        id: "zelle",
        displayName: "Zelle",
        category: 'app',
        iconSvg: {
            path: <g>
                <path fill="#6C16D4" d="M35,42H13c-3.866,0-7-3.134-7-7V13c0-3.866,3.134-7,7-7h22c3.866,0,7,3.134,7,7v22 C42,38.866,38.866,42,35,42z" />
                <path fill="#fff" d="M17.5,18.5h14c0.552,0,1-0.448,1-1V15c0-0.552-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1v2.5	C16.5,18.052,16.948,18.5,17.5,18.5z" />
                <path fill="#fff" d="M17,34.5h14.5c0.552,0,1-0.448,1-1V31c0-0.552-0.448-1-1-1H17c-0.552,0-1,0.448-1,1v2.5	C16,34.052,16.448,34.5,17,34.5z" />
                <path fill="#fff" d="M22.25,11v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,10.5,22.25,10.724,22.25,11z" />
                <path fill="#fff" d="M22.25,32v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,31.5,22.25,31.724,22.25,32z" />
                <path fill="#fff" d="M16.578,30.938H22l10.294-12.839c0.178-0.222,0.019-0.552-0.266-0.552H26.5L16.275,30.298	C16.065,30.553,16.247,30.938,16.578,30.938z" />
                  </g>,
            viewBox: "0 0 48 48",
        },
    },
    {
        id: "googlePay",
        displayName: "Google Pay",
        category: 'app',
        iconSvg: {
            path: <g>
                <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                  </g>,
            viewBox: "0 0 533.5 544.3",
        },
    },
    {
        id: "applePay",
        displayName: "Apple Pay",
        category: 'app',
        iconSvg: {
            path: <path fill="#000" d="M979.042 925.188c-17.954 41.477-39.206 79.657-63.828 114.759-33.563 47.853-61.044 80.976-82.222 99.37-32.83 30.192-68.006 45.654-105.672 46.533-27.041 0-59.652-7.694-97.611-23.303-38.085-15.536-73.084-23.23-105.086-23.23-33.563 0-69.56 7.694-108.061 23.23-38.561 15.609-69.625 23.743-93.376 24.55-36.12 1.538-72.123-14.364-108.06-47.78-22.938-20.006-51.627-54.302-85.997-102.888-36.875-51.883-67.191-112.047-90.942-180.639C12.751 781.703 0 709.96 0 640.504c0-79.562 17.192-148.183 51.627-205.687 27.063-46.19 63.066-82.625 108.127-109.373 45.06-26.748 93.749-40.378 146.182-41.25 28.69 0 66.312 8.874 113.066 26.315 46.622 17.5 76.557 26.374 89.682 26.374 9.812 0 43.068-10.376 99.443-31.064 53.313-19.185 98.307-27.129 135.168-24 99.883 8.062 174.923 47.436 224.828 118.372-89.33 54.126-133.52 129.936-132.64 227.188.806 75.751 28.287 138.788 82.295 188.84 24.476 23.23 51.81 41.183 82.222 53.934-6.595 19.127-13.557 37.447-20.958 55.035zM749.964 23.75c0 59.374-21.692 114.81-64.928 166.122-52.176 61-115.286 96.248-183.724 90.686a184.836 184.836 0 01-1.378-22.497c0-56.999 24.813-117.998 68.878-167.874 21.999-25.253 49.978-46.25 83.907-63 33.856-16.5 65.88-25.625 95.999-27.187.88 7.937 1.246 15.875 1.246 23.75z" />,
            viewBox: "0 0 1000 1187.198",
        },
    },
    {
        id: "facebookPay",
        displayName: "Facebook Pay",
        category: 'app',
        iconSvg: {
            path: <path fill="#4267B2" d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443V21.2c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188 4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25c0-12.15-9.85-22-22-22z" />,
            viewBox: "0 0 50 50",
        },
    },
    {
        id: "moneyButton",
        displayName: "Money Button",
        category: 'app',
        iconSvg: {
            path: <g fill="none">
                <path d="M40.585 0h.279C44.811 0 48 3.143 48 7.033v16.816C48 27.817 44.77 31 40.744 31s-7.255-3.183-7.255-7.15V7.032C33.449 3.143 36.639 0 40.585 0z" fill="#4772F6" />
                <path d="M35.72 23.804c0 2.758 2.243 4.982 5.024 4.982h.374c2.574 0 4.65-2.224 4.65-4.982 0-2.759-2.076-4.982-4.65-4.982h-.374c-2.781-.041-5.023 2.223-5.023 4.982z" fill="#FFF" />
                <path d="M7.256 0c4.026 0 7.256 3.183 7.256 7.15v16.7c0 3.967-3.23 7.15-7.256 7.15C3.229 31 0 27.778 0 23.85V7.15C0 3.184 3.23 0 7.256 0zM24 0c4.027 0 7.256 3.183 7.256 7.15v16.7c0 3.967-3.23 7.15-7.256 7.15-4.027 0-7.256-3.183-7.256-7.15V7.15C16.744 3.184 19.974 0 24 0z" fill="#4772F6" />
                  </g>,
            viewBox: "0 0 48 31",
        },
    },
    {
        id: "handCash",
        displayName: "HandCash",
        category: 'app',
        iconSvg: {
            path: <path data-name="Sustracción 1" d="M256 512A256.033 256.033 0 0142.87 114.139a257 257 0 01110.647-92.8L173 100.488l.426-.212A178 178 0 0084.368 299.7c19.446 79.035 89.624 134.846 170.661 135.718l18.509 75.988c-5.828.394-11.725.594-17.538.594zm103.954-21.987l-18.425-75.468a177.856 177.856 0 0093.746-154.469l-92.468 22.584a89.425 89.425 0 01-23.465 38.885 87.245 87.245 0 01-40.877 22.255 89.4 89.4 0 01-21.287 2.589 88.983 88.983 0 1135.184-170.674 89.529 89.529 0 0129.143 20.22l92.468-22.584a178.059 178.059 0 00-155.11-93.741l.43-.212L239.874.5C245.252.167 250.679 0 256 0a256.038 256.038 0 01213.573 397.2 257.04 257.04 0 01-109.61 92.809z" fill="#38cb7c"/>,
            viewBox: "0 0 512 512",
        },
    },
    {
        id: "metalPay",
        displayName: "Metal Pay",
        category: 'app',
        iconSvg: {
            path: <g fill="#000">
                <path d="M546.05 537.92h67.34v925.32h-67.34zM808.76 692.15h71.66v604.12h-71.66zM1105.19 852.16h67.8v291.04h-67.8zM1386.5 536.76h67.45v925.32h-67.45z" />
                  </g>,
            viewBox: "0 0 2000 2000",
        },
    },
    {
        id: "bitcoinBTC",
        displayName: "Bitcoin",
        category: 'cryptocurrency',
        iconSvg: {
            path: <path fill="#F7931A" d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />,
        },
    },
    {
        id: "bitcoinBCH",
        displayName: "Bitcoin Cash",
        category: 'cryptocurrency',
        iconSvg: {
            path: <path fill="#5DCB79" d="m 620.266,309.3 -0.165,-0.307 -0.028,-0.051 c -0.1,-0.309 -0.175,-0.632 -0.289,-0.966 l -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.028,-0.051 a 60.65,60.65 0 0 0 -19.831,-29.671 l -0.014,-0.026 c -0.279,-0.213 -0.572,-0.451 -0.852,-0.663 l -0.386,-0.287 -0.279,-0.212 -0.12,-0.1 -0.266,-0.187 -0.12,-0.1 -0.266,-0.187 -0.12,-0.1 -0.279,-0.212 -0.146,-0.087 -0.279,-0.212 -0.146,-0.087 -0.3,-0.2 -0.146,-0.087 -0.177,-0.268 -0.159,-0.112 -0.3,-0.2 -0.159,-0.112 -0.305,-0.2 -0.159,-0.112 -0.3,-0.2 -0.159,-0.112 -0.319,-0.224 -0.159,-0.112 -0.344,-0.211 -0.159,-0.112 -0.344,-0.211 -0.159,-0.112 -0.344,-0.211 -0.159,-0.112 -0.344,-0.211 -0.185,-0.1 -0.344,-0.211 -0.185,-0.1 -0.37,-0.2 -0.185,-0.1 -0.384,-0.222 -0.185,-0.1 -0.384,-0.222 -0.185,-0.1 -0.384,-0.222 -0.2,-0.124 -0.384,-0.222 -0.2,-0.124 -0.409,-0.209 -0.2,-0.124 -0.409,-0.209 -0.277,-0.148 -0.014,-0.026 c -0.2,-0.124 -0.409,-0.209 -0.608,-0.333 a 84.659,84.659 0 0 0 -27.11,-8.566 75.8,75.8 0 0 0 7.263,-9.122 l 0.348,-0.517 0.026,-0.014 0.161,-0.252 0.211,-0.344 0.112,-0.159 0.211,-0.344 0.112,-0.159 0.211,-0.344 0.112,-0.159 0.211,-0.344 0.112,-0.159 0.211,-0.344 0.112,-0.159 0.185,-0.331 0.112,-0.159 0.185,-0.331 0.087,-0.146 0.185,-0.331 0.087,-0.146 0.185,-0.331 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.172,-0.291 0.087,-0.146 0.173,-0.291 0.087,-0.146 0.148,-0.277 0.087,-0.146 0.148,-0.277 0.061,-0.132 0.148,-0.277 0.061,-0.132 0.148,-0.277 0.061,-0.132 0.148,-0.277 0.061,-0.132 0.122,-0.264 0.061,-0.132 0.122,-0.264 0.061,-0.132 0.122,-0.264 0.061,-0.132 0.134,-0.3 0.183,-0.4 c 0.134,-0.3 0.242,-0.592 0.376,-0.895 l 0.026,-0.014 a 53.867,53.867 0 0 0 2.737,-31.626 l -0.014,-0.026 -0.028,-0.051 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 c -0.061,-0.3 -0.122,-0.594 -0.208,-0.878 v -0.065 l -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 0.014,0.026 -0.124,-0.23 c -0.09,-0.413 -0.181,-0.826 -0.311,-1.251 -0.09,-0.413 -0.22,-0.838 -0.336,-1.238 l -0.151,-0.281 -0.028,-0.051 c -0.087,-0.283 -0.173,-0.567 -0.26,-0.85 l -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.013,-0.026 a 53.88,53.88 0 0 0 -17.641,-26.4 l -0.013,-0.026 c -0.24,-0.2 -0.506,-0.388 -0.746,-0.588 l -0.332,-0.25 -0.266,-0.187 -0.12,-0.1 -0.226,-0.175 -0.12,-0.1 -0.226,-0.175 -0.12,-0.1 -0.252,-0.161 -0.12,-0.1 -0.266,-0.187 -0.12,-0.1 -0.266,-0.187 -0.12,-0.1 -0.266,-0.187 -0.146,-0.087 -0.266,-0.187 -0.146,-0.087 -0.266,-0.187 -0.146,-0.087 -0.291,-0.173 -0.146,-0.087 -0.291,-0.173 -0.146,-0.087 -0.291,-0.173 -0.146,-0.087 -0.291,-0.173 -0.146,-0.087 -0.305,-0.2 -0.146,-0.087 -0.305,-0.2 -0.146,-0.087 -0.331,-0.185 -0.146,-0.087 -0.33,-0.185 -0.159,-0.112 -0.331,-0.185 -0.159,-0.112 -0.33,-0.185 -0.159,-0.112 -0.344,-0.211 -0.185,-0.1 -0.344,-0.211 -0.185,-0.1 -0.37,-0.2 -0.185,-0.1 -0.37,-0.2 -0.264,-0.122 -0.014,-0.026 -0.555,-0.3 c -16.214,-8.427 -36.813,-10.964 -57.538,-5.647 l -5.391,1.384 -13.636,-53.1 -31.6,8.1 13.591,52.89 -25.286,6.518 -13.6,-52.721 -31.6,8.1 13.591,52.89 -65.167,16.769 8.671,33.7 26.258,-6.744 a 16.25,16.25 0 0 1 19.8,11.711 v 0 L 419.6,384.022 a 10.857,10.857 0 0 1 -7.8,13.206 l -23.008,5.919 1.352,40.08 65.09,-16.727 13.766,52.794 31.584,-8.127 -13.6,-52.916 25.278,-6.481 13.605,52.915 31.584,-8.127 -13.651,-53.122 c 5.352,-1.4 9.956,-2.588 13.141,-3.412 23.356,-6.007 42.243,-19.7 53.672,-36.775 l 0.386,-0.57 0.026,-0.014 0.187,-0.266 0.248,-0.4 0.124,-0.2 0.248,-0.4 0.124,-0.2 0.222,-0.384 0.124,-0.2 0.222,-0.384 0.1,-0.185 0.222,-0.384 0.1,-0.185 0.222,-0.384 0.1,-0.185 0.2,-0.37 0.1,-0.185 0.2,-0.37 0.1,-0.185 0.211,-0.344 0.1,-0.185 0.211,-0.344 0.1,-0.185 0.185,-0.331 0.1,-0.185 0.185,-0.33 0.1,-0.185 0.185,-0.33 0.073,-0.171 0.185,-0.33 0.073,-0.171 0.159,-0.317 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.159,-0.317 0.087,-0.146 0.134,-0.3 0.087,-0.146 0.134,-0.3 0.061,-0.132 0.146,-0.342 0.2,-0.435 c 0.146,-0.342 0.3,-0.659 0.425,-0.988 l 0.012,-0.039 a 60.716,60.716 0 0 0 3.086,-35.574 l -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 c -0.075,-0.323 -0.149,-0.645 -0.224,-0.968 v -0.065 l -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.014,-0.026 -0.055,-0.1 c -0.118,-0.464 -0.21,-0.942 -0.354,-1.393 -0.048,-0.269 -0.115,-0.761 -0.144,-1.301 z M 434.605,214.429 c 5.391,-1.384 27.681,-6.982 35.031,-8.893 11.685,-2.991 23.2,-1.83 32.19,2.5 l 0.3,0.134 v 0 l 0.132,0.061 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.159,0.112 0.092,0.049 0.159,0.112 0.092,0.049 0.159,0.112 0.092,0.049 0.146,0.087 0.092,0.049 0.146,0.087 0.092,0.049 0.146,0.087 0.092,0.049 0.146,0.087 0.092,0.049 0.146,0.087 0.067,0.063 0.146,0.087 0.053,0.037 0.146,0.087 0.053,0.037 0.146,0.087 0.053,0.037 0.146,0.087 0.053,0.037 0.12,0.1 0.053,0.037 0.146,0.087 0.2,0.124 c 0.146,0.087 0.279,0.213 0.425,0.3 v 0 a 27.251,27.251 0 0 1 9.658,13.836 v 0 l 0.041,0.077 c 0.043,0.142 0.1,0.309 0.143,0.451 l 0.014,0.026 0.083,0.153 c 0.059,0.232 0.13,0.425 0.189,0.657 a 3.953,3.953 0 0 1 0.126,0.724 l 0.083,0.153 0.014,0.026 a 2.2,2.2 0 0 0 0.118,0.464 l 0.041,0.077 v 0 a 27.341,27.341 0 0 1 -1.8,16.768 v 0 l -0.207,0.474 -0.11,0.224 -0.087,0.146 -0.024,0.079 -0.061,0.132 -0.024,0.079 -0.087,0.146 -0.024,0.079 -0.087,0.146 -0.024,0.079 -0.087,0.146 -0.024,0.079 -0.087,0.146 -0.024,0.079 -0.087,0.146 -0.024,0.079 -0.087,0.146 -0.049,0.092 -0.087,0.146 -0.049,0.092 -0.087,0.146 -0.049,0.092 -0.087,0.146 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.138,0.173 -0.049,0.092 -0.138,0.173 -0.049,0.092 -0.138,0.173 -0.049,0.092 -0.138,0.173 -0.1,0.12 v 0 l -0.187,0.266 c -5.811,8.142 -15.334,14.72 -27.019,17.711 -7.364,1.886 -29.6,7.716 -34.986,9.1 z m 123.512,108.723 0.083,0.153 0.014,0.026 c 0.031,0.181 0.075,0.323 0.106,0.5 v 0 l 0.014,0.026 v 0 l 0.014,0.026 0.014,0.026 0.014,0.026 v 0 a 28.087,28.087 0 0 1 -2.541,18.324 v 0 l -0.283,0.515 -0.136,0.238 -0.1,0.185 -0.049,0.092 -0.087,0.146 -0.049,0.092 -0.087,0.146 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.112,0.159 -0.049,0.092 -0.138,0.173 -0.049,0.092 -0.138,0.173 -0.049,0.092 -0.124,0.2 -0.049,0.092 -0.124,0.2 -0.049,0.092 -0.124,0.2 -0.075,0.106 -0.124,0.2 -0.075,0.106 -0.15,0.212 -0.075,0.106 -0.15,0.212 -0.075,0.106 -0.15,0.212 -0.075,0.106 -0.151,0.212 -0.075,0.106 -0.15,0.212 -0.126,0.134 v 0 l -0.238,0.293 c -7.057,9.012 -18.44,16.425 -32.265,19.974 -8.719,2.251 -35.063,9.141 -41.473,10.777 L 459.34,310.627 c 6.4,-1.662 32.814,-8.294 41.532,-10.545 13.826,-3.549 27.4,-2.542 37.891,1.938 l 0.342,0.146 v 0 l 0.171,0.073 0.25,0.1 0.118,0.035 0.224,0.11 0.118,0.035 0.224,0.11 0.118,0.035 0.224,0.11 0.092,0.049 0.224,0.11 0.092,0.049 0.224,0.11 0.092,0.049 0.224,0.11 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.185,0.1 0.092,0.049 0.159,0.112 0.092,0.049 0.159,0.112 0.092,0.049 0.159,0.112 0.092,0.049 0.159,0.112 0.092,0.049 0.159,0.112 0.092,0.049 0.146,0.087 0.092,0.049 0.159,0.112 0.212,0.15 c 0.159,0.112 0.344,0.211 0.5,0.323 v 0 a 28.172,28.172 0 0 1 11.053,14.834 v 0 l 0.055,0.1 c 0.057,0.167 0.1,0.309 0.157,0.476 l 0.014,0.026 0.083,0.153 c 0.059,0.232 0.118,0.464 0.191,0.722 0.129,0.057 0.15,0.342 0.109,0.694 z m 219.79801,-26.18899 a 296.905,296.905 0 0 1 -296.905,296.905 296.905,296.905 0 0 1 -296.905,-296.905 A 296.905,296.905 0 0 1 481.01001,0.05801392 296.905,296.905 0 0 1 777.91501,296.96301 M 118.4,297.107 c 0,122.9 61.1,231.5 154.6,297.106 H 0 V 0 H 273.006 C 179.5,65.6 118.4,174.2 118.4,297.107 Z m 570.915,297.206 c 93.5,-65.6 154.6,-174.2 154.6,-297.106 C 843.915,174.301 782.817,65.6 689.315,0 h 272.7 v 594.313 z" id="path41" />,
            viewBox: "0 0 962.02 594.313",
        },
    },
    {
        id: "bitcoinBSV",
        displayName: "Bitcoin SV",
        category: 'cryptocurrency',
        iconSvg: {
            path: <path fill="#EAB41E" d="m 1286.59,964.23 c 59.6,-40.89 100.49,-86.91 100.49,-173.72 0,-137.88 -137.15,-202.56 -220.65,-210.77 -6.79,-0.74 -25.78,-1.08 -25.78,-1.08 l 0.17,-131.91 -135.8,0.33 0.33,131.92 -91,-0.25 0.24,-131.42 -138.8,0.08 -0.16,130.76 c -24.38,0.58 -170.73,0.42 -170.73,0.42 v 116.74 c 0,0 37,0 47.6,0.16 45.85,-0.08 66.5,28.94 66.5,49.09 l 0.07,7.3 v 503.46 c -0.66,17.83 -14.92,31.75 -30.76,32.58 -20.8,0.92 -51.73,0.24 -51.73,0.24 l -26.7,132.35 166.41,0.16 -0.09,132.42 h 138.44 l -0.24,-132.58 h 91 l -0.16,132.83 h 135.63 l 0.07,-132.08 c 0,0 7.47,-0.26 10,-0.26 156.55,0 293,-92.7 295.1,-242.69 1.74,-122.89 -103.49,-193.94 -159.45,-214.08 z M 914.31,904.68 V 704.45 c 18.57,0.08 87.07,0.25 127.94,0.25 3.86,0 7,0.68 10.67,0.85 55.61,2.7 90.25,24.79 108.84,51.37 12.63,18.07 18.27,37.9 18.27,54.65 0,15.77 -4.23,32.09 -7,39.94 a 101.38,101.38 0 0 1 -17,30.86 c -9.62,11.79 -15.15,15.74 -21.21,20 -20.76,14.57 -49.86,26 -91.77,28 -0.55,0 -126.73,0.33 -128.72,0.24 z M 1220.7,1202 a 109.47,109.47 0 0 1 -18.43,33.34 c -10.39,12.73 -16.37,17 -22.91,21.6 -22.44,15.75 -53.89,28.12 -99.17,30.3 -0.6,0 -163.73,0.36 -165.88,0.26 V 1043 c 20.07,0.09 120.86,0.27 165,0.27 4.17,0 7.55,0.73 11.52,0.92 60.11,2.92 97.54,26.79 117.63,55.52 13.64,19.52 19.75,41 19.75,59.06 0.03,17.05 -4.54,34.7 -7.51,43.23 z m 776.09,-283.17 c 48.64,616.13 -461.8,1126.57 -1078,1078 C 434.06,1958.6 41.37,1565.83 3.2,1081.12 -45.32,464.91 465.1,-45.43 1081.19,3.21 c 484.68,38.27 877.33,430.94 915.6,915.62 z" id="path10" />,
            viewBox: "0 0 2000 2000",
        },
    },
    {
        id: "litecoin",
        displayName: "Litecoin",
        category: 'cryptocurrency',
        iconSvg: {
            path: <path fill="#345d9d" d="m 41.3,0 a 41.3,41.3 0 1 0 41.3,41.3 v 0 A 41.18,41.18 0 0 0 41.54,0 Z M 42,42.7 37.7,57.2 h 23 a 1.16,1.16 0 0 1 1.2,1.12 v 0.38 l -2,6.9 a 1.49,1.49 0 0 1 -1.5,1.1 H 23.2 l 5.9,-20.1 -6.6,2 1.5,-4.6 6.6,-2 8.3,-28.2 a 1.51,1.51 0 0 1 1.5,-1.1 h 8.9 a 1.16,1.16 0 0 1 1.2,1.12 v 0.38 l -7,23.8 6.6,-2 -1.4,4.8 z M 78.130001,41.299999 A 36.830002,36.830002 0 0 1 41.299999,78.130001 36.830002,36.830002 0 0 1 4.4699974,41.299999 36.830002,36.830002 0 0 1 41.299999,4.4699974 36.830002,36.830002 0 0 1 78.130001,41.299999" id="path6" />,
            viewBox: "0 0 85 85",
        },
    },
    {
        id: "monero",
        displayName: "Monero",
        category: 'cryptocurrency',
        iconSvg: {
            path:
                <g>
                    <path d="M4128,2249.81C4128,3287,3287.26,4127.86,2250,4127.86S372,3287,372,2249.81,1212.76,371.75,2250,371.75,4128,1212.54,4128,2249.81Z" transform="translate(-371.96 -371.75)" style={{fill: '#FFF'}} />
                    <path id="_149931032" data-name=" 149931032" d="M2250,371.75c-1036.89,0-1879.12,842.06-1877.8,1878,0.26,207.26,33.31,406.63,95.34,593.12h561.88V1263L2250,2483.57,3470.52,1263v1579.9h562c62.12-186.48,95-385.85,95.37-593.12C4129.66,1212.76,3287,372,2250,372Z" transform="translate(-371.96 -371.75)" style={{fill: '#f26822'}} />
                    <path id="_149931160" data-name=" 149931160" d="M1969.3,2764.17l-532.67-532.7v994.14H1029.38l-384.29.07c329.63,540.8,925.35,902.56,1604.91,902.56S3525.31,3766.4,3855,3225.6H3063.25V2231.47l-532.7,532.7-280.61,280.61-280.62-280.61h0Z" transform="translate(-371.96 -371.75)" style={{fill: '#4d4d4d'}} />
                </g>,
            viewBox: "0 0 3756.09 3756.49",
        },
    },
    {
        id: "zcash",
        displayName: "Zcash",
        category: 'cryptocurrency',
        iconSvg: {
            path: <g>
                <path
                    fill="#F7C551"
                    id="path86"
                    d="M1263.05,2297.61c-569.6,0-1034.57-465.43-1034.57-1034.56,0-569.6,465.44-1034.57,1034.57-1034.57,569.6,0,1034.56,465.44,1034.56,1034.57C2297.61,1832.65,1832.65,2297.61,1263.05,2297.61Z"
                    className="cls-1"
                />
                <path
                    fill="#000"
                    id="path88"
                    d="M1250,2500C562.5,2500,0,1937.5,0,1250S562.5,0,1250,0,2500,562.5,2500,1250,1937.5,2500,1250,2500Zm0-2222.06c-534.56,0-972.06,437.5-972.06,972.06s437.5,972.06,972.06,972.06,972.06-437.5,972.06-972.06S1784.56,277.94,1250,277.94Z"
                />
                <path
                    fill="#000"
                    id="path90"
                    d="M1221.05,1588.59h541.67v270.84h-319.6v229.16H1165.18V1866.53H831.85c0-90.44-13.73-180.4,7.1-263.73,7.1-41.67,55.4-83.34,90.43-125,104.17-125,208.34-250,319.61-375,41.66-48.77,83.33-90.44,132.1-145.83H860.26V686.13h305.39V457h270.84V679h333.33c0,90.43,13.73,180.4-7.1,263.73-7.1,41.67-55.4,83.33-90.44,125-104.16,125-208.33,250-319.6,375C1311,1491.53,1269.35,1539.82,1221.05,1588.59Z"
                />
                  </g>,
            viewBox: "0 0 2500 2500",
        },
    },
    {
        id: "dash",
        displayName: "Dash",
        category: 'cryptocurrency',
        iconSvg: {
            path: <g fill="#008DE4" id="Layer_2" dataname="Layer 2">
                <g id="Layer_1-2" dataname="Layer 1">
                    <path className="cls-1" d="M336.25 0h-186.9l-15.5 86.6 168.7.2c83.1 0 107.6 30.2 106.9 80.2-.4 25.6-11.5 69-16.3 83.1-12.8 37.5-39.1 80.2-137.7 80.1l-164-.1L76 416.8h186.5c65.8 0 93.7-7.7 123.4-21.3 65.7-30.5 104.8-95.3 120.5-179.9C529.65 89.6 500.65 0 336.25 0" />
                    <path className="cls-1" d="M68.7 164.9c-49 0-56 31.9-60.6 51.2C2 241.3 0 251.6 0 251.6h191.4c49 0 56-31.9 60.6-51.2 6.1-25.2 8.1-35.5 8.1-35.5z" />
                </g>
                  </g>,
            viewBox: "0 0 513.4 416.8",
        },
    },
    {
        id: "tezos",
        displayName: "Tezos",
        category: 'cryptocurrency',
        iconSvg: {
            path: <path fill="#2C7DF7" d="M755.68,1593q-170.51,0-248.91-82.14a253.6,253.6,0,0,1-78.15-177,117.39,117.39,0,0,1,13.69-58.5A101.21,101.21,0,0,1,479.64,1238a130.22,130.22,0,0,1,116.24,0A99.55,99.55,0,0,1,633,1275.36a115,115,0,0,1,14.18,58.5,111.73,111.73,0,0,1-19.91,68.45,92.78,92.78,0,0,1-47.31,34.62,129.18,129.18,0,0,0,74.67,46.55,370,370,0,0,0,101.8,14.68,226.91,226.91,0,0,0,128.19-38.33,224,224,0,0,0,83.63-113.25,492,492,0,0,0,27.38-169.5,465.07,465.07,0,0,0-29.87-176.23,217.54,217.54,0,0,0-86.37-109.52,229.68,229.68,0,0,0-124.43-35.59,236.75,236.75,0,0,0-107.78,36.59L567.26,932.4V892.33L926.43,410.5H428.62v500A178.9,178.9,0,0,0,456,1012.8a94.34,94.34,0,0,0,83.63,40.07,139.85,139.85,0,0,0,82.63-29.12,298.38,298.38,0,0,0,69.2-71.19,24.86,24.86,0,0,1,9-11.94,18.4,18.4,0,0,1,12-4.48,41.55,41.55,0,0,1,23.4,9.95,49.82,49.82,0,0,1,12.69,33.85,197.86,197.86,0,0,1-4.48,24.89,241,241,0,0,1-85.38,106,211.78,211.78,0,0,1-119.76,36.38q-161.67,0-224-63.72A238.67,238.67,0,0,1,253.2,909.25V410.5H0V317.6H254.38V105.78L196.14,47.5V0h169l63.48,32.86V317.6l657.6-2,65.47,65.71L748.46,786.5a271,271,0,0,1,76.16-18.42A330.1,330.1,0,0,1,972,810.15a302.7,302.7,0,0,1,126.95,113.29,399.78,399.78,0,0,1,57.25,136.65,575.65,575.65,0,0,1,13.69,117,489.39,489.39,0,0,1-49.78,216.79,317.92,317.92,0,0,1-149.35,149.35A483.27,483.27,0,0,1,755.68,1593Z" />,
            viewBox: "0 0 1169.87 1593",
        },
    },
    {
        id: "dogecoin",
        displayName: "Dogecoin",
        category: 'cryptocurrency',
        iconSvg: {
            path: <g fill="#c2a633">
                <path d="M1024 659H881.12v281.69h224.79v117.94H881.12v281.67H1031c38.51 0 316.16 4.35 315.73-327.72S1077.44 659 1024 659z" />
                <path d="M1000 0C447.71 0 0 447.71 0 1000s447.71 1000 1000 1000 1000-447.71 1000-1000S1552.29 0 1000 0zm39.29 1540.1H677.14v-481.46H549.48V940.7h127.65V459.21h310.82c73.53 0 560.56-15.27 560.56 549.48 0 574.09-509.21 531.41-509.21 531.41z" />
                  </g>,
            viewBox: "0 0 2000 2000",
        },
    },
    {
        id: "ethereum",
        displayName: "Ethereum",
        category: 'cryptocurrency',
        iconSvg: {
            path: <g fillRule="nonzero">
                <path fill="#343434" d="M392.07 0l-8.57 29.11v844.63l8.57 8.55 392.06-231.75z" />
                <path fill="#8C8C8C" d="M392.07 0L0 650.54l392.07 231.75V472.33z" />
                <path fill="#3C3C3B" d="M392.07 956.52l-4.83 5.89v300.87l4.83 14.1 392.3-552.49z" />
                <path fill="#8C8C8C" d="M392.07 1277.38V956.52L0 724.89z" />
                <path fill="#141414" d="M392.07 882.29l392.06-231.75-392.06-178.21z" />
                <path fill="#393939" d="M0 650.54l392.07 231.75V472.33z" />
                  </g>,
            viewBox: "0 0 784.37 1277.39",
        },
    },
    {
        id: "cardano",
        displayName: "Cardano",
        category: 'cryptocurrency',
        iconSvg: {
            path: <path fill="#0033AD" d="M1219.33,6.84c54.49-28.41,121,37.5,92,91.94-16.81,44.37-80.56,56.17-113.12,22.35C1163.75,88.66,1175,24.5,1219.33,6.84M633.26,70c33.1-13.63,75,16.7,71.62,52.78,3.51,39.16-44.37,68-78.11,49.38-44.7-17.31-39.59-89.88,6.49-102.15M1833.59,173.26c-51.73-6.25-59.91-87.57-10.11-104,38.63-18.84,74.06,16.49,79.71,53.1-8.1,31.26-34.28,59.89-69.6,50.85m-1067,146.19c55.34-35,134.3,17.12,125.79,81.4-2.87,64.9-89.08,102.5-137.71,58.62-47-34.46-39.9-113.53,11.92-140m844.76,37.14C1636.06,293,1736.1,291,1764.2,353c27.77,48.2-6.39,107.89-55.87,124.27-65.55,12.24-127.81-58.62-96.95-120.66M1148.75,473.64c-0.54-54.69,49.27-95.44,101.25-99.16,34.47,6.91,72.05,21.6,86.84,56.39,27.56,48,3.09,114.06-46.71,136.09-22.77,12.76-49.7,8-74.5,6.49-37.91-18.61-69.84-55.11-66.87-99.8M277.19,553.32c50.55-31.08,118.75,25.64,99.61,80.55-10.54,47.5-74.39,66.82-110.89,36.5-39-28.41-32.79-96.73,11.28-117.05m1871.56-.1c42.89-33.3,113.66,4.9,108.55,59,2.88,49.38-58.31,86.61-100.89,61.19-46.89-21.07-51.67-93.21-7.66-120.24m-754.9,98.31c70.77-25.42,154.84,5,195.18,68.1,53.21,77.14,24.9,194.61-57.68,238.87-85.56,52.35-210.5,8-242.1-87.57-35.88-85.54,16.39-192.59,104.6-219.4M978.6,659.95c78.44-37,184-6,221.89,74.27,44.59,78.1,10.11,186.85-69.6,227.17-79.81,45.33-192.41,11-231-72.89C856.54,807.42,895,697.29,978.6,659.95M562.81,802.1c6-50.54,53.64-83.42,101.74-86.83,51.83,6.25,93.23,46.5,98.86,99-3.4,51.92-43.53,102.68-98.55,102.36-60.54,5.21-113.61-55-102.05-114.49m1228.1-75.84c62.15-36.18,148.45,16.49,145.69,87.89,4.26,75.65-91.25,129-153.14,84.59-64.29-36.95-59.28-141,7.45-172.47M809.61,992.89c72.69-20,155.8,14.26,191.45,81.07,39,67.25,23.09,160.67-37.56,210-77.79,72.35-221.25,43.3-262.65-55.44-47.57-90.51,10.21-211.81,108.76-235.64m787.61-.37c70.66-20.21,153.67,7,191.66,71.4,50.23,73.63,26.25,183.44-48.52,230.9-78.33,55.11-199.65,26.17-242.75-60-52.25-89.14.33-215.11,99.61-242.3m-1255.13,84c62.79-23.75,132.39,45.54,106.95,107.79C433.51,1241,353.59,1262,312.3,1220.16c-48.31-39.26-30.42-126.62,29.8-143.65M2044,1166.85c-1.81-52,36.25-98.1,89.6-101,43,6.81,84.81,41.5,81.41,88.31,3.94,61.83-70.56,103.85-123.24,74.8-24.69-12.55-37.35-37.87-47.77-62.14M33.38,1107c37.77-16.49,84.5,16.25,75.88,58.2-2,47.5-72.15,65.76-97.91,26.07C-11.42,1163.76,2.2,1121.26,33.38,1107Zm2381.79-1c26.6-18.94,69.28-5.33,79.81,25.75,17.88,33.94-14.9,80.44-53.1,74.7-53.63,4.89-71-76.84-26.71-100.45m-1400.37,228c99.4-25.85,206.25,57,206.88,159.39,6.49,103.42-98.75,195.14-200.5,171.25-78.65-12.66-140.36-88.42-137.81-167.9-0.21-76,57.15-146.66,131.44-162.74m393.65-.21c100.89-28.2,210.92,56.17,209.32,160.89,5.33,101.51-96.63,190.14-196.25,170-93.75-12.12-162.92-115.12-136.75-206.1,13.21-60.62,63.86-109.92,123.68-124.79m-759,63c69.81-11.91,135.26,66,106.95,132.26-20.65,70.64-123.45,89.8-168.9,32.1-53.31-55.41-13.51-156.71,61.95-164.36M1803.89,1400c62.25-26.07,138.66,27.77,133.87,95.34,2.5,74.38-91.84,125.66-152.71,82.25-69-39-56.4-153.67,18.84-177.59m322.68,323.65c-24.37-45.44,19.9-105.66,70.35-97.25,25.11-.42,42.68,19.36,58.75,36,3.3,26.93,8.84,59-13.51,79.8-30.35,38.41-99.1,27.45-115.59-18.51M277,1639.06c47.15-31.39,115,15.42,104.4,70.55-5.64,48.75-67,76.61-107.5,49-43.41-25.11-41.81-96.61,3.1-119.5m931.5,102.05c61.73-27.24,140.36,26.5,134.51,94.49,4.58,75.12-92.69,127.15-153,82-67-38.74-55.86-152.7,18.53-176.52M777,1841.76c52.57-27.66,123.13,20.11,118.34,79,1.6,48.31-45.55,89.49-93.23,82.35-39.49-.85-65.24-36.25-77.9-69.91,0.65-36.69,15.75-77.55,52.79-91.39m873.93,0.85c54.06-33.41,130.9,14.58,125.79,77.5,1.39,65.76-85.45,107.89-135.79,64.69-48.74-33.86-42.79-115.26,10-142.19m152,375.71c-24-36.39,4.26-80.23,43.31-88.52,31.4,6.39,64.6,30,58,66.4-4.58,49.26-76.63,64.38-101.31,22.12m-1206.39-31.6c9.58-28.84,32.78-57.5,66.73-50,49.49,3.51,64.18,78.1,20.86,101.09-38.95,26.26-84.14-9.7-87.59-51.09m582,33.09c9.48-42.66,64.7-63.41,101.1-40.75,24,10.33,31.07,37.24,37.25,60.11-3.3,11.91-6.25,23.84-9.15,35.75-14.9,17.66-34,35.33-58.85,34.69-46.09,5.4-87.66-46.7-70.35-89.8" />,
            viewBox: "0 0 2499.99 2310",
        },
    },
    {
        id: "decred",
        displayName: "Decred",
        category: 'cryptocurrency',
        iconSvg: {
            path: <g>
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-7558.051" y1="912.335" x2="-7500.722" y2="912.335" gradientTransform="translate(7603.2 -872.83)">
                <stop offset="0" stopColor="#62d0c9" />
                <stop offset="1" stopColor="#7de2ac" />
                </linearGradient>
                <path d="M45.1 49.1h25.3c9.4 0 17.1-7.6 17.1-17.1s-7.6-17-17-17h-8.1L45.1 0h25.3c17.7-.1 32.1 14.2 32.1 31.9.1 13.1-7.9 24.9-20.1 29.8l20 17.3H79.6L45.1 49.1z" fill="url(#a)" />
                <path d="M57.5 30H32.2c-9.4 0-17.1 7.6-17.1 17.1s7.6 17.1 17.1 17.1h8.1l17.2 15H32.2C14.5 79.2.1 64.9 0 47.3c-.1-13.2 7.9-25 20.1-29.9L.1 0H23l34.5 30z" fill="#4971fa" />
                <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-7603.021" y1="912.381" x2="-7545.691" y2="912.381" gradientTransform="translate(7603.2 -872.83)">
                    <stop offset="0" stopColor="#3268fb" />
                    <stop offset="1" stopColor="#4795fa" />
                </linearGradient>
                <path d="M57.5 30H32.2c-9.4 0-17.1 7.6-17.1 17.1s7.6 17.1 17.1 17.1h8.1l17.2 15H32.2C14.5 79.2.1 64.9 0 47.3c-.1-13.2 7.9-25 20.1-29.9L.1 0H23l34.5 30z" fill="url(#b)" />
                  </g>,
            viewBox: "0 0 102.6 79.1",
        },
    },
];

export const paymentMethodIcons = paymentMethods.reduce((result, item) => {
    // eslint-disable-next-line no-param-reassign
    result[item.id] = item.iconSvg;
    return result;
}, {});

export const paymentMethodNames = paymentMethods.reduce((result, item) => {
    // eslint-disable-next-line no-param-reassign
    result[item.id] = item.displayName;
    return result;
}, {});

export const paymentMethodCategories = paymentMethods.reduce((result, item) => {
    // eslint-disable-next-line no-param-reassign
    result[item.id] = item.category;
    return result;
}, {});

export default paymentMethods;
