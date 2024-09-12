import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:IS_NETWORK_ID_OWNED_BY_PARTICIPANT
 *
 * 0xB0AB1F334666E337

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {boolean}  
 */
export function isNetworkIdOwnedByParticipant(networkId: NetworkIndex): boolean {
	const isNetworkIdOwnedByParticipant_result = Citizen.invokeNative<boolean>('0xB0AB1F334666E337', networkId);
	return isNetworkIdOwnedByParticipant_result;
}