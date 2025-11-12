/**
 * NETWORK:NETWORK_CLAN_SERVICE_IS_VALID
 *
 * 0x7260716F2E4D7661

 * 
 * Returns true if the clan service is a ready.
 * Make sure the service is available before operations.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkClanServiceIsValid(): boolean {
	const networkClanServiceIsValid_result = Citizen.invokeNative<boolean>('0x7260716F2E4D7661', );
	return networkClanServiceIsValid_result;
}