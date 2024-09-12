import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_ENGINE_TEMPERATURE
 *
 * 0X6C93C4A9

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} temperature
 */
export function setVehicleEngineTemperature(vehicle: VehicleIndex, temperature: number): void {
	const setVehicleEngineTemperature_result = Citizen.invokeNative<void>('0X6C93C4A9', vehicle, temperature);
	return setVehicleEngineTemperature_result;
}