import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_DOING_DRIVEBY
 *
 * 0xB29E06D8C7B733E6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedDoingDriveby(ped: PedIndex): boolean {
	const isPedDoingDriveby_result = Citizen.invokeNative<boolean>('0xB29E06D8C7B733E6', ped);
	return isPedDoingDriveby_result;
}