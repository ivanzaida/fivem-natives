import { PedIndex, EAmmoType } from '@ivanzaida/structures'

/**
 * WEAPON:GET_PED_AMMO_BY_TYPE
 *
 * 0xFC4FF8B60E6C8641

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAmmoType} ammoType
 * @returns {number}  
 */
export function getPedAmmoByType(ped: PedIndex, ammoType: EAmmoType | number): number {
	const getPedAmmoByType_result = Citizen.invokeNative<number>('0xFC4FF8B60E6C8641', ped, ammoType);
	return getPedAmmoByType_result;
}