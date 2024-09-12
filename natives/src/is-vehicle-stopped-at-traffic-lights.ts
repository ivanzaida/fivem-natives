import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_STOPPED_AT_TRAFFIC_LIGHTS
 *
 * 0xC182FBFDE4682BA3

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleStoppedAtTrafficLights(vehicle: VehicleIndex): boolean {
	const isVehicleStoppedAtTrafficLights_result = Citizen.invokeNative<boolean>('0xC182FBFDE4682BA3', vehicle);
	return isVehicleStoppedAtTrafficLights_result;
}