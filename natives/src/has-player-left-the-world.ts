import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:HAS_PLAYER_LEFT_THE_WORLD
 *
 * 0x358E7369E46B466E

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function hasPlayerLeftTheWorld(player: PlayerIndex): boolean {
	const hasPlayerLeftTheWorld_result = Citizen.invokeNative<boolean>('0x358E7369E46B466E', player);
	return hasPlayerLeftTheWorld_result;
}