
import {html} from "lit"
import {shadow, useCss, useName} from "@e280/sly"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {TimeView} from "../../views/time/view.js"
import {Timelink} from "../../../logic/timelink.js"

export const WitnessView = shadow((timelink: Timelink) => {
	useName("witness")
	useCss(themeCss, stylesCss)

	return html`
		<div theme-plate>
			${TimeView(timelink)}
		</div>
	`
})
