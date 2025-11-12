import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_START_COMMUNICATION_PERMISSIONS_CHECK
 *
 * 0x9E0B6B766CF810E5

 * 
 * Starts a communication permisson check
 * Returns unique ID that can be used when receiving EVENT_NETWORK_PERMISSION_CHECK_RESULT
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {number}  
 */
export function networkStartCommunicationPermissionsCheck(gamer: GamerHandle /* ptr */): number {
	const networkStartCommunicationPermissionsCheck_result = Citizen.invokeNative<number>('0x9E0B6B766CF810E5', gamer.dataView);
	return networkStartCommunicationPermissionsCheck_result;
}