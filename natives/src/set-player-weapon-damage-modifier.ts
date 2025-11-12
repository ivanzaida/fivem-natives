import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_WEAPON_DAMAGE_MODIFIER
 *
 * 0x148193D59AAB6D14

 * 
 * This function will change the given players damage multiplier
 * 
 * This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.
 * 
 * Based on tests, it is unlikely to be a multiplier.
 * 
 * modifier's min value is 0.1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} modifier
 */
export function setPlayerWeaponDamageModifier(player: PlayerIndex, modifier: number): void {
	const setPlayerWeaponDamageModifier_result = Citizen.invokeNative<void>('0x148193D59AAB6D14', player, modifier);
	return setPlayerWeaponDamageModifier_result;
}