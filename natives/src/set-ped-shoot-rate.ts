import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SHOOT_RATE
 *
 * 0x39256A89E9D7464A

 * 
 * shootRate 0-1000
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} shootRate
 */
export function setPedShootRate(ped: PedIndex, shootRate: number): void {
	const setPedShootRate_result = Citizen.invokeNative<void>('0x39256A89E9D7464A', ped, shootRate);
	return setPedShootRate_result;
}