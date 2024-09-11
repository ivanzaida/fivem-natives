import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_WEAPON_AOE_MODIFIER
 *
 * 0xBB74EE81E0CA2E98

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {number} newModifier
 */
export function setWeaponAoeModifier(weaponType: EWeaponType | number, newModifier: number): void {
	const setWeaponAoeModifier_result = Citizen.invokeNative<void>('0xBB74EE81E0CA2E98', weaponType, newModifier);
	return setWeaponAoeModifier_result;
}