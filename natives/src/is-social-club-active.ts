/**
 * HUD:IS_SOCIAL_CLUB_ACTIVE
 *
 * 0x39E7796CCE4DC681

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSocialClubActive(): boolean {
	const isSocialClubActive_result = Citizen.invokeNative<boolean>('0x39E7796CCE4DC681', );
	return isSocialClubActive_result;
}