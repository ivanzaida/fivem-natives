import { PedIndex, VehicleIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_COORD_ANY_MEANS
 *
 * 0x30FAA55EAF29F9BE

 * 
 * example from fm_mission_controller
 * 
 * TASK::TASK_GO_TO_COORD_ANY_MEANS(l_649, sub_f7e86(-1, 0), 1.0, 0, 0, 786603, 0xbf800000);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} moveBlendRatio
 * @param {VehicleIndex} vehicle
 * @param {boolean} useLongRangeVehiclePathing
 * @param {EDrivingmode} drivingFlags
 * @param {number} maxRangeToShootTargets
 */
export function taskGoToCoordAnyMeans(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, moveBlendRatio: number, vehicle: VehicleIndex, useLongRangeVehiclePathing: boolean = false, drivingFlags: EDrivingmode | number = 786603, maxRangeToShootTargets: number = 1): void {
	const taskGoToCoordAnyMeans_result = Citizen.invokeNative<void>('0x30FAA55EAF29F9BE', ped, coorsX, coorsY, coorsZ, moveBlendRatio, vehicle, useLongRangeVehiclePathing, drivingFlags, maxRangeToShootTargets);
	return taskGoToCoordAnyMeans_result;
}