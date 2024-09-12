import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:CLEAR_PLAYER_HAS_DAMAGED_AT_LEAST_ONE_PED
 *
 * 0xAC7090FFDF63A3A0

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function clearPlayerHasDamagedAtLeastOnePed(player: PlayerIndex): void {
	const clearPlayerHasDamagedAtLeastOnePed_result = Citizen.invokeNative<void>('0xAC7090FFDF63A3A0', player);
	return clearPlayerHasDamagedAtLeastOnePed_result;
}