import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_LOCKON_RANGE_OVERRIDE
 *
 * 0xE7B6A36E4BDF7C4C

 * 
 * Affects the range of auto aim target.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} range
 */
export function setPlayerLockonRangeOverride(player: PlayerIndex, range: number): void {
	const setPlayerLockonRangeOverride_result = Citizen.invokeNative<void>('0xE7B6A36E4BDF7C4C', player, range);
	return setPlayerLockonRangeOverride_result;
}