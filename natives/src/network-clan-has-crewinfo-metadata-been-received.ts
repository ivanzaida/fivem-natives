/**
 * NETWORK:NETWORK_CLAN_HAS_CREWINFO_METADATA_BEEN_RECEIVED
 *
 * 0x0ED0FE8A62C2CBE6

 * 
 * Because teh metadata and the crew info for crews aren't always complete, just because
 * this function returns true, it doesn't mean that the data you're asking for it there.
 * It may not be included in the crew info.  Rely on the return values of the request functions
 * to be sure.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkClanHasCrewinfoMetadataBeenReceived(): boolean {
	const networkClanHasCrewinfoMetadataBeenReceived_result = Citizen.invokeNative<boolean>('0x0ED0FE8A62C2CBE6', );
	return networkClanHasCrewinfoMetadataBeenReceived_result;
}