import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_PLAYER_STARTED_TRANSITION
 *
 * 0x5CB105D3EB58499C

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function networkHasPlayerStartedTransition(player: PlayerIndex): boolean {
	const networkHasPlayerStartedTransition_result = Citizen.invokeNative<boolean>('0x5CB105D3EB58499C', player);
	return networkHasPlayerStartedTransition_result;
}