import { LitElement, html } from "lit-element";

import { styles } from "./styles";

export class TextFilter extends LitElement {
	constructor() {
		super();
		this.value = "";
	}

	static get properties() {
		return {
			value: { type: String },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		return html` <label for="text-filter">Linie:</label>
			<input
				name="text-filter"
				type="text"
				@input="${this.changeEvent}"
				placeholder="Linie"
			/>`;
	}

	update(changedProps) {
		if (changedProps.has("value")) {
			this.dispatchEvent(
				new CustomEvent("vm-text-filter-change", {
					detail: this.value,
					bubbles: true,
					composed: true,
					cancelable: true,
				})
			);
		}
		super.update();
	}

	changeEvent(e) {
		e.preventDefault();
		this.value = e.target.value.toUpperCase();
	}
}

customElements.define("vm-text-filter", TextFilter);
