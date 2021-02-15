import { LitElement, html } from "lit-element";

import "../favoriteCard";

import { styles } from "./styles";

export class FavoriteCollection extends LitElement {
	constructor() {
		super();
	}

	static get properties() {
		return {
			favorites: { type: Object },
			lines: { type: Object },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		return html`
			<div class="vm-favorite-collection">
				${Object.entries(this.lines).map((entry) => {
					const mot = entry[0];
					const lines = entry[1];

					return lines.map((line) => {
						return html`
							<vm-favorite-card
								mot=${mot}
								line=${line}
								?favorite="${this.favorites[mot][line]}"
							></vm-favorite-card>
						`;
					});
				})}
			</div>
		`;
	}
}

customElements.define("vm-favorite-collection", FavoriteCollection);
