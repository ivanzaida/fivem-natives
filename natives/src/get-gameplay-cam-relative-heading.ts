/**
 * CAM:GET_GAMEPLAY_CAM_RELATIVE_HEADING
 *
 * 0x3FAFDC4C824A6C54

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getGameplayCamRelativeHeading(): number {
	const getGameplayCamRelativeHeading_result = Citizen.invokeNative<number>('0x3FAFDC4C824A6C54', );
	return getGameplayCamRelativeHeading_result;
}