
import {template, html, socialCard} from "@e280/scute"

const domain = "whenst.e280.org"
const favicon = "/assets/clock-small.png"

export default template(import.meta.url, async orb => html`
	<!doctype html>
	<html>
		<head>
			<meta charset="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			<meta name="darkreader-lock"/>
			<style>@layer base{html{background:#000}}</style>

			<title>whenst</title>
			<link rel="icon" href="${favicon}"/>
			<link rel="stylesheet" href="${orb.hashurl("main.css")}"/>
			<script type="module" src="${orb.hashurl("main.bundle.min.js")}"></script>

			${socialCard({
				themeColor: "#ff9b00",
				siteName: domain,
				title: "whenst – when it's happening",
				description: "in your local timezone",
				image: `https://${domain}${favicon}`,
			})}
		</head>
		<body>
			<main>
				<whenst-app>
					<h1>whenst</h1>
					<p>tell people when your thing is happening — in their local timezones</p>
				</whenst-app>

				<footer>
					<whenst-timezone></whenst-timezone>
					<p>learn more about <a href="#/">whenst</a> on <a href="https://github.com/e280/whenst#readme" target=_blank>github</a></p>
					<p class=version>v${orb.packageVersion()}</p>
				</footer>
			</main>
		</body>
	</html>
`)

