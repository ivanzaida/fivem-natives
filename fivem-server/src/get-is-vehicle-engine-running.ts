import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_IS_VEHICLE_ENGINE_RUNNING
 *
 * 0x7DC6D022

 * 
 * Returns true when in a vehicle, false whilst entering/exiting.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehicleEngineRunning(vehicle: VehicleIndex): boolean {
	const getIsVehicleEngineRunning_result = Citizen.invokeNative<boolean>('0x7DC6D022', vehicle);
	return getIsVehicleEngineRunning_result;
}