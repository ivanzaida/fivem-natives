import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_UNDERWATER_BREATH_PERCENT_REMAINING
 *
 * 0x932BEE6E64F0144E

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} percent
 * @returns {number}  
 */
export function setPlayerUnderwaterBreathPercentRemaining(player: PlayerIndex, percent: number): number {
	const setPlayerUnderwaterBreathPercentRemaining_result = Citizen.invokeNative<number>('0x932BEE6E64F0144E', player, percent);
	return setPlayerUnderwaterBreathPercentRemaining_result;
}