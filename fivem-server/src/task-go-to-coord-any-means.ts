import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_GO_TO_COORD_ANY_MEANS
 *
 * 0xF91DF93B

 * 
 * example from fm_mission_controller
 * 
 * TASK::TASK_GO_TO_COORD_ANY_MEANS(l_649, sub_f7e86(-1, 0), 1.0, 0, 0, 786603, 0xbf800000);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The Ped Handle.
 * @param {number} x The goto target coordinate.
 * @param {number} y The goto target coordinate.
 * @param {number} z The goto target coordinate.
 * @param {number} fMoveBlendRatio 0.0 = still, 1.0 = walk, 2.0 = run, 3.0 = sprint.
 * @param {VehicleIndex} vehicle If defined, the pedestrian will only move if said vehicle exists. If you don't want any sort of association, just set it to 0.
 * @param {boolean} bUseLongRangeVehiclePathing Setting to true tells the vehicle to use longrange vehicle pathing.
 * @param {number} drivingFlags See eDrivingMode enum.
 * @param {number} fMaxRangeToShootTargets Determines the maximum distance at which the Ped will engage in combat with threatening targets.
 */
export function taskGoToCoordAnyMeans(ped: PedIndex, x: number, y: number, z: number, fMoveBlendRatio: number, vehicle: VehicleIndex, bUseLongRangeVehiclePathing: boolean, drivingFlags: number, fMaxRangeToShootTargets: number): void {
	const taskGoToCoordAnyMeans_result = Citizen.invokeNative<void>('0xF91DF93B', ped, x, y, z, fMoveBlendRatio, vehicle, bUseLongRangeVehiclePathing, drivingFlags, fMaxRangeToShootTargets);
	return taskGoToCoordAnyMeans_result;
}