/**
 * CAM:IS_SCREEN_FADING_OUT
 *
 * 0x78ABC1D11B34F324

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isScreenFadingOut(): boolean {
	const isScreenFadingOut_result = Citizen.invokeNative<boolean>('0x78ABC1D11B34F324', );
	return isScreenFadingOut_result;
}