import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_MAX_TRACTION
 *
 * 0x122F64C5BECB5454

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleMaxTraction(vehicle: VehicleIndex): number {
	const getVehicleMaxTraction_result = Citizen.invokeNative<number>('0x122F64C5BECB5454', vehicle);
	return getVehicleMaxTraction_result;
}