import { css } from "lit-element";

const styles = css`
	@media (min-width: 550px) {
		nav {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		ul {
			height: 3rem;
			grid-template-columns: 1fr 1fr 1fr 0;
		}

		nav .filter {
			display: none;
		}

		.filters {
			position: relative;
			width: 100%;
			bottom: 0px;
			height: 3rem;
			display: flex;
			align-items: center;
			right: 0;
			background-color: rgb(89, 91, 98);
			overflow-x: hidden;
			transition: width 0.5s;
			justify-content: space-around;
		}

		.filters.active {
			width: 100vw;
			transition: width 0.5s;
		}

		.filters .back {
			display: none;
		}
	}
`;

export { styles };
