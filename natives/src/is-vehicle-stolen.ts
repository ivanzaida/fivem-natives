import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_STOLEN
 *
 * 0xFDA2576D37032738

 * 
 * Only returns true if the vehicle was marked as stolen with SET_VEHICLE_IS_STOLEN.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleStolen(vehicle: VehicleIndex): boolean {
	const isVehicleStolen_result = Citizen.invokeNative<boolean>('0xFDA2576D37032738', vehicle);
	return isVehicleStolen_result;
}