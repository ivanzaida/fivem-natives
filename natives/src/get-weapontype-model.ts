import { EWeaponType, ModelNames } from '@ivanzaida/structures'

/**
 * WEAPON:GET_WEAPONTYPE_MODEL
 *
 * 0xA0A2925EDC6DDA6D

 * 
 * Returns the model of any weapon.
 * 
 * Can also take an ammo hash?
 * sub_6663a(&l_115B, WEAPON::GET_WEAPONTYPE_MODEL(${ammo_rpg}));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weapon
 * @returns {ModelNames}  
 */
export function getWeapontypeModel(weapon: EWeaponType | number): ModelNames {
	const getWeapontypeModel_result = Citizen.invokeNative<ModelNames>('0xA0A2925EDC6DDA6D', weapon);
	return getWeapontypeModel_result;
}