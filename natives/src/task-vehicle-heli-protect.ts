import { PedIndex, VehicleIndex, EntityIndex, EDrivingmode, EHelimode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_HELI_PROTECT
 *
 * 0xE4B10D5B4C7A3BEB

 * 
 * Tells a helicopter to protect another entity.
 * 
 * pilot, vehicle and altitude are rather self-explanatory.
 * 
 * p4: is unused variable in the function.
 * 
 * entityToFollow: you can provide a Vehicle entity or a Ped entity, the heli will protect them.
 * 
 * 'targetSpeed':  The pilot will dip the nose AS MUCH AS POSSIBLE so as to reach this value AS FAST AS POSSIBLE.  As such, you'll want to modulate it as opposed to calling it via a hard-wired, constant #.
 * 
 * 'radius' isn't just "stop within radius of X of target" like with ground vehicles.  In this case, the pilot will fly an entire circle around 'radius' and continue to do so.
 * 
 * NOT CONFIRMED:  p7 appears to be a FlyingStyle enum.  Still investigating it as of this writing, but playing around with values here appears to result in different -behavior- as opposed to offsetting coordinates, altitude, target speed, etc.
 * 
 * NOTE: If the pilot finds enemies, it will engage them until it kills them, but will return to protect the ped/vehicle given shortly thereafter.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {EntityIndex} protectEntity
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 * @param {number} customOffset
 * @param {number} minHeightAboveTerrain
 * @param {EHelimode} heliFlags
 */
export function taskVehicleHeliProtect(ped: PedIndex, vehicle: VehicleIndex, protectEntity: EntityIndex, cruiseSpeed: number, mode: EDrivingmode | number, customOffset: number = 1, minHeightAboveTerrain: number = 20, heliFlags: EHelimode | number = 0): void {
	const taskVehicleHeliProtect_result = Citizen.invokeNative<void>('0xE4B10D5B4C7A3BEB', ped, vehicle, protectEntity, cruiseSpeed, mode, customOffset, minHeightAboveTerrain, heliFlags);
	return taskVehicleHeliProtect_result;
}