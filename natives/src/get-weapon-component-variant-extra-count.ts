import { EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_COMPONENT_VARIANT_EXTRA_COUNT
 *
 * 0x879FF7169943DE79

 * 
 * Returns the amount of extra components the specified component has.
 * Returns -1 if the component isn't of type CWeaponComponentVariantModel.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponcomponentType} weaponComponent
 * @returns {number}  
 */
export function getWeaponComponentVariantExtraCount(weaponComponent: EWeaponcomponentType | number): number {
	const getWeaponComponentVariantExtraCount_result = Citizen.invokeNative<number>('0x879FF7169943DE79', weaponComponent);
	return getWeaponComponentVariantExtraCount_result;
}