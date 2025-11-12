/**
 * AUDIO:PLAY_POLICE_REPORT
 *
 * 0x7A9F2D6596A1FF08

 * 
 * Plays the given police radio message.
 * 
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: https://pastebin.com/GBnsQ5hr
 * Full list of police report names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/policeReportNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} reportName
 * @param {number} applyValue
 * @returns {number}  
 */
export function playPoliceReport(reportName: string, applyValue: number = 0): number {
	const playPoliceReport_result = Citizen.invokeNative<number>('0x7A9F2D6596A1FF08', reportName, applyValue);
	return playPoliceReport_result;
}