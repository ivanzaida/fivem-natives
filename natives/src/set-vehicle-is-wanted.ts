import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_IS_WANTED
 *
 * 0xDC05A8A020E60C86

 * 
 * Sets the wanted state of this vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} isWanted
 */
export function setVehicleIsWanted(vehicle: VehicleIndex, isWanted: boolean): void {
	const setVehicleIsWanted_result = Citizen.invokeNative<void>('0xDC05A8A020E60C86', vehicle, isWanted);
	return setVehicleIsWanted_result;
}