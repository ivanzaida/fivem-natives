import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_STAY_IN_VEHICLE_WHEN_JACKED
 *
 * 0x3CDDF07147FB8B6F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} stayInCarFlag
 */
export function setPedStayInVehicleWhenJacked(ped: PedIndex, stayInCarFlag: boolean): void {
	const setPedStayInVehicleWhenJacked_result = Citizen.invokeNative<void>('0x3CDDF07147FB8B6F', ped, stayInCarFlag);
	return setPedStayInVehicleWhenJacked_result;
}