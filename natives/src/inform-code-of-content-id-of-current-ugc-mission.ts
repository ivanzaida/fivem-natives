/**
 * MISC:INFORM_CODE_OF_CONTENT_ID_OF_CURRENT_UGC_MISSION
 *
 * 0x1F1A910C8AD5C453

 * 
 * Call this when a UGC mission begins so that any photos taken during the mission are tagged correctly.
 * When the mission ends, call this command with an empty string
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} contentIdString
 */
export function informCodeOfContentIdOfCurrentUgcMission(contentIdString: string): void {
	const informCodeOfContentIdOfCurrentUgcMission_result = Citizen.invokeNative<void>('0x1F1A910C8AD5C453', contentIdString);
	return informCodeOfContentIdOfCurrentUgcMission_result;
}