
import {html} from "lit"
import {shadowElement, useCss} from "@e280/sly"
import themeCss from "../theme.css.js"
import stylesCss from "./styles.css.js"
import {getLocalTimezone} from "../../logic/timekeeper.js"

export const WhenstTimezone = shadowElement(() => {
	useCss(themeCss, stylesCss)
	const timezone = getLocalTimezone()

	return html`
		Your local timezone is ${timezone.long} (${timezone.offset})
	`
})
