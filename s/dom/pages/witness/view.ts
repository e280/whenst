
import {Signaly} from "@e280/strata"
import {shadow, useCss, useName} from "@e280/sly"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {TimeView} from "../../views/time/view.js"
import {Timelink} from "../../../logic/timelink.js"

export const WitnessView = shadow(($timelink: Signaly<Timelink>) => {
	useName("witness")
	useCss(themeCss, stylesCss)
	return TimeView($timelink)
})

