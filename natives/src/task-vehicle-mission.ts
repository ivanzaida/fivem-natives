import { PedIndex, VehicleIndex, EVehicleMission, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_MISSION
 *
 * 0xB3DA477F44309390

 * 
 * missionType: https://alloc8or.re/gta5/doc/enums/eVehicleMissionType.txt
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {VehicleIndex} targetVehicle
 * @param {EVehicleMission} mission
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 * @param {number} targetReachedDist
 * @param {number} straightLineDist
 * @param {boolean} driveAgainstTraffic Being true allows the car to drive on the opposite side of the road into incoming traffic
 */
export function taskVehicleMission(ped: PedIndex, vehicle: VehicleIndex, targetVehicle: VehicleIndex, mission: EVehicleMission | number, cruiseSpeed: number, mode: EDrivingmode | number, targetReachedDist: number, straightLineDist: number, driveAgainstTraffic: boolean = true): void {
	const taskVehicleMission_result = Citizen.invokeNative<void>('0xB3DA477F44309390', ped, vehicle, targetVehicle, mission, cruiseSpeed, mode, targetReachedDist, straightLineDist, driveAgainstTraffic);
	return taskVehicleMission_result;
}