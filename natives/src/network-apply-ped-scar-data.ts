import { PedIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_APPLY_PED_SCAR_DATA
 *
 * 0xF92FD7949E52DEA2

 * 
 * Applies current saved scar data to ped with PED_INDEX PedIndex
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} characterSlot
 */
export function networkApplyPedScarData(ped: PedIndex, characterSlot: number): void {
	const networkApplyPedScarData_result = Citizen.invokeNative<void>('0xF92FD7949E52DEA2', ped, characterSlot);
	return networkApplyPedScarData_result;
}