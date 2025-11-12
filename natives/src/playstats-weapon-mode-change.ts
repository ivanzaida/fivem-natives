import { EWeaponType, EWeaponcomponentType } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_WEAPON_MODE_CHANGE
 *
 * 0xA634868C7A532A58

 * 
 * This is a typo made by R. It's supposed to be called PLAYSTATS_WEAPON_MOD_CHANGE.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} weaponHash
 * @param {EWeaponcomponentType} modIdTo
 * @param {EWeaponcomponentType} modIdFrom
 */
export function playstatsWeaponModeChange(weaponHash: EWeaponType | number, modIdTo: EWeaponcomponentType | number, modIdFrom: EWeaponcomponentType | number): void {
	const playstatsWeaponModeChange_result = Citizen.invokeNative<void>('0xA634868C7A532A58', weaponHash, modIdTo, modIdFrom);
	return playstatsWeaponModeChange_result;
}