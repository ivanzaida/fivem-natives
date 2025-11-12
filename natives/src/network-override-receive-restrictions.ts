import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS
 *
 * 0x7EDC844C6CEBFEB8

 * 
 * R uses this to hear all player when spectating.
 * It allows you to hear other online players when their chat is on none, crew and or friends
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerID
 * @param {boolean} override
 */
export function networkOverrideReceiveRestrictions(playerID: PlayerIndex, override: boolean): void {
	const networkOverrideReceiveRestrictions_result = Citizen.invokeNative<void>('0x7EDC844C6CEBFEB8', playerID, override);
	return networkOverrideReceiveRestrictions_result;
}