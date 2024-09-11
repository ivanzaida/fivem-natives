import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_MAX_STAMINA
 *
 * 0X35594F67

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index
 * @param {number} maxStamina The value you want to set
 * @returns {boolean}  Did you manage to set the value.
 */
export function setPlayerMaxStamina(playerId: PlayerIndex, maxStamina: number): boolean {
	const setPlayerMaxStamina_result = Citizen.invokeNative<boolean>('0X35594F67', playerId, maxStamina);
	return setPlayerMaxStamina_result;
}