import { PedIndex, VehicleIndex, EDrivingmode, EEwaypointFollowFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_FOLLOW_WAYPOINT_RECORDING
 *
 * 0x43E9B2BD3668B432

 * 
 * p2 = Waypoint recording string (found in update\update.rpf\x64\levels\gta5\waypointrec.rpf
 * p3 = 786468
 * p4 = 0
 * p5 = 16
 * p6 = -1 (angle?)
 * p7/8/9 = usually v3.zero
 * p10 = bool (repeat?)
 * p11 = 1073741824
 * 
 * Full list of waypoint recordings by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/waypointRecordings.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {string} recordingName
 * @param {EDrivingmode} mode
 * @param {number} startingProgress
 * @param {EEwaypointFollowFlags} flags
 * @param {number} targetProgress
 * @param {number} maxSpeed
 * @param {boolean} driveInLoop
 * @param {number} targetArriveDistance
 */
export function taskVehicleFollowWaypointRecording(ped: PedIndex, vehicle: VehicleIndex, recordingName: string, mode: EDrivingmode | number, startingProgress: number = 0, flags: EEwaypointFollowFlags | number = 0, targetProgress: number = 1, maxSpeed: number = 1, driveInLoop: boolean = false, targetArriveDistance: number = 2): void {
	const taskVehicleFollowWaypointRecording_result = Citizen.invokeNative<void>('0x43E9B2BD3668B432', ped, vehicle, recordingName, mode, startingProgress, flags, targetProgress, maxSpeed, driveInLoop, targetArriveDistance);
	return taskVehicleFollowWaypointRecording_result;
}