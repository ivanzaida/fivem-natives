/**
 * NETWORK:NETWORK_HAS_AUTOMUTE_OVERRIDE
 *
 * 0xB75567FBC57302E6

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkHasAutomuteOverride(): boolean {
	const networkHasAutomuteOverride_result = Citizen.invokeNative<boolean>('0xB75567FBC57302E6', );
	return networkHasAutomuteOverride_result;
}