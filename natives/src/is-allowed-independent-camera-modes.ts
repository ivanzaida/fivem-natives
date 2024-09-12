/**
 * CAM:IS_ALLOWED_INDEPENDENT_CAMERA_MODES
 *
 * 0x22B1B0E4CDB95977

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isAllowedIndependentCameraModes(): boolean {
	const isAllowedIndependentCameraModes_result = Citizen.invokeNative<boolean>('0x22B1B0E4CDB95977', );
	return isAllowedIndependentCameraModes_result;
}