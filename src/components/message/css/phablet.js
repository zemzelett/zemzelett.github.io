import { css } from "lit-element";

const styles = css`
	@media (min-width: 400px) {
		article {
			grid-template-columns: 8rem 4fr;
		}

		img {
			margin-bottom: 0;
		}

		img + span {
			margin-top: 0;
		}

		.line {
			grid-column: 1;
			grid-row: 1 / 3;
			display: flex;
			flex-flow: row;
			align-items: center;
			justify-content: space-around;
			/* margin-right: 0; */
		}
	}
`;

export { styles };
