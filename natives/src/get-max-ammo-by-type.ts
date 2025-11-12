import { PedIndex, EAmmoType, IntRef } from '@ivanzaida/structures'

/**
 * WEAPON:GET_MAX_AMMO_BY_TYPE
 *
 * 0xC38311CAC7220555

 * 
 * Returns the max ammo for an ammo type. Ammo types: https://gist.github.com/root-cause/faf41f59f7a6d818b7db0b839bd147c1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAmmoType} ammoType
 * @param {IntRef} outMaxAmmo [Ref]
 * @returns {boolean}  
 */
export function getMaxAmmoByType(ped: PedIndex, ammoType: EAmmoType | number, outMaxAmmo: IntRef /* ptr */): boolean {
	const getMaxAmmoByType_result = Citizen.invokeNative<boolean>('0xC38311CAC7220555', ped, ammoType, outMaxAmmo.dataView);
	return getMaxAmmoByType_result;
}