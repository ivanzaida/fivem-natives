import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:HAS_PLAYER_DAMAGED_AT_LEAST_ONE_PED
 *
 * 0x1F8DDF94E5D56F59

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function hasPlayerDamagedAtLeastOnePed(player: PlayerIndex): boolean {
	const hasPlayerDamagedAtLeastOnePed_result = Citizen.invokeNative<boolean>('0x1F8DDF94E5D56F59', player);
	return hasPlayerDamagedAtLeastOnePed_result;
}