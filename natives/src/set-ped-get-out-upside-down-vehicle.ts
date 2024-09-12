import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_GET_OUT_UPSIDE_DOWN_VEHICLE
 *
 * 0x379E96D5D36B27DC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} getOutFlag
 */
export function setPedGetOutUpsideDownVehicle(ped: PedIndex, getOutFlag: boolean): void {
	const setPedGetOutUpsideDownVehicle_result = Citizen.invokeNative<void>('0x379E96D5D36B27DC', ped, getOutFlag);
	return setPedGetOutUpsideDownVehicle_result;
}