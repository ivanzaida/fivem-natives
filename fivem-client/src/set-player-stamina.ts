import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_PLAYER_STAMINA
 *
 * 0XA9EC16C7

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index
 * @param {number} stamina The value you want to set
 * @returns {boolean}  Did you manage to set the value.
 */
export function setPlayerStamina(playerId: PlayerIndex, stamina: number): boolean {
	const setPlayerStamina_result = Citizen.invokeNative<boolean>('0XA9EC16C7', playerId, stamina);
	return setPlayerStamina_result;
}