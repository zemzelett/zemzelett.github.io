import { LitElement, html } from "lit-element";

import { styles } from "./styles";

export class FavoriteCard extends LitElement {
	constructor() {
		super();
	}

	static get properties() {
		return {
			mot: { type: String },
			line: { type: String },
			favorite: { type: Boolean },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		const meansOfTransportation = this.meansOfTransportationString(this.mot);
		return html`
			<article class="vm-favorite-card" @click="${this.toggleFavorite}">
				<img
					src="/img/herz.svg"
					alt="Favorit Herz"
					class="${this.favorite ? "heart" : "heart less"}"
				/>
				<img
					src="/img/${meansOfTransportation}.svg"
					alt="${meansOfTransportation}"
				/>
				${this.generateLine(this.line)}
			</article>
		`;
	}

	toggleFavorite() {
		this.favorite = !this.favorite;
		this.dispatchEvent(
			new CustomEvent("vm-app-favorite-change", {
				detail: [this.mot, this.line, this.favorite],
				bubbles: true,
				composed: true,
			})
		);
	}

	meansOfTransportationString(id) {
		return `${["Bus", "U-Bahn", "Tram", "Fähre"][id - 1]}-Logo`;
	}

	generateLine(line) {
		if (line[0].toUpperCase() === "U") {
			return this.subwayLogo(line);
		}
		return html`<span>${line}</span>`;
	}

	subwayLogo(name) {
		return html`<img
			src="/img/${name}.svg"
			alt="${name}"
			class="subwayLogo"
		/>`;
	}
}

customElements.define("vm-favorite-card", FavoriteCard);
