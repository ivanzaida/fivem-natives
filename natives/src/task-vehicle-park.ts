import { PedIndex, VehicleIndex, EParkType } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_PARK
 *
 * 0x2D864CC37DDFA963

 * 
 * Modes:
 * 0 - ignore heading
 * 1 - park forward
 * 2 - park backwards
 * 
 * Depending on the angle of approach, the vehicle can park at the specified heading or at its exact opposite (-180) angle.
 * 
 * Radius seems to define how close the vehicle has to be -after parking- to the position for this task considered completed. If the value is too small, the vehicle will try to park again until it's exactly where it should be. 20.0 Works well but lower values don't, like the radius is measured in centimeters or something.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} parkingSpaceCoordsX
 * @param {number} parkingSpaceCoordsY
 * @param {number} parkingSpaceCoordsZ
 * @param {number} directionDegrees
 * @param {EParkType} parkType
 * @param {number} toleranceDegrees If the vehicle's heading isn't within this amount of the Direction param, the vehicle will back up and try to straighten itself out
 * @param {boolean} keepLightsOn If true, keep the lights on after parking
 */
export function taskVehiclePark(ped: PedIndex, vehicle: VehicleIndex, parkingSpaceCoordsX: number, parkingSpaceCoordsY: number, parkingSpaceCoordsZ: number, directionDegrees: number, parkType: EParkType | number, toleranceDegrees: number = 10, keepLightsOn: boolean = false): void {
	const taskVehiclePark_result = Citizen.invokeNative<void>('0x2D864CC37DDFA963', ped, vehicle, parkingSpaceCoordsX, parkingSpaceCoordsY, parkingSpaceCoordsZ, directionDegrees, parkType, toleranceDegrees, keepLightsOn);
	return taskVehiclePark_result;
}