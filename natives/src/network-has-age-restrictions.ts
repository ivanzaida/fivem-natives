/**
 * NETWORK:NETWORK_HAS_AGE_RESTRICTIONS
 *
 * 0xB0DF27929B02C57E

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasAgeRestrictions(): boolean {
	const networkHasAgeRestrictions_result = Citizen.invokeNative<boolean>('0xB0DF27929B02C57E', );
	return networkHasAgeRestrictions_result;
}