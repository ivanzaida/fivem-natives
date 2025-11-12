import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_HEALTH_RECHARGE_MULTIPLIER
 *
 * 0x02DC05627BC628AF

 * 
 * This function alters how quicky the players health can recharge
 * 
 * `regenRate`: The recharge multiplier, a value between 0.0 and 1.0.
 * Use 1.0 to reset it back to normal
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} mult
 */
export function setPlayerHealthRechargeMultiplier(player: PlayerIndex, mult: number): void {
	const setPlayerHealthRechargeMultiplier_result = Citizen.invokeNative<void>('0x02DC05627BC628AF', player, mult);
	return setPlayerHealthRechargeMultiplier_result;
}