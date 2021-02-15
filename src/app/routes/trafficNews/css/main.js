import { css } from "lit-element";

const styles = css`
	:host {
		padding: 0 1rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.heading {
		grid-column: 1 / 3;
	}

	.messages {
		max-width: 1000px;
		display: inline-block;
		justify-self: center;
		grid-column: 1 / 3;
	}

	.motFilter,
	.textFilter {
		height: 3rem;
	}
`;

export { styles };
