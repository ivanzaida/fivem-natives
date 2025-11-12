import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * 0xE8522D58

 * 
 * Returns the license plate text from a vehicle. 8 chars maximum.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {string}  
 */
export function getVehicleNumberPlateText(vehicle: VehicleIndex): string {
	const getVehicleNumberPlateText_result = Citizen.invokeNative<string>('0xE8522D58', vehicle);
	return getVehicleNumberPlateText_result;
}