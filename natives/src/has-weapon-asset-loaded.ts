import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:HAS_WEAPON_ASSET_LOADED
 *
 * 0x92A65766A892EFC6

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @returns {boolean}  
 */
export function hasWeaponAssetLoaded(weaponType: EWeaponType | number): boolean {
	const hasWeaponAssetLoaded_result = Citizen.invokeNative<boolean>('0x92A65766A892EFC6', weaponType);
	return hasWeaponAssetLoaded_result;
}