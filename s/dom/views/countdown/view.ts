
import {cycle} from "@e280/stz"
import {Signaly} from "@e280/strata"
import {shadow, useCss, useMount, useName, useSignal} from "@e280/sly"
import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"
import {Timelink} from "../../../logic/timelink.js"
import {calculateCountdown} from "../../../logic/countdown.js"

export const CountdownView = shadow(($timelink: Signaly<Timelink>) => {
	useName("countdown")
	useCss(themeCss, stylesCss)

	const $countdown = useSignal(calculateCountdown($timelink().time))
	useMount(() => cycle(() => $countdown(calculateCountdown($timelink().time))))

	return $countdown()
})
