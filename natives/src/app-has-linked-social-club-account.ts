/**
 * APP:APP_HAS_LINKED_SOCIAL_CLUB_ACCOUNT
 *
 * 0x71EAA0F7384D1969

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function appHasLinkedSocialClubAccount(): boolean {
	const appHasLinkedSocialClubAccount_result = Citizen.invokeNative<boolean>('0x71EAA0F7384D1969', );
	return appHasLinkedSocialClubAccount_result;
}