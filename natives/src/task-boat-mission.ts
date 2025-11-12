import { PedIndex, VehicleIndex, EVehicleMission, EDrivingmode, EBoatmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_BOAT_MISSION
 *
 * 0xDD216642D7E1AD6B

 * 
 * You need to call PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS after TASK_BOAT_MISSION in order for the task to execute.
 * 
 * Working example
 * float vehicleMaxSpeed = VEHICLE::GET_VEHICLE_ESTIMATED_MAX_SPEED(ENTITY::GET_ENTITY_MODEL(pedVehicle));
 * TASK::TASK_BOAT_MISSION(pedDriver, pedVehicle, 0, 0, waypointCoord.x, waypointCoord.y, waypointCoord.z, 4, vehicleMaxSpeed, 786469, -1.0, 7);
 * PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS(pedDriver, 1);
 * 
 * P8 appears to be driving style flag - see gtaforums.com/topic/822314-guide-driving-styles/ for documentation
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} boat
 * @param {VehicleIndex} targetVehicle
 * @param {PedIndex} targetPed
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {EVehicleMission} mission
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 * @param {number} targetReachedDist
 * @param {EBoatmode} boatFlags
 */
export function taskBoatMission(ped: PedIndex, boat: VehicleIndex, targetVehicle: VehicleIndex, targetPed: PedIndex, coorsX: number, coorsY: number, coorsZ: number, mission: EVehicleMission | number, cruiseSpeed: number, mode: EDrivingmode | number, targetReachedDist: number, boatFlags: EBoatmode | number): void {
	const taskBoatMission_result = Citizen.invokeNative<void>('0xDD216642D7E1AD6B', ped, boat, targetVehicle, targetPed, coorsX, coorsY, coorsZ, mission, cruiseSpeed, mode, targetReachedDist, boatFlags);
	return taskBoatMission_result;
}