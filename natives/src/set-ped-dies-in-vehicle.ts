import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_DIES_IN_VEHICLE
 *
 * 0xD394176EC453FD41

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} dieInCarFlag
 */
export function setPedDiesInVehicle(ped: PedIndex, dieInCarFlag: boolean): void {
	const setPedDiesInVehicle_result = Citizen.invokeNative<void>('0xD394176EC453FD41', ped, dieInCarFlag);
	return setPedDiesInVehicle_result;
}