import { LitElement, html } from "lit-element";
import dayjs from "dayjs";

import { styles } from "./styles";

export class Message extends LitElement {
	constructor() {
		super();
	}

	static get properties() {
		return {
			data: { type: Object },
		};
	}

	static get styles() {
		return styles;
	}

	render() {
		const meansOfTransportation = this.meansOfTransportationString(
			this.data.verkehrsmittel
		);
		const line = this.data.linie;
		const validFromDateTime = dayjs(
			this.data.gueltigVonDatum + this.data.gueltigVonZeit,
			"YYYY-MM-DDHH:mm:ss"
		).format("DD.MM.YYYY HH:mm");
		const validUntilDateTime =
			this.data.gueltigBisDatum != undefined
				? dayjs(
						this.data.gueltigBisDatum + this.data.gueltigBisZeit,
						"YYYY-MM-DDHH:mm:ss"
				  ).format("DD.MM.YYYY HH:mm")
				: "bis auf weiteres";
		const sectionStart = this.data.beginnAbschnittName;
		const sectionEnd = this.data.endeAbschnittName;
		const cause = this.data.textIntUrsache;
		const effect = this.data.textIntAuswirkung;
		const causeShort = this.data.textWAPSMSUrsache;
		const effectShort = this.data.textWAPSMSAuswirkung;
		const rrs = this.data.sev;
		const obstruciton = this.data.umfahrung;

		return html`
			<article class="vm-message">
				<div class="line">
					<img
						src="/img/${meansOfTransportation}.svg"
						alt="${meansOfTransportation}"
					/>
					${this.generateLine(line)}
				</div>
				<p class="timespan">
					<span>${validFromDateTime}</span>
					<br />
					<span>${validUntilDateTime}</span>
				</p>
				<p class="section">
					<span>${sectionStart} &lt;&gt; </span>
					<span>${sectionEnd}</span>
				</p>
				<!-- <p class="cause">Ursache: ${cause}</p> -->
				<p class="effect">${effect}</p>
			</article>
		`;
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

customElements.define("vm-message", Message);
