import { VehicleIndex, ENeonId } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NEON_ENABLED
 *
 * 0xE62930EC6FAABCA5

 * 
 * Sets the neon lights of the specified vehicle on/off.
 * 
 * Indices:
 * 0 = Left
 * 1 = Right
 * 2 = Front
 * 3 = Back
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {ENeonId} neon
 * @param {boolean} enabled
 */
export function setVehicleNeonEnabled(vehicle: VehicleIndex, neon: ENeonId | number, enabled: boolean): void {
	const setVehicleNeonEnabled_result = Citizen.invokeNative<void>('0xE62930EC6FAABCA5', vehicle, neon, enabled);
	return setVehicleNeonEnabled_result;
}