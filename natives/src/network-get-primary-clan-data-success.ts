/**
 * NETWORK:NETWORK_GET_PRIMARY_CLAN_DATA_SUCCESS
 *
 * 0xCE1D2FC338EEA6AA

 * 
 * Returns TRUE if data retrieval with NETWORK_GET_PRIMARY_CLAN_DATA_START has been successfull.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkGetPrimaryClanDataSuccess(): boolean {
	const networkGetPrimaryClanDataSuccess_result = Citizen.invokeNative<boolean>('0xCE1D2FC338EEA6AA', );
	return networkGetPrimaryClanDataSuccess_result;
}