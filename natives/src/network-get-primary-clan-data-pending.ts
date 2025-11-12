/**
 * NETWORK:NETWORK_GET_PRIMARY_CLAN_DATA_PENDING
 *
 * 0x51BEADCE3428DB6F

 * 
 * Returns TRUE if data retrieval with NETWORK_GET_PRIMARY_CLAN_DATA_START is pending.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGetPrimaryClanDataPending(): boolean {
	const networkGetPrimaryClanDataPending_result = Citizen.invokeNative<boolean>('0x51BEADCE3428DB6F', );
	return networkGetPrimaryClanDataPending_result;
}