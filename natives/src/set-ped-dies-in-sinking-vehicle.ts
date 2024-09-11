import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DIES_IN_SINKING_VEHICLE
 *
 * 0xA39E0AA2C6BBD52E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} drownsInSinkingVehFlag
 */
export function setPedDiesInSinkingVehicle(ped: PedIndex, drownsInSinkingVehFlag: boolean): void {
	const setPedDiesInSinkingVehicle_result = Citizen.invokeNative<void>('0xA39E0AA2C6BBD52E', ped, drownsInSinkingVehFlag);
	return setPedDiesInSinkingVehicle_result;
}