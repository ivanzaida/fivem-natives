import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ALLOW_VEHICLES_OVERRIDE
 *
 * 0x9A74653FD0288BAB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} onOff
 */
export function setPedAllowVehiclesOverride(ped: PedIndex, onOff: boolean): void {
	const setPedAllowVehiclesOverride_result = Citizen.invokeNative<void>('0x9A74653FD0288BAB', ped, onOff);
	return setPedAllowVehiclesOverride_result;
}