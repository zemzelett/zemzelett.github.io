import { LitElement, html } from "lit-element";

export class MessageCollection extends LitElement {
	constructor() {
		super();
	}

	static get properties() {
		return {
			data: { type: Array },
		};
	}

	render() {
		return html`
			<div>
				${this.data.map((message) => {
					return html`
						<vm-message
							id=${message.meldungsId}
							data=${JSON.stringify(message)}
						></vm-message>
					`;
				})}
			</div>
		`;
	}
}

customElements.define("vm-message-collection", MessageCollection);
