import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:RESTORE_PLAYER_STAMINA
 *
 * 0x92EBF838856DCF63

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} percent
 */
export function restorePlayerStamina(player: PlayerIndex, percent: number): void {
	const restorePlayerStamina_result = Citizen.invokeNative<void>('0x92EBF838856DCF63', player, percent);
	return restorePlayerStamina_result;
}