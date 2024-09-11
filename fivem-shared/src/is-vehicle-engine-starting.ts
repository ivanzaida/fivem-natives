import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_ENGINE_STARTING
 *
 * 0XBB340D04

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleEngineStarting(vehicle: VehicleIndex): boolean {
	const isVehicleEngineStarting_result = Citizen.invokeNative<boolean>('0XBB340D04', vehicle);
	return isVehicleEngineStarting_result;
}