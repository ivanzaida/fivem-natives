import { EWeaponcomponentType, ModelNames } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPON_COMPONENT_TYPE_MODEL
 *
 * 0xB39F6B1C186F538E

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponcomponentType} weaponComponent
 * @returns {ModelNames}  
 */
export function getWeaponComponentTypeModel(weaponComponent: EWeaponcomponentType | number): ModelNames {
	const getWeaponComponentTypeModel_result = Citizen.invokeNative<ModelNames>('0xB39F6B1C186F538E', weaponComponent);
	return getWeaponComponentTypeModel_result;
}