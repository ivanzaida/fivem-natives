import { EWeaponType, EExtraWeaponComponentResourceFlags } from '@ivanzaida/structures'

/**
 * WEAPON:REQUEST_WEAPON_ASSET
 *
 * 0xA10F939489C3BE61

 * 
 * Nearly every instance of p1 I found was 31. Nearly every instance of p2 I found was 0.
 * 
 * REQUEST_WEAPON_ASSET(iLocal_1888, 31, 26);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponType
 * @param {number} weaponResourceFlags
 * @param {EExtraWeaponComponentResourceFlags} extraWeaponComponentFlags Used to load the nondefault weapon components.
 */
export function requestWeaponAsset(weaponType: EWeaponType | number, weaponResourceFlags: number = 31, extraWeaponComponentFlags: EExtraWeaponComponentResourceFlags | number = 0): void {
	const requestWeaponAsset_result = Citizen.invokeNative<void>('0xA10F939489C3BE61', weaponType, weaponResourceFlags, extraWeaponComponentFlags);
	return requestWeaponAsset_result;
}