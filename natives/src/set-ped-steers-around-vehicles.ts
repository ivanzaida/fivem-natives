import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STEERS_AROUND_VEHICLES
 *
 * 0x98692EF468EC3185

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} state
 */
export function setPedSteersAroundVehicles(ped: PedIndex, state: boolean): void {
	const setPedSteersAroundVehicles_result = Citizen.invokeNative<void>('0x98692EF468EC3185', ped, state);
	return setPedSteersAroundVehicles_result;
}