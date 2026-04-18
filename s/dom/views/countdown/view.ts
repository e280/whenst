
import {cycle} from "@e280/stz"
import {shadow, useCss, useMount, useName, useSignal} from "@e280/sly"
import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"
import {calculateCountdown} from "../../../logic/countdown.js"

export const CountdownView = shadow((time: number) => {
	useName("countdown")
	useCss(themeCss, stylesCss)

	const $countdown = useSignal(calculateCountdown(time))
	useMount(() => cycle(() => $countdown(calculateCountdown(time))))

	return $countdown()
})
