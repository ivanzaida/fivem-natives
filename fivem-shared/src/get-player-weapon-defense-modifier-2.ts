import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_WEAPON_DEFENSE_MODIFIER_2
 *
 * 0X986B65FF

 * A getter for [_SET_PLAYER_WEAPON_DEFENSE_MODIFIER_2](#_0xBCFDE9EDE4CF27DC).
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player weapon defense modifier 2.
 */
export function getPlayerWeaponDefenseModifier_2(playerId: PlayerIndex): number {
	const getPlayerWeaponDefenseModifier_2_result = Citizen.invokeNative<number>('0X986B65FF', playerId);
	return getPlayerWeaponDefenseModifier_2_result;
}