/**
 * SCRIPT:BG_GET_LAUNCH_PARAM_VALUE
 *
 * 0xF8F0D1290FE81BC5

 * 
 * ------------------------------------------------------------------
 * @param {number} bgScriptId
 * @param {string} paramName
 * @returns {number}  
 */
export function bgGetLaunchParamValue(bgScriptId: number, paramName: string): number {
	const bgGetLaunchParamValue_result = Citizen.invokeNative<number>('0xF8F0D1290FE81BC5', bgScriptId, paramName);
	return bgGetLaunchParamValue_result;
}