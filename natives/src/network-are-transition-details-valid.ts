import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ARE_TRANSITION_DETAILS_VALID
 *
 * 0xF59281E510228E22

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkAreTransitionDetailsValid(player: PlayerIndex): boolean {
	const networkAreTransitionDetailsValid_result = Citizen.invokeNative<boolean>('0xF59281E510228E22', player);
	return networkAreTransitionDetailsValid_result;
}