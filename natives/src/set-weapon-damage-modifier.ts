import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_WEAPON_DAMAGE_MODIFIER
 *
 * 0xD78F39BF33D61469

 * 
 * Changes the weapon damage output by the given multiplier value. Must be run every frame.
 * Full list of weapons by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {number} newModifier
 */
export function setWeaponDamageModifier(weaponType: EWeaponType | number, newModifier: number): void {
	const setWeaponDamageModifier_result = Citizen.invokeNative<void>('0xD78F39BF33D61469', weaponType, newModifier);
	return setWeaponDamageModifier_result;
}