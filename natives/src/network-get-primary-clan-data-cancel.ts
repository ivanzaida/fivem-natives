/**
 * NETWORK:NETWORK_GET_PRIMARY_CLAN_DATA_CANCEL
 *
 * 0xFAE42E9AE7B80A4C

 * 
 * Cancel data retrieval in progress. Must be PENDING.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function networkGetPrimaryClanDataCancel(): void {
	const networkGetPrimaryClanDataCancel_result = Citizen.invokeNative<void>('0xFAE42E9AE7B80A4C', );
	return networkGetPrimaryClanDataCancel_result;
}