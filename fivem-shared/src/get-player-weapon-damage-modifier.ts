import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_WEAPON_DAMAGE_MODIFIER
 *
 * 0X2A3D7CDA

 * A getter for [SET_PLAYER_WEAPON_DAMAGE_MODIFIER](#_0xCE07B9F7817AADA3).
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} playerId The player index.
 * @returns {number}  The value of player weapon damage modifier.
 */
export function getPlayerWeaponDamageModifier(playerId: PlayerIndex): number {
	const getPlayerWeaponDamageModifier_result = Citizen.invokeNative<number>('0X2A3D7CDA', playerId);
	return getPlayerWeaponDamageModifier_result;
}