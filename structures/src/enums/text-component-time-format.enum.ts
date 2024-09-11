export enum ETextComponentTimeFormat {
	TimeFormatMilliseconds = 1,
	TimeFormatSeconds,
	TimeFormatMinutes = 4,
	TimeFormatHours = 8,
	TimeFormatDays = 16,
	TextFormatHideLeadingUnitsEqualToZero = 32, // e.g. show 12
	TextFormatHideLeadingZerosOnLeadingUnits = 64, // e.g. show 1
	TextFormatShowUnitDividersAsLetters = 128, // e.g. show 3m24s not 3
	TextFormatHideUnitLetterForSmallestUnits = 256, // e.g. show 3m24 not 3m24s
	TextFormatHideMillisecondsUnitsDigit = 512, // e.g. show 05
	TextFormatHideMillisecondsTensDigit = 1024, // e.g. show 05
	TextFormatUseDotForMillisecondDivider = 2048, // e.g. show 12.345 not 12
}