import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:WAS_PED_KILLED_BY_STEALTH
 *
 * 0x5BDFCAB88CC62A9B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function wasPedKilledByStealth(ped: PedIndex): boolean {
	const wasPedKilledByStealth_result = Citizen.invokeNative<boolean>('0x5BDFCAB88CC62A9B', ped);
	return wasPedKilledByStealth_result;
}