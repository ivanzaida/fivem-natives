import { EWeaponType, ModelNames, ObjectIndex } from '@ivanzaida/structures'

/**
 * WEAPON:CREATE_WEAPON_OBJECT
 *
 * 0x8A3572575D91006C

 * 
 * Now has 8 params.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {number} amountOfAmmo
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} createDefaultComponents
 * @param {number} scale
 * @param {ModelNames} customModel
 * @param {boolean} registerAsNetworkObject
 * @param {boolean} scriptHostObject
 * @returns {ObjectIndex}  
 */
export function createWeaponObject(weaponType: EWeaponType | number, amountOfAmmo: number, newCoorsX: number, newCoorsY: number, newCoorsZ: number, createDefaultComponents: boolean, scale: number = 1, customModel: ModelNames = 0, registerAsNetworkObject: boolean = false, scriptHostObject: boolean = true): ObjectIndex {
	const createWeaponObject_result = Citizen.invokeNative<ObjectIndex>('0x8A3572575D91006C', weaponType, amountOfAmmo, newCoorsX, newCoorsY, newCoorsZ, createDefaultComponents, scale, customModel, registerAsNetworkObject, scriptHostObject);
	return createWeaponObject_result;
}