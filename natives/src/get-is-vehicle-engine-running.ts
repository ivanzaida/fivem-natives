import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_VEHICLE_ENGINE_RUNNING
 *
 * 0x182BD9AD1675B5DE

 * 
 * Returns true when in a vehicle, false whilst entering/exiting.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehicleEngineRunning(vehicle: VehicleIndex): boolean {
	const getIsVehicleEngineRunning_result = Citizen.invokeNative<boolean>('0x182BD9AD1675B5DE', vehicle);
	return getIsVehicleEngineRunning_result;
}