import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_SPRINT_STAMINA_REMAINING
 *
 * 0x03689A4961280354

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {number}  
 */
export function getPlayerSprintStaminaRemaining(player: PlayerIndex): number {
	const getPlayerSprintStaminaRemaining_result = Citizen.invokeNative<number>('0x03689A4961280354', player);
	return getPlayerSprintStaminaRemaining_result;
}