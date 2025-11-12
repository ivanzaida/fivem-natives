import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_CAN_BE_HASSLED_BY_GANGS
 *
 * 0x9856853A6FCF4F85

 * 
 * Sets whether this player can be hassled by gangs.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} canBeHassled
 */
export function setPlayerCanBeHassledByGangs(player: PlayerIndex, canBeHassled: boolean): void {
	const setPlayerCanBeHassledByGangs_result = Citizen.invokeNative<void>('0x9856853A6FCF4F85', player, canBeHassled);
	return setPlayerCanBeHassledByGangs_result;
}