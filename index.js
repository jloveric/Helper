"use strict"

module.exports = {
	BrowserLogger : require('./BrowserLogger.js'),
	CreateMappingConfig : require('./CreateMappingConfig.js'),
	ExitHandler : require('./ExitHandler.js'),
	FacebookSend : require('./FacebookSend.js'),
	FormatHelp : require('./FormatHelp.js'),
	GetConfigValues : require('./GetConfigValues.js'),
	GetDataConfig : require('./GetDataConfig.js'),
	Helper : require('./Helper.js'),
	SbEvent : require('./SbEvent.js'),
	Logger : function(name) {
		return require('./Logger.js')(name);
		},
	Base : require('./Base.js'),
	SingleLetterAbbreviations : require('./SingleLetterAbbreviations.js'),
	Stopwords : require('./Stopwords.js')
}