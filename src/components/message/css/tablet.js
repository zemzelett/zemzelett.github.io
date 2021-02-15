import { css } from "lit-element";

const styles = css`
	/* Tablet */
	@media (min-width: 550px) {
		article {
			grid-template-columns: 8rem 2fr 3fr;
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
			grid-column: 1 / 4;
			grid-row: 2;
		}
	}
`;

export { styles };
