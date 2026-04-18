
import {html} from "lit"
import {shadow, useCss, useName} from "@e280/sly"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {TimeView} from "../../views/time/view.js"
import {WitnessSituation} from "../../../logic/parts/situation.js"

export const WitnessView = shadow((situation: WitnessSituation) => {
	useName("witness")
	useCss(themeCss, stylesCss)

	return html`
		<div theme-plate>
			${TimeView(situation.timelink)}
		</div>
	`
})
