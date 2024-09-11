import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:ACTIVATE_DAMAGE_TRACKER_ON_NETWORK_ID
 *
 * 0x7B95E064D91BFE49

 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} activateTracker
 */
export function activateDamageTrackerOnNetworkId(networkId: NetworkIndex, activateTracker: boolean): void {
	const activateDamageTrackerOnNetworkId_result = Citizen.invokeNative<void>('0x7B95E064D91BFE49', networkId, activateTracker);
	return activateDamageTrackerOnNetworkId_result;
}