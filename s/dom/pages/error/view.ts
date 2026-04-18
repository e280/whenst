
import {html} from "lit"
import {shadow, useCss, useName} from "@e280/sly"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {ErrorSituation} from "../../../logic/parts/situation.js"

export const ErrorView = shadow((_situation: ErrorSituation) => {
	useName("error")
	useCss(themeCss, stylesCss)

	return html`
		<h2>Error</h2>
		<p>Something's wrong with this link.</p>
		<p><a href="#/">Author a new link</a></p>
	`
})
