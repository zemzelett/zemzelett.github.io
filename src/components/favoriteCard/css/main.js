import { css } from "lit-element";

const styles = css`
	.vm-favorite-card {
		display: flex;
		flex-flow: column;
		align-items: center;
		width: 4rem;
		height: 5rem;
		padding: 0.5rem;
		background-color: var(--bg-secondary);
	}

	.vm-favorite-card * {
		user-select: none;
	}

	img {
		width: 3rem;
	}

	img.subwayLogo {
		margin-top: auto;
	}

	img + span {
		margin-top: 0.5rem;
	}

	span {
		width: 3rem;
		text-align: center;
		font-size: 1.25rem;
		font-weight: 600;
	}

	img.heart {
		position: relative;
		right: -1.8rem;
		top: 0.2rem;
		z-index: 1;
		height: 1rem;
		margin: -0.5rem;
	}

	img.heart.less {
		opacity: 0;
	}

	/* .vm-favorite-card:hover img.heart {
		opacity: 1;
	} */
`;

export { styles };
