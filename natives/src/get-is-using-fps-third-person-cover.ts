/**
 * PLAYER:GET_IS_USING_FPS_THIRD_PERSON_COVER
 *
 * 0xC600DDAA3EAEB670

 * 
 * Returns profile setting 237.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsUsingFpsThirdPersonCover(): boolean {
	const getIsUsingFpsThirdPersonCover_result = Citizen.invokeNative<boolean>('0xC600DDAA3EAEB670', );
	return getIsUsingFpsThirdPersonCover_result;
}