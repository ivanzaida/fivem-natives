import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_IS_DUMMY
 *
 * 0x38779AA6147A1831

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getVehicleIsDummy(vehicle: VehicleIndex): boolean {
	const getVehicleIsDummy_result = Citizen.invokeNative<boolean>('0x38779AA6147A1831', vehicle);
	return getVehicleIsDummy_result;
}