/**
 * NETWORK:NETWORK_HAVE_ROS_SOCIAL_CLUB_PRIV
 *
 * 0xE67B481B4EC10A14

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHaveRosSocialClubPriv(): boolean {
	const networkHaveRosSocialClubPriv_result = Citizen.invokeNative<boolean>('0xE67B481B4EC10A14', );
	return networkHaveRosSocialClubPriv_result;
}