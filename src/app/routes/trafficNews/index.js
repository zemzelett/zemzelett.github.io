import { LitElement, html } from "lit-element";

import "../../../components/messageCollection";
import "../../../components/message";

import { styles } from "./styles";

export class TrafficNews extends LitElement {
	constructor() {
		super();
	}

	static get properties() {
		return {
			data: { type: Object },
			favorites: { type: Object },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		return html`
			<h1 class="heading">BVG Verkehrsmeldungen</h1>
			<vm-message-collection
				class="messages"
				.data="${this.data}"
			></vm-message-collection>
		`;
	}
}

customElements.define("vm-app-traffic-news", TrafficNews);
