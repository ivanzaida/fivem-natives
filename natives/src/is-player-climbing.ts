import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_CLIMBING
 *
 * 0xB96BD3A32937D44E

 * 
 * Returns TRUE if the player ('s ped) is climbing at the moment.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerClimbing(player: PlayerIndex): boolean {
	const isPlayerClimbing_result = Citizen.invokeNative<boolean>('0xB96BD3A32937D44E', player);
	return isPlayerClimbing_result;
}