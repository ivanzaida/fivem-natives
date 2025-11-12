import { PedIndex, VehicleIndex, EVehicleMission, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_MISSION_COORS_TARGET
 *
 * 0x30CCF17FEE4BDA53

 * 
 * See TASK_VEHICLE_MISSION
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {EVehicleMission} mission
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 * @param {number} targetReachedDist
 * @param {number} straightLineDist
 * @param {boolean} driveAgainstTraffic Being true allows the car to drive on the opposite side of the road into incoming traffic
 */
export function taskVehicleMissionCoorsTarget(ped: PedIndex, vehicle: VehicleIndex, coorsX: number, coorsY: number, coorsZ: number, mission: EVehicleMission | number, cruiseSpeed: number, mode: EDrivingmode | number, targetReachedDist: number, straightLineDist: number, driveAgainstTraffic: boolean = true): void {
	const taskVehicleMissionCoorsTarget_result = Citizen.invokeNative<void>('0x30CCF17FEE4BDA53', ped, vehicle, coorsX, coorsY, coorsZ, mission, cruiseSpeed, mode, targetReachedDist, straightLineDist, driveAgainstTraffic);
	return taskVehicleMissionCoorsTarget_result;
}