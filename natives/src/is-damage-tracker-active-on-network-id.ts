import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:IS_DAMAGE_TRACKER_ACTIVE_ON_NETWORK_ID
 *
 * 0x03A6DAAE139DC9E9

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @returns {boolean}  
 */
export function isDamageTrackerActiveOnNetworkId(networkId: NetworkIndex): boolean {
	const isDamageTrackerActiveOnNetworkId_result = Citizen.invokeNative<boolean>('0x03A6DAAE139DC9E9', networkId);
	return isDamageTrackerActiveOnNetworkId_result;
}