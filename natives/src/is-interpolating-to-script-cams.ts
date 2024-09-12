/**
 * CAM:IS_INTERPOLATING_TO_SCRIPT_CAMS
 *
 * 0xB2A95909624C195B

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isInterpolatingToScriptCams(): boolean {
	const isInterpolatingToScriptCams_result = Citizen.invokeNative<boolean>('0xB2A95909624C195B', );
	return isInterpolatingToScriptCams_result;
}