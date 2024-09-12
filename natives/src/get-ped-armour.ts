import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_PED_ARMOUR
 *
 * 0xE5E6F6EFCE07789A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getPedArmour(ped: PedIndex): number {
	const getPedArmour_result = Citizen.invokeNative<number>('0xE5E6F6EFCE07789A', ped);
	return getPedArmour_result;
}