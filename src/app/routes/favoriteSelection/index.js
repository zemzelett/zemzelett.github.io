import { LitElement, html } from "lit-element";

import "../../../components/favoriteCollection";

import { styles } from "./styles";
import "../../../components/favoriteCollection";

export class FavoriteSelection extends LitElement {
	constructor() {
		super();
	}

	static get properties() {
		return {
			lines: { type: Object },
			favorites: { type: Object },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		return html`
			<h1>Favoriten wählen</h1>
			<vm-favorite-collection
				class="favorites"
				.lines="${this.lines}"
				.favorites="${this.favorites}"
			></vm-favorite-collection>
		`;
	}
}

customElements.define("vm-app-favorite-selection", FavoriteSelection);
