import { EWeaponcomponentType, ModelNames } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_COMPONENT_VARIANT_EXTRA_MODEL
 *
 * 0xB7B32238BFF7DD76

 * 
 * Returns the model hash of the extra component at specified index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponcomponentType} weaponComponent
 * @param {number} extraComponent
 * @returns {ModelNames}  
 */
export function getWeaponComponentVariantExtraModel(weaponComponent: EWeaponcomponentType | number, extraComponent: number): ModelNames {
	const getWeaponComponentVariantExtraModel_result = Citizen.invokeNative<ModelNames>('0xB7B32238BFF7DD76', weaponComponent, extraComponent);
	return getWeaponComponentVariantExtraModel_result;
}