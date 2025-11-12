import { PedIndex, VehicleIndex, EntityIndex, EVehicleEscortType, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_VEHICLE_ESCORT
 *
 * 0x6AA87C4ADF4A6BFF

 * 
 * Tells a vehicle to escort another entity.
 * 
 * Makes a ped follow the targetVehicle with <minDistance> in between.
 * 
 * note: minDistance is ignored if drivingstyle is avoiding traffic, but Rushed is fine.
 * 
 * Mode: The mode defines the relative position to the targetVehicle. The ped will try to position its vehicle there.
 * -1 = behind
 * 0 = ahead
 * 1 = left
 * 2 = right
 * 3 = back left
 * 4 = back right
 * 
 * if the target is closer than noRoadsDistance, the driver will ignore pathing/roads and follow you directly.
 * 
 * Driving Styles guide: gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {EntityIndex} escortEntity
 * @param {EVehicleEscortType} escortType
 * @param {number} cruiseSpeed
 * @param {EDrivingmode} mode
 * @param {number} customOffset To a negative value to use the default
 * @param {number} minHeightAboveTerrain
 * @param {number} straightLineDistance
 */
export function taskVehicleEscort(ped: PedIndex, vehicle: VehicleIndex, escortEntity: EntityIndex, escortType: EVehicleEscortType | number, cruiseSpeed: number, mode: EDrivingmode | number, customOffset: number = 1, minHeightAboveTerrain: number = 20, straightLineDistance: number = 20): void {
	const taskVehicleEscort_result = Citizen.invokeNative<void>('0x6AA87C4ADF4A6BFF', ped, vehicle, escortEntity, escortType, cruiseSpeed, mode, customOffset, minHeightAboveTerrain, straightLineDistance);
	return taskVehicleEscort_result;
}