import { PedIndex, VehicleIndex, EDrivingmode, ETaskGoToCoordAnyMeansFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS
 *
 * 0xE4250AD3565B478E

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
 * @param {number} extraVehToTargetDistToPreferVeh
 * @param {number} driveStraightLineDistance Allow script to define the distance at which vehicles switch to straightline pathfinding; default to same value as in code (20m)
 * @param {ETaskGoToCoordAnyMeansFlags} extraFlags
 * @param {number} warpTimerMS
 */
export function taskGoToCoordAnyMeansExtraParams(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, moveBlendRatio: number, vehicle: VehicleIndex, useLongRangeVehiclePathing: boolean = false, drivingFlags: EDrivingmode | number = 786603, maxRangeToShootTargets: number = 1, extraVehToTargetDistToPreferVeh: number = 0, driveStraightLineDistance: number = 20, extraFlags: ETaskGoToCoordAnyMeansFlags | number = 0, warpTimerMS: number = 1): void {
	const taskGoToCoordAnyMeansExtraParams_result = Citizen.invokeNative<void>('0xE4250AD3565B478E', ped, coorsX, coorsY, coorsZ, moveBlendRatio, vehicle, useLongRangeVehiclePathing, drivingFlags, maxRangeToShootTargets, extraVehToTargetDistToPreferVeh, driveStraightLineDistance, extraFlags, warpTimerMS);
	return taskGoToCoordAnyMeansExtraParams_result;
}