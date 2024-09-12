import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER
 *
 * 0X27E94EF8

 * A getter for [SET_PLAYER_MELEE_WEAPON_DEFENSE_MODIFIER](#_0xAE540335B4ABC4E2).
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player melee weapon defense modifier.
 */
export function getPlayerMeleeWeaponDefenseModifier(playerId: PlayerIndex): number {
	const getPlayerMeleeWeaponDefenseModifier_result = Citizen.invokeNative<number>('0X27E94EF8', playerId);
	return getPlayerMeleeWeaponDefenseModifier_result;
}