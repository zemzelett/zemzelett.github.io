import { css } from "lit-element";

const styles = css`
	/* Desktop and larger */
	@media (min-width: 750px) {
		article {
			grid-template-columns: 8rem 1fr 1fr 4fr;
			align-items: center;
		}

		article > * {
			margin: 0;
		}

		.line {
			grid-column: 1;
			grid-row: 1;
		}

		.timespan {
			grid-column: 2;
			grid-row: 1;
		}

		.section {
			grid-column: 3;
			grid-row: 1;
		}

		.effect {
			grid-column: 4;
			grid-row: 1;
		}
	}
`;

export { styles };
