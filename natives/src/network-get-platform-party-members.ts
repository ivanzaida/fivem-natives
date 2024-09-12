import { NetworkPlatformPartyDesc } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PLATFORM_PARTY_MEMBERS
 *
 * 0xFFE22E756055DC96

 * 
 * ------------------------------------------------------------------
 * @param {NetworkPlatformPartyDesc} partyDesc [Ref]
 * @param {number} sizeOfData
 * @returns {number}  
 */
export function networkGetPlatformPartyMembers(partyDesc: NetworkPlatformPartyDesc /* ptr */, sizeOfData: number): number {
	const networkGetPlatformPartyMembers_result = Citizen.invokeNative<number>('0xFFE22E756055DC96', partyDesc.dataView, sizeOfData);
	return networkGetPlatformPartyMembers_result;
}