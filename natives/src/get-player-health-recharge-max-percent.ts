import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_HEALTH_RECHARGE_MAX_PERCENT
 *
 * 0x4FF4A601A84AE24A

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerHealthRechargeMaxPercent(player: PlayerIndex): number {
	const getPlayerHealthRechargeMaxPercent_result = Citizen.invokeNative<number>('0x4FF4A601A84AE24A', player);
	return getPlayerHealthRechargeMaxPercent_result;
}