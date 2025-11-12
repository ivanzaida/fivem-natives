import { PedIndex, VehicleIndex, EntityIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_FOLLOW
 *
 * 0x1114FB0D0DF739D0

 * 
 * This task sits sort of in between TASK_VEHICLE_ESCORT and TASK_VEHICLE_CHASE.
 * Not as fine-controlled as ESCORT but not as aggressive as CHASE.
 * This task is preferable to ESCORT when the following vehicle might start off in front
 * of the thing it's supposed to follow
 * Tells a vehicle to follow another entity
 * 
 * Makes a ped in a vehicle follow an entity (ped, vehicle, etc.)
 * 
 * drivingStyle: http://gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {EntityIndex} followEntity
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 * @param {number} followDistance Is how far behind the entity to follow
 */
export function taskVehicleFollow(ped: PedIndex, vehicle: VehicleIndex, followEntity: EntityIndex, cruiseSpeed: number, mode: EDrivingmode | number, followDistance: number = 20): void {
	const taskVehicleFollow_result = Citizen.invokeNative<void>('0x1114FB0D0DF739D0', ped, vehicle, followEntity, cruiseSpeed, mode, followDistance);
	return taskVehicleFollow_result;
}