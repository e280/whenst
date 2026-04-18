
import {base62, txt} from "@e280/stz"
import {constants} from "../constants.js"

export class Timelink {
	static regex = /^([a-z0-9]+)(?:|\/([a-z0-9]*))$/i

	static fromRoute(route: string) {
		const match = route.match(this.regex)
		if (!match) throw new Error("invalid route for timelink parsing")
		const [, timeEncoded, textEncoded] = match
		const time = decodeTime(timeEncoded)
		const text = decodeText(textEncoded)
		return new this(time, text)
	}
	
	constructor(
			public time: number,
			public text: string,
		) {
		this.text = this.text.slice(0, constants.textLimit)
	}

	toRoute() {
		return this.text
			? `/${encodeTime(this.time)}/${encodeText(this.text)}`
			: `/${encodeTime(this.time)}`
	}

	toUrl() {
		const {origin, pathname, search} = location
		const hash = this.toRoute()
		return `${origin}${pathname}${search}#${hash}`
	}
}

////////////////////////

function encodeTime(time: number) {
	const seconds = Math.floor(time / 1000)
	return base62.fromInteger(seconds)
}

function decodeTime(text: string) {
	const seconds = base62.toInteger(text)
	return seconds * 1000
}

function encodeText(md: string) {
	if (!md) return ""
	const bytes = txt.toBytes(md)
	return base62.fromBytes(bytes)
}

function decodeText(b58: string) {
	if (!b58) return ""
	const bytes = base62.toBytes(b58)
	return txt.fromBytes(bytes)
}

