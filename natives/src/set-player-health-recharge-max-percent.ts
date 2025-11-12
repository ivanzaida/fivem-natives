import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_HEALTH_RECHARGE_MAX_PERCENT
 *
 * 0xE968651CFDDDE20B

 * 
 * This function alters the maximum percentage that a player's health can recharge to
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} percent
 */
export function setPlayerHealthRechargeMaxPercent(player: PlayerIndex, percent: number): void {
	const setPlayerHealthRechargeMaxPercent_result = Citizen.invokeNative<void>('0xE968651CFDDDE20B', player, percent);
	return setPlayerHealthRechargeMaxPercent_result;
}