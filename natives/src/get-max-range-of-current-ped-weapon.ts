import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:GET_MAX_RANGE_OF_CURRENT_PED_WEAPON
 *
 * 0x33D6B8520C268EC8

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getMaxRangeOfCurrentPedWeapon(ped: PedIndex): number {
	const getMaxRangeOfCurrentPedWeapon_result = Citizen.invokeNative<number>('0x33D6B8520C268EC8', ped);
	return getMaxRangeOfCurrentPedWeapon_result;
}