import { css } from "lit-element";

const styles = css`
	li {
		text-align: center;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	img.filter {
		width: 1.5rem;
		color: yellow;
	}

	.filters {
		position: absolute;
		width: 0vw;
		bottom: 0px;
		height: 3rem;
		display: flex;
		align-items: center;
		right: 0;
		background-color: rgb(89, 91, 98);
		overflow-x: hidden;
		transition: width 0.5s;
		justify-content: space-between;
	}

	.filters.active {
		width: 100vw;
		transition: width 0.5s;
	}

	.filters .back {
		height: 3rem;
		width: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.filters .back img {
		height: 1.5rem;
	}
`;

export { styles };
