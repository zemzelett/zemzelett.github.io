import { css } from "lit-element";

const styles = css`
	:host {
		--bar-size: 2rem;
		--bar-padding: calc(var(--bar-size) / 6);
	}

	:host * {
		user-select: none;
	}

	img {
		height: var(--bar-size);
	}

	li.notSelected {
		filter: grayscale(1) opacity(0.5);
	}

	ul {
		display: inline-flex;
		list-style: none;
		align-items: center;
		/* background-color: hsl(0, 0%, 0.5); */
		padding: 0;
		border: 1px solid #f0d722;
		box-sizing: border-box;
		background-color: #f0d722;
		/* height: 3.5rem; */
		padding: var(--bar-padding);
		border-radius: var(--bar-size);
		margin: 0;
	}

	li {
		width: var(--bar-size);
		height: var(--bar-size);
		margin-right: var(--bar-padding);
		/* cursor: pointer; */
	}

	li:hover {
		filter: drop-shadow(0 0 6px var(--bg-primary));
	}

	li.notSelected:hover {
		filter: grayscale(1) opacity(0.5) drop-shadow(0 0 6px var(--bg-primary));
	}

	ul li:last-child {
		margin-right: 0;
	}

	.all {
		font-family: sans-serif;
		font-weight: bolder;
		background-color: #f0d722;
		border-radius: 50% 0% 0% 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border: 3px solid rgb(89, 91, 98);
	}
`;

export { styles };
