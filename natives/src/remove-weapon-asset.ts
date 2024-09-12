import { EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:REMOVE_WEAPON_ASSET
 *
 * 0xCF56BDC3BD787B97

 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 */
export function removeWeaponAsset(weaponType: EWeaponType | number): void {
	const removeWeaponAsset_result = Citizen.invokeNative<void>('0xCF56BDC3BD787B97', weaponType);
	return removeWeaponAsset_result;
}