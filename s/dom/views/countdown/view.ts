
import {cycle} from "@e280/stz"
import {signal} from "@e280/strata"
import {shadow, useCss, useMount, useName} from "@e280/sly"
import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"
import {calculateCountdown} from "../../../logic/parts/countdown.js"

export const CountdownView = shadow((time: number) => {
	useName("countdown")
	useCss(themeCss, stylesCss)

	const $countdown = signal(calculateCountdown(time))
	useMount(() => cycle(async() => void $countdown(calculateCountdown(time))))

	return $countdown()
})
