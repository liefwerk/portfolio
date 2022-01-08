function sortByName(values) {
	return values.slice().sort((a, b) => a.data.sortName.localeCompare(b.data.sortName))
}

module.exports = (config) => {
	config.addPassthroughCopy({ 'public': './' })
	config.addPassthroughCopy({ 'src/assets': './' })
	config.setBrowserSyncConfig({
	files: ['dist/**/*'],
	open: true,
	// Tweak for Turbolinks & Browserstack Compatibility
	snippetOptions: {
		rule: {
		match: /<\/head>/i,
		fn: function (snippet, match) {
			return snippet + match;
		}
		}
	}
	})
	config.setDataDeepMerge(true)
	config.addFilter('sortByName', sortByName)

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
		markdownTemplateEngine: 'njk',
	}
}