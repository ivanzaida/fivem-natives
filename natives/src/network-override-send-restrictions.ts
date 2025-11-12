import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_OVERRIDE_SEND_RESTRICTIONS
 *
 * 0x7453501DC1481684

 * 
 * This is used alongside the native,
 * 'NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS'. Read its description for more info.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerID
 * @param {boolean} override
 */
export function networkOverrideSendRestrictions(playerID: PlayerIndex, override: boolean): void {
	const networkOverrideSendRestrictions_result = Citizen.invokeNative<void>('0x7453501DC1481684', playerID, override);
	return networkOverrideSendRestrictions_result;
}