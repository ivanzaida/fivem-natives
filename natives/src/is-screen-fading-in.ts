/**
 * CAM:IS_SCREEN_FADING_IN
 *
 * 0xDDED2C93E8FD5B69

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScreenFadingIn(): boolean {
	const isScreenFadingIn_result = Citizen.invokeNative<boolean>('0xDDED2C93E8FD5B69', );
	return isScreenFadingIn_result;
}