/**
 * HUD:IS_UPDATING_MP_GAMER_TAG_NAME_AND_CREW_DETAILS
 *
 * 0xFF7D32FE4F34D7DD

 * 
 * ------------------------------------------------------------------
 * @param {number} playerNum
 * @returns {boolean}  
 */
export function isUpdatingMpGamerTagNameAndCrewDetails(playerNum: number): boolean {
	const isUpdatingMpGamerTagNameAndCrewDetails_result = Citizen.invokeNative<boolean>('0xFF7D32FE4F34D7DD', playerNum);
	return isUpdatingMpGamerTagNameAndCrewDetails_result;
}