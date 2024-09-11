/**
 * NETWORK:NETWORK_HAS_SOCIAL_CLUB_ACCOUNT
 *
 * 0xFE087BC8EB584AA2

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasSocialClubAccount(): boolean {
	const networkHasSocialClubAccount_result = Citizen.invokeNative<boolean>('0xFE087BC8EB584AA2', );
	return networkHasSocialClubAccount_result;
}