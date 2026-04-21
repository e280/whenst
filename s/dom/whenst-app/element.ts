
import {html} from "lit"
import {signal} from "@e280/strata"
import {hashSignal, router, shadowElement, useCss, useOnce} from "@e280/sly"
import themeCss from "../theme.css.js"
import stylesCss from "./styles.css.js"
import {fallback} from "../../tools/fallback.js"
import {ErrorView} from "../pages/error/view.js"
import {Timelink} from "../../logic/timelink.js"
import {AuthorView} from "../pages/author/view.js"
import {WitnessView} from "../pages/witness/view.js"

export const WhenstApp = shadowElement(() => {
	useCss(themeCss, stylesCss)

	const $hash = useOnce(hashSignal)

	const route = useOnce(() => router({
		"": () => AuthorView(),
		"{*}": (_params, string) => WitnessView(signal(Timelink.fromRoute(string))),
	}))

	return html`
		${$hash() === ""
			? html`<slot></slot>`
			: null}

		${fallback(
			() => route($hash()),
			() => ErrorView(),
		)}
	`
})
