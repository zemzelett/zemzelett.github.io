import { css } from "lit-element";

const styles = css`
	:host {
		--bar-size: 2rem;
		--bar-padding: calc(var(--bar-size) / 6);
	}

	input {
		/* display: block; */
		width: 5rem;
		height: 2rem;
		font-size: 1rem;
		border: 2px solid gray;
		border-radius: 2px;
		box-sizing: border-box;
		padding: 5px;
	}

	label {
		font-weight: bold;
		color: rgb(240, 215, 34);
		display: none;
	}
`;

export { styles };
