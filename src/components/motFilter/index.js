// mot = means of transportion
import { LitElement, html } from "lit-element";

import { styles } from "./styles";

export class MotFilter extends LitElement {
	constructor() {
		super();
		this.state = [true, true, true, true];
		this.mots = ["Bus", "U-Bahn", "Tram", "Fähre"];
	}

	static get properties() {
		return {
			state: { type: Array },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		return html`
			<nav class="mot-filter">
				<ul>
					<li
						class="
							all
							${!this.state.reduce((val, memo) => memo && val) ? "notSelected" : "selected"}"
						@click=${this.toggleAllMots}
					>
						<span><!--Alle--></span>
					</li>
					${this.mots.map(
						(mot, i) => html`
							<li
								@click=${(e) => this.toggleMot(i)}
								class="${this.state[i] ? "selected" : "notSelected"}"
							>
								<img src="/img/${mot}-Logo.svg" alt="${mot}-Filter" />
							</li>
						`
					)}
				</ul>
			</nav>
		`;
	}

	update(changedProps) {
		if (changedProps.has("state")) {
			this.dispatchEvent(
				new CustomEvent("vm-mot-filter-change", {
					detail: [...this.state],
					bubbles: true,
					composed: true,
				})
			);
		}
		super.update();
	}

	toggleMot(id) {
		const oldState = [...this.state];
		this.state[id] = !this.state[id];
		this.requestUpdate("state", oldState);
	}

	toggleAllMots() {
		this.state = [true, true, true, true];
	}

	meansOfTransportationString(id) {
		return `${["Bus", "U-Bahn", "Tram", "Fähre"][id]}-Logo`;
	}

	meansOfTransportationIdFromString(str) {
		return;
	}
}

customElements.define("vm-mot-filter", MotFilter);
