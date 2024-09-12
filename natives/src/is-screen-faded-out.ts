/**
 * CAM:IS_SCREEN_FADED_OUT
 *
 * 0x15CCE8886267624F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScreenFadedOut(): boolean {
	const isScreenFadedOut_result = Citizen.invokeNative<boolean>('0x15CCE8886267624F', );
	return isScreenFadedOut_result;
}