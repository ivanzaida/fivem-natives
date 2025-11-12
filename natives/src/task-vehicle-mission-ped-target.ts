import { PedIndex, VehicleIndex, EVehicleMission, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_MISSION_PED_TARGET
 *
 * 0x13DE13EA38996410

 * 
 * See TASK_VEHICLE_MISSION
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {PedIndex} targetPed
 * @param {EVehicleMission} mission
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 * @param {number} targetReachedDist
 * @param {number} straightLineDist
 * @param {boolean} driveAgainstTraffic Being true allows the car to drive on the opposite side of the road into incoming traffic
 */
export function taskVehicleMissionPedTarget(ped: PedIndex, vehicle: VehicleIndex, targetPed: PedIndex, mission: EVehicleMission | number, cruiseSpeed: number, mode: EDrivingmode | number, targetReachedDist: number, straightLineDist: number, driveAgainstTraffic: boolean = true): void {
	const taskVehicleMissionPedTarget_result = Citizen.invokeNative<void>('0x13DE13EA38996410', ped, vehicle, targetPed, mission, cruiseSpeed, mode, targetReachedDist, straightLineDist, driveAgainstTraffic);
	return taskVehicleMissionPedTarget_result;
}