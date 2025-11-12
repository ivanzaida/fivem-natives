import { PedIndex, EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_PED_WEAPON_COMPONENT_TINT_INDEX
 *
 * 0xB6209D82C643428C

 * 
 * Returns -1 if camoComponentHash is invalid/not attached to the weapon.
 * Full list of weapons, components, tint indexes & weapon liveries by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} weaponType
 * @param {EWeaponcomponentType} componentType
 * @returns {number}  
 */
export function getPedWeaponComponentTintIndex(ped: PedIndex, weaponType: EWeaponType | number, componentType: EWeaponcomponentType | number): number {
	const getPedWeaponComponentTintIndex_result = Citizen.invokeNative<number>('0xB6209D82C643428C', ped, weaponType, componentType);
	return getPedWeaponComponentTintIndex_result;
}