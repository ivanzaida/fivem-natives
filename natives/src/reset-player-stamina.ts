import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:RESET_PLAYER_STAMINA
 *
 * 0x336E2A96F643C9D5

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function resetPlayerStamina(player: PlayerIndex): void {
	const resetPlayerStamina_result = Citizen.invokeNative<void>('0x336E2A96F643C9D5', player);
	return resetPlayerStamina_result;
}