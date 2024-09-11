import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_ANY_HELI
 *
 * 0xFE90F09EC43D7D44

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInAnyHeli(ped: PedIndex): boolean {
	const isPedInAnyHeli_result = Citizen.invokeNative<boolean>('0xFE90F09EC43D7D44', ped);
	return isPedInAnyHeli_result;
}