/**
 * MISC:TERMINATE_ALL_SCRIPTS_WITH_THIS_NAME
 *
 * 0xD13237BC328B938E

 * 
 * ------------------------------------------------------------------
 * @param {string} nameOfScriptToTerminate
 */
export function terminateAllScriptsWithThisName(nameOfScriptToTerminate: string): void {
	const terminateAllScriptsWithThisName_result = Citizen.invokeNative<void>('0xD13237BC328B938E', nameOfScriptToTerminate);
	return terminateAllScriptsWithThisName_result;
}