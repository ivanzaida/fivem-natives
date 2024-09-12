import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_WEAPON_DEFENSE_MODIFIER
 *
 * 0xF1543251

 * A getter for [SET_PLAYER_WEAPON_DEFENSE_MODIFIER](#_0x2D83BC011CA14A3C).
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player weapon defense modifier.
 */
export function getPlayerWeaponDefenseModifier(playerId: PlayerIndex): number {
	const getPlayerWeaponDefenseModifier_result = Citizen.invokeNative<number>('0xF1543251', playerId);
	return getPlayerWeaponDefenseModifier_result;
}