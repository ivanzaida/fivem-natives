import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_TASK_VEHICLE_GOTO_PLANE_MIN_HEIGHT_ABOVE_TERRAIN
 *
 * 0x1B8AC60684718568

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} minHeightAboveTerrain
 */
export function setTaskVehicleGotoPlaneMinHeightAboveTerrain(vehicle: VehicleIndex, minHeightAboveTerrain: number): void {
	const setTaskVehicleGotoPlaneMinHeightAboveTerrain_result = Citizen.invokeNative<void>('0x1B8AC60684718568', vehicle, minHeightAboveTerrain);
	return setTaskVehicleGotoPlaneMinHeightAboveTerrain_result;
}