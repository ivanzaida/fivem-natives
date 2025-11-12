import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLANE_ENGINE_HEALTH
 *
 * 0x31D57F4EF7BE9F0B

 * 
 * Works just like SET_VEHICLE_ENGINE_HEALTH, but only for planes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} health
 */
export function setPlaneEngineHealth(vehicle: VehicleIndex, health: number): void {
	const setPlaneEngineHealth_result = Citizen.invokeNative<void>('0x31D57F4EF7BE9F0B', vehicle, health);
	return setPlaneEngineHealth_result;
}