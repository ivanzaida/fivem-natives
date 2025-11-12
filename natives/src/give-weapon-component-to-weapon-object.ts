import { ObjectIndex, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:GIVE_WEAPON_COMPONENT_TO_WEAPON_OBJECT
 *
 * 0x93A0B91D4456D7E9

 * 
 * componentHash:
 * (use WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL() to get hash value)
 * ${component_at_ar_flsh}, ${component_at_ar_supp}, ${component_at_pi_flsh}, ${component_at_scope_large}, ${component_at_ar_supp_02}
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @param {EWeaponcomponentType} weaponComponent
 */
export function giveWeaponComponentToWeaponObject(weaponObject: ObjectIndex, weaponComponent: EWeaponcomponentType | number): void {
	const giveWeaponComponentToWeaponObject_result = Citizen.invokeNative<void>('0x93A0B91D4456D7E9', weaponObject, weaponComponent);
	return giveWeaponComponentToWeaponObject_result;
}