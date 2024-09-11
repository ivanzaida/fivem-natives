import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_TURBO_PRESSURE
 *
 * 0XE02B51D7

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleTurboPressure(vehicle: VehicleIndex): number {
	const getVehicleTurboPressure_result = Citizen.invokeNative<number>('0XE02B51D7', vehicle);
	return getVehicleTurboPressure_result;
}