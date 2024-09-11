import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_STEER_FOR_BUILDINGS
 *
 * 0xE02B4E5EE15725CC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} steerForBuildings
 */
export function setVehicleSteerForBuildings(vehicle: VehicleIndex, steerForBuildings: boolean): void {
	const setVehicleSteerForBuildings_result = Citizen.invokeNative<void>('0xE02B4E5EE15725CC', vehicle, steerForBuildings);
	return setVehicleSteerForBuildings_result;
}