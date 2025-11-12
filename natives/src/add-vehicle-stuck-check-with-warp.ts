import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ADD_VEHICLE_STUCK_CHECK_WITH_WARP
 *
 * 0x177C21F54C9A6E9E

 * 
 * This command is similar to the basic ADD_STUCK_CAR_CHECK except that the game will attempt to warp the car as soon as it becomes stuck.
 * The three flags are used to control whether the car is warped if it has become stuck, as soon as it is upside-down or as soon as it is in water.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} minimumMoveDistance
 * @param {number} checkFrequency
 * @param {boolean} warpIfStuckFlag
 * @param {boolean} warpIfUpsideDownFlag
 * @param {boolean} warpIfInWaterFlag
 * @param {number} warpMethod
 */
export function addVehicleStuckCheckWithWarp(vehicle: VehicleIndex, minimumMoveDistance: number, checkFrequency: number, warpIfStuckFlag: boolean, warpIfUpsideDownFlag: boolean, warpIfInWaterFlag: boolean, warpMethod: number): void {
	const addVehicleStuckCheckWithWarp_result = Citizen.invokeNative<void>('0x177C21F54C9A6E9E', vehicle, minimumMoveDistance, checkFrequency, warpIfStuckFlag, warpIfUpsideDownFlag, warpIfInWaterFlag, warpMethod);
	return addVehicleStuckCheckWithWarp_result;
}