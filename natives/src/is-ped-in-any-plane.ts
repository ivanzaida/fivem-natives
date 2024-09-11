import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_ANY_PLANE
 *
 * 0xC5F2281709805477

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInAnyPlane(ped: PedIndex): boolean {
	const isPedInAnyPlane_result = Citizen.invokeNative<boolean>('0xC5F2281709805477', ped);
	return isPedInAnyPlane_result;
}