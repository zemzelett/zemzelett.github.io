import { css } from "lit-element";

const styles = css`
	nav {
		background-color: #595b62;
	}

	ul {
		height: 3rem;
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 3rem;
		justify-content: space-evenly;
		align-items: center;
		color: rgb(240, 215, 34);
		font-weight: bolder;
	}

	li.selected {
		background-color: rgb(240, 215, 34);
		color: black;
	}
`;

export { styles };
