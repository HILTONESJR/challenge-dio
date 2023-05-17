class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.innerHTML = "<h1>Hellow Word</h>";
    }
}
customElements.define("card-news", CardNews);