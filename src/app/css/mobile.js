import { css } from "lit-element";

const styles = css`
	:host {
		width: 100vw;
		/* height: 100vh; */
		/* Chrome ANdroid accounts it's address bar into the vh... */
		height: 100%;
		position: absolute;
		display: grid;
		grid-template-rows: 1fr 3rem;
	}

	.main-nav {
		grid-row: 2;
	}

	.traffic-news,
	.favorite-selection {
		overflow-y: auto;
	}
`;

export { styles };
