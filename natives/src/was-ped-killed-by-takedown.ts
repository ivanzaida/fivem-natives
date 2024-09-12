import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:WAS_PED_KILLED_BY_TAKEDOWN
 *
 * 0xD9F6166CE6292D26

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function wasPedKilledByTakedown(ped: PedIndex): boolean {
	const wasPedKilledByTakedown_result = Citizen.invokeNative<boolean>('0xD9F6166CE6292D26', ped);
	return wasPedKilledByTakedown_result;
}