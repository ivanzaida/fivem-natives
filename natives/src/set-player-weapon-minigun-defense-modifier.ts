import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WEAPON_MINIGUN_DEFENSE_MODIFIER
 *
 * 0x10F23FF10E9AA211

 * 
 * This function will change the given players defense multiplier against damage
 * 
 * modifier's min value is 0.1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 */
export function setPlayerWeaponMinigunDefenseModifier(player: PlayerIndex, modifier: number): void {
	const setPlayerWeaponMinigunDefenseModifier_result = Citizen.invokeNative<void>('0x10F23FF10E9AA211', player, modifier);
	return setPlayerWeaponMinigunDefenseModifier_result;
}