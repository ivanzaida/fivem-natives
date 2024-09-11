/**
 * PLAYER:IS_SYSTEM_UI_BEING_DISPLAYED
 *
 * 0xEF37E704F02B50F3

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSystemUiBeingDisplayed(): boolean {
	const isSystemUiBeingDisplayed_result = Citizen.invokeNative<boolean>('0xEF37E704F02B50F3', );
	return isSystemUiBeingDisplayed_result;
}