"use strict"

module.exports = {
	Helper : require('./Helper.js'),
	SbEvent : require('./SbEvent.js'),
	Logger : function(name) {
		return require('./Logger.js')(name);
		},
	Base : require('./Base.js'),
	SingleLetterAbbreviations : require('./SingleLetterAbbreviations.js'),
	Stopwords : require('./Stopwords.js')
}
