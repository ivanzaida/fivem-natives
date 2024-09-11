import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_ON_SPECIFIC_VEHICLE
 *
 * 0x6A89FD77560DE959

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isPedOnSpecificVehicle(ped: PedIndex, vehicle: VehicleIndex): boolean {
	const isPedOnSpecificVehicle_result = Citizen.invokeNative<boolean>('0x6A89FD77560DE959', ped, vehicle);
	return isPedOnSpecificVehicle_result;
}