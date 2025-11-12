/**
 * NETWORK:NETWORK_CLAN_GET_LOCAL_MEMBERSHIPS_COUNT
 *
 * 0xAB468D6C5C0FC4AF

 * 
 * Returns -1 if we're waiting for the server to respond with our count.
 * It will assert if your don't have a valid Rockstar Id.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkClanGetLocalMembershipsCount(): number {
	const networkClanGetLocalMembershipsCount_result = Citizen.invokeNative<number>('0xAB468D6C5C0FC4AF', );
	return networkClanGetLocalMembershipsCount_result;
}