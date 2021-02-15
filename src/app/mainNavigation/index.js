import { LitElement, html } from "lit-element";

import "../../components/motFilter";
import "../../components/textFilter";

import { styles } from "./styles";

export class MainNavigation extends LitElement {
	constructor() {
		super();
		this.filterBar = false;
	}

	static get styles() {
		return styles;
	}

	render() {
		const selected = window.location.href.split("#")[1] || "trafficNews";
		return html`
			<nav>
				<ul>
					<li
						class="${selected === "trafficNews" ? "selected" : ""}"
						@click="${() => this.changePage("trafficNews")}"
					>
						Alle Meldungen
					</li>
					<li
						class="${selected === "showFavorites" ? "selected" : ""}"
						@click="${() => this.changePage("showFavorites")}"
					>
						Favoriten anzeigen
					</li>
					<li
						class="${selected === "favoriteSelection" ? "selected" : ""}"
						@click="${() => this.changePage("favoriteSelection")}"
					>
						Favoriten wählen
					</li>
					<li @click="${this.toggleFilterBar}">
						<img src="/img/funnel.svg" alt="Filter" class="filter" />
					</li>
				</ul>
				<div class="filters ${this.filterBar ? "active" : ""}">
					<vm-mot-filter class="motFilter"></vm-mot-filter>
					<vm-text-filter class="textFilter"></vm-text-filter>
					<div class="back">
						<img
							src="/img/arrow-right-circle.svg"
							alt="Zurück"
							@click="${this.toggleFilterBar}"
						/>
					</div>
				</div>
			</nav>
		`;
	}

	changePage(id) {
		window.location.href = `${window.location.href.split("#")[0]}#${id}`;
		this.dispatchEvent(
			new CustomEvent("vm-app-main-navigation-change", {
				detail: this.value,
				bubbles: true,
				composed: true,
				cancelable: true,
			})
		);
		this.requestUpdate();
	}

	toggleFilterBar() {
		this.filterBar = !this.filterBar;
		this.requestUpdate();
	}
}

customElements.define("vm-app-main-navigation", MainNavigation);
