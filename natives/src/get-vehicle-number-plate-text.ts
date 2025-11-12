import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * 0xCA7159F2C5FF745A

 * 
 * Returns the license plate text from a vehicle. 8 chars maximum.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {string}  
 */
export function getVehicleNumberPlateText(vehicle: VehicleIndex): string {
	const getVehicleNumberPlateText_result = Citizen.invokeNative<string>('0xCA7159F2C5FF745A', vehicle);
	return getVehicleNumberPlateText_result;
}