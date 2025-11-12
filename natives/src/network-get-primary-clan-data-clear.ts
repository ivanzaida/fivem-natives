/**
 * NETWORK:NETWORK_GET_PRIMARY_CLAN_DATA_CLEAR
 *
 * 0x96B33F4FC167DB47

 * 
 * Clear data from previous operations. Must not be PENDING.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGetPrimaryClanDataClear(): boolean {
	const networkGetPrimaryClanDataClear_result = Citizen.invokeNative<boolean>('0x96B33F4FC167DB47', );
	return networkGetPrimaryClanDataClear_result;
}