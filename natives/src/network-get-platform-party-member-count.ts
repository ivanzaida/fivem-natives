/**
 * NETWORK:NETWORK_GET_PLATFORM_PARTY_MEMBER_COUNT
 *
 * 0x9DC05704C71AF6C5

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function networkGetPlatformPartyMemberCount(): number {
	const networkGetPlatformPartyMemberCount_result = Citizen.invokeNative<number>('0x9DC05704C71AF6C5', );
	return networkGetPlatformPartyMemberCount_result;
}