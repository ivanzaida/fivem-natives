/**
 * CUTSCENE:REQUEST_CUT_FILE
 *
 * 0x25D5067F6C88E193

 * 
 * Simply loads the cutscene and doesn't do extra stuff that REQUEST_CUTSCENE does.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cutName
 */
export function requestCutFile(cutName: string): void {
	const requestCutFile_result = Citizen.invokeNative<void>('0x25D5067F6C88E193', cutName);
	return requestCutFile_result;
}