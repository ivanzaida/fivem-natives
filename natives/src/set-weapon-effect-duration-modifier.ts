import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_WEAPON_EFFECT_DURATION_MODIFIER
 *
 * 0xD0E4082BC9A5DC1E

 * 
 * ex, WEAPON::SET_WEAPON_EFFECT_DURATION_MODIFIER(joaat("vehicle_weapon_mine_slick"), 1.0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {number} newModifier
 */
export function setWeaponEffectDurationModifier(weaponType: EWeaponType | number, newModifier: number): void {
	const setWeaponEffectDurationModifier_result = Citizen.invokeNative<void>('0xD0E4082BC9A5DC1E', weaponType, newModifier);
	return setWeaponEffectDurationModifier_result;
}