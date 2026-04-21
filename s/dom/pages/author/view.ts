
import {html} from "lit"
import {debounce} from "@e280/stz"
import {shadow, useCss, useDerived, useName, useOnce, useSignal} from "@e280/sly"

import stylesCss from "./styles.css.js"
import themeCss from "../../theme.css.js"

import {constants} from "../../../constants.js"
import {TimeView} from "../../views/time/view.js"
import {Timelink} from "../../../logic/timelink.js"

export const AuthorView = shadow(() => {
	useName("author")
	useCss(themeCss, stylesCss)

	const $time = useSignal(Date.now())
	const $text = useSignal("")
	const $timelink = useDerived(() => new Timelink($time.value, $text.value))

	const timelinkUrl = $timelink().toUrl()
	const remaining = constants.textLimit - $text.value.length

	const updateMarkdown = useOnce(() => {
		const update = debounce(200, (input: HTMLTextAreaElement) => {
			$text.value = (input.value ?? "").trim()
		})
		return (event: Event) => update(event.currentTarget as HTMLTextAreaElement)
	})

	const updateTime = (event: InputEvent) => {
		const input = event.currentTarget as HTMLInputElement
		$time.value = new Date(input.value).getTime()
	}

	return html`
		<section>
			<h2>choose time and description</h2>
			<div theme-plate>
				<input
					class="timepicker input"
					type=datetime-local
					@input="${updateTime}"
					/>
				<textarea
					class="text input"
					theme-markdown
					placeholder="short optional markdown description..."
					maxlength="${constants.textLimit}"
					@input="${updateMarkdown}"
				></textarea>
				<small>${remaining} character${remaining === 1 ?"" :"s"} remaining</small>
			</div>
		</section>

		<section>
			<h2>send link to your peeps</h2>
			<div theme-plate>
				<a class=timelink rel="nofollow" target=_blank href="${timelinkUrl}">${timelinkUrl}</a>
			</div>
		</section>

		<section>
			<h2>preview</h2>
			<div theme-plate>
				${TimeView($timelink)}
			</div>
		</section>
	`
})
