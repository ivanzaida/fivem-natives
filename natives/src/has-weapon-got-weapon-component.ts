import { ObjectIndex, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:HAS_WEAPON_GOT_WEAPON_COMPONENT
 *
 * 0x7B5835DBE90FBDED

 * 
 * see DOES_WEAPON_TAKE_WEAPON_COMPONENT for full list of weapons & components
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} weaponObject
 * @param {EWeaponcomponentType} weaponComponent
 * @returns {boolean}  
 */
export function hasWeaponGotWeaponComponent(weaponObject: ObjectIndex, weaponComponent: EWeaponcomponentType | number): boolean {
	const hasWeaponGotWeaponComponent_result = Citizen.invokeNative<boolean>('0x7B5835DBE90FBDED', weaponObject, weaponComponent);
	return hasWeaponGotWeaponComponent_result;
}