import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HANDLE_FROM_MEMBER_ID
 *
 * 0xD41EE13851E1A5D7

 * 
 * Retrieve a gamer handle from it's member id representation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} memberId
 * @param {GamerHandle} gamerHandle [Ref]
 * @param {number} sizeOfData
 */
export function networkHandleFromMemberId(memberId: string, gamerHandle: GamerHandle /* ptr */, sizeOfData: number): void {
	const networkHandleFromMemberId_result = Citizen.invokeNative<void>('0xD41EE13851E1A5D7', memberId, gamerHandle.dataView, sizeOfData);
	return networkHandleFromMemberId_result;
}