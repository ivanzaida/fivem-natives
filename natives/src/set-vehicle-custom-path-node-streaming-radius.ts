import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CUSTOM_PATH_NODE_STREAMING_RADIUS
 *
 * 0x5D97A268AAF6B6AB

 * 
 * Modify the radius at which a vehicle will automatically try and bring in path nodes.
 * Default for mission vehicles is 300, and anything lower than this value will be ignored
 * PLEASE use sparingly
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} radius
 */
export function setVehicleCustomPathNodeStreamingRadius(vehicle: VehicleIndex, radius: number): void {
	const setVehicleCustomPathNodeStreamingRadius_result = Citizen.invokeNative<void>('0x5D97A268AAF6B6AB', vehicle, radius);
	return setVehicleCustomPathNodeStreamingRadius_result;
}