import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER
 *
 * 0x8689A825

 * A getter for [SET_PLAYER_MELEE_WEAPON_DAMAGE_MODIFIER](#_0x4A3DC7ECCC321032).
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  Returns player melee weapon damage modifier value.
 */
export function getPlayerMeleeWeaponDamageModifier(playerId: PlayerIndex): number {
	const getPlayerMeleeWeaponDamageModifier_result = Citizen.invokeNative<number>('0x8689A825', playerId);
	return getPlayerMeleeWeaponDamageModifier_result;
}