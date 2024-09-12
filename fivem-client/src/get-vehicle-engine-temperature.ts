import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_ENGINE_TEMPERATURE
 *
 * 0xF4F495CB

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleEngineTemperature(vehicle: VehicleIndex): number {
	const getVehicleEngineTemperature_result = Citizen.invokeNative<number>('0xF4F495CB', vehicle);
	return getVehicleEngineTemperature_result;
}