import { css } from "lit-element";

const styles = css`
	:host {
		font-family: sans-serif;
	}

	img {
		height: 3rem;
		/* margin-bottom: 0.5rem; */
	}

	img + span {
		margin-top: 0.5rem;
	}

	img.subwayLogo {
		width: 3rem;
	}

	.line span {
		width: 3rem;
		text-align: center;
		font-size: 1.25rem;
	}

	article {
		margin-bottom: 1rem;
		background: var(--bg-secondary);
		border-radius: 2px;
		padding: 0.5rem;
	}

	p {
		margin: 0;
	}

	article > * {
		margin-bottom: 0.5rem;
		word-break: break-word;
	}

	.effect {
		margin-bottom: 0;
	}

	.timespan,
	.section {
		font-weight: bold;
		margin-right: 0.5rem;
	}

	.line {
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-right: 0.5rem;
	}

	article .line {
		font-weight: 900;
	}

	.timespan span:first-child {
		display: inline-block;
		margin-bottom: 0.2rem;
	}
`;

export { styles };
