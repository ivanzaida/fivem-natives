/**
 * SCRIPT:BG_DOES_LAUNCH_PARAM_EXIST
 *
 * 0x9F05118582DBA146

 * 
 * ------------------------------------------------------------------
 * @param {number} bgScriptId
 * @param {string} paramName
 * @returns {boolean}  
 */
export function bgDoesLaunchParamExist(bgScriptId: number, paramName: string): boolean {
	const bgDoesLaunchParamExist_result = Citizen.invokeNative<boolean>('0x9F05118582DBA146', bgScriptId, paramName);
	return bgDoesLaunchParamExist_result;
}