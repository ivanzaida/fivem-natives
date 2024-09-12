import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:GET_VEHICLE_PED_IS_TRYING_TO_ENTER
 *
 * 0xF9F8E3060F7CAEDB

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {number}  
 */
export function getVehiclePedIsTryingToEnter(ped: PedIndex): number {
	const getVehiclePedIsTryingToEnter_result = Citizen.invokeNative<number>('0xF9F8E3060F7CAEDB', ped);
	return getVehiclePedIsTryingToEnter_result;
}