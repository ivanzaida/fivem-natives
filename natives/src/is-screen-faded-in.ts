/**
 * CAM:IS_SCREEN_FADED_IN
 *
 * 0x9390801B06EE998F

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScreenFadedIn(): boolean {
	const isScreenFadedIn_result = Citizen.invokeNative<boolean>('0x9390801B06EE998F', );
	return isScreenFadedIn_result;
}