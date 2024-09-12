import { PedIndex, VehicleIndex, EDrivingmode, ETaskGoToCoordAnyMeansFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_COORD_ANY_MEANS_EXTRA_PARAMS_WITH_CRUISE_SPEED
 *
 * 0x8B561CAF821BBFCE

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
 * @param {number} driveStraightLineDistance
 * @param {ETaskGoToCoordAnyMeansFlags} extraFlags
 * @param {number} cruiseSpeed
 * @param {number} targetArriveDist
 */
export function taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: PedIndex, coorsX: number, coorsY: number, coorsZ: number, moveBlendRatio: number, vehicle: VehicleIndex, useLongRangeVehiclePathing: boolean = false, drivingFlags: EDrivingmode | number = 786603, maxRangeToShootTargets: number = 1, extraVehToTargetDistToPreferVeh: number = 0, driveStraightLineDistance: number = 20, extraFlags: ETaskGoToCoordAnyMeansFlags | number = 0, cruiseSpeed: number = 1, targetArriveDist: number = 4): void {
	const taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed_result = Citizen.invokeNative<void>('0x8B561CAF821BBFCE', ped, coorsX, coorsY, coorsZ, moveBlendRatio, vehicle, useLongRangeVehiclePathing, drivingFlags, maxRangeToShootTargets, extraVehToTargetDistToPreferVeh, driveStraightLineDistance, extraFlags, cruiseSpeed, targetArriveDist);
	return taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed_result;
}