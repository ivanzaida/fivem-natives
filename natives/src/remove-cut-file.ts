/**
 * CUTSCENE:REMOVE_CUT_FILE
 *
 * 0x80933F349127EBB9

 * 
 * Simply unloads the cutscene and doesn't do extra stuff that REMOVE_CUTSCENE does.
 * Full list of cutscene names by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/cutsceneNames.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} cutName
 */
export function removeCutFile(cutName: string): void {
	const removeCutFile_result = Citizen.invokeNative<void>('0x80933F349127EBB9', cutName);
	return removeCutFile_result;
}