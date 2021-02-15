import { LitElement, html } from "lit-element";
import "./routes/trafficNews";
import "./routes/favoriteSelection";
import "./mainNavigation";

import { styles } from "./styles";

export class App extends LitElement {
	constructor() {
		super();
		this.route = window.location.href.split("#")[1];
		this.data = JSON.parse(localStorage.getItem("data"));
		this.lines = JSON.parse(localStorage.getItem("lines"));
		this.favorites = JSON.parse(localStorage.getItem("favorites"));
		this.dataView = JSON.parse(localStorage.getItem("filtered-data"));
		this.linesView = Object.assign({}, this.lines);
		this.motFilter = [true, true, true, true];
		this.textFilter = "";
	}

	static get properties() {
		return {
			route: { type: String },
			data: { type: Object },
			motFilter: { type: Array },
			textFilter: { type: String },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		const route = window.location.href.split("#")[1];
		let content = html`<vm-app-traffic-news
			class="traffic-news"
			.data="${this.dataView}"
		></vm-app-traffic-news>`;
		if (route === "favoriteSelection") {
			content = html`<vm-app-favorite-selection
				class="favorite-selection"
				.lines="${this.linesView}"
				.favorites="${this.favorites}"
				@vm-app-favorite-change="${this.favoriteChanged}"
			></vm-app-favorite-selection>`;
		}
		return [
			html`
				<vm-app-main-navigation
					class="main-nav"
					@vm-app-main-navigation-change="${this.routeUpdate}"
					@vm-mot-filter-change="${this.filterChange}"
					@vm-text-filter-change="${this.filterChange}"
				></vm-app-main-navigation>
			`,
			content,
		];
	}

	routeUpdate(e) {
		this.route = window.location.href.split("#")[1];
		// this.resetFilter(); // Feature to add: Reset motFilter when changing pages
		this.updateFilter();
		this.requestUpdate();
		fetch(
			"https://api-dev.bvg.de/verkehrsmeldungen/?apikey=CNO96bjwlWsO4eGd2MO2P59Rd3Z0JK4X"
		)
			.then((res) => res.json())
			.then((data) => {
				this.data = data;
				localStorage.setItem("data", JSON.stringify(data));
			});
	}

	favoriteChanged(e) {
		const mot = e.detail[0];
		const line = e.detail[1];
		const value = e.detail[2];
		this.favorites[mot][line] = value;
		localStorage.setItem("favorites", JSON.stringify(this.favorites));
	}

	filterChange(e) {
		if (e.type.includes("mot")) {
			this.motFilter = [...e.detail];
		}
		if (e.type.includes("text")) {
			this.textFilter = e.detail;
		}
		this.updateFilter();
		this.requestUpdate();
	}

	updateFilter() {
		this.filterMot();
		this.filterLines();
		if (this.route === "showFavorites") {
			this.filterFavorites();
		}
		localStorage.setItem("filtered-data", JSON.stringify(this.dataView));
	}

	resetFilter() {
		this.motFilter = [true, true, true, true];
		this.textFilter = "";
	}

	filterMot() {
		this.dataView = this.data.filter(
			(item) =>
				this.motFilter[item.verkehrsmittel - 1] &&
				item.linie.includes(this.textFilter)
		);
	}

	filterLines() {
		this.linesView = Object.assign({}, this.lines);
		for (let i in this.motFilter) {
			if (!this.motFilter[i]) {
				let index = parseInt(i) + 1;
				delete this.linesView[index];
			}
		}
		Object.entries(this.linesView).forEach((entry) => {
			const mot = entry[0];
			let lines = entry[1];

			this.linesView[mot] = lines.filter((line) =>
				line.includes(this.textFilter)
			);
		});
	}

	filterFavorites() {
		const lines = [];
		Object.entries(this.favorites).forEach((entry) => {
			Object.entries(entry[1]).forEach((entry) => {
				if (entry[1]) {
					lines.push(entry[0]);
				}
			});
		});
		this.dataView = this.dataView.filter((item) => lines.includes(item.linie));
	}
}

customElements.define("vm-app", App);
