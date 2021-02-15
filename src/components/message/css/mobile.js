import { css } from "lit-element";

const styles = css`
	article {
		display: grid;
		grid-template-columns: 5rem 4fr;
	}

	.line {
		grid-column: 1;
		grid-row: 1 / 3;
	}

	.timespan {
		grid-column: 2;
		grid-row: 1;
	}

	.section {
		grid-column: 2;
		grid-row: 2;
	}

	.effect {
		grid-column: 1 / 4;
		grid-row: 3;
	}
`;

export { styles };
