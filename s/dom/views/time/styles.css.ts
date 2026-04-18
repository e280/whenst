
import {css} from "lit"
export default css`

.timeframe {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	text-align: center;

	h1 {
		font-size: 2em;
		font-weight: normal;
		color: var(--logo-color);
		text-shadow: var(--logo-text-shadow);
	}

	> span {
		display: flex;
		flex-direction: column;
	}

	.precise {
		opacity: 0.9;
		font-family: monospace;
		font-weight: normal;
	}
}

.markdown {
	margin-top: 1em;
	padding: 1em;
	background: #4442;
	border: 0.5em solid #4442;
}

`
