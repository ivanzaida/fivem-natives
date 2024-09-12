/**
 * CAM:IS_INTERPOLATING_FROM_SCRIPT_CAMS
 *
 * 0xE976C85F4B1CF1A2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isInterpolatingFromScriptCams(): boolean {
	const isInterpolatingFromScriptCams_result = Citizen.invokeNative<boolean>('0xE976C85F4B1CF1A2', );
	return isInterpolatingFromScriptCams_result;
}