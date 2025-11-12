import { PedIndex, VehicleIndex, EFiringPatternHash } from '@ivanzaida/structures'

/**
 * TASK:TASK_DRIVE_BY
 *
 * 0xD83588CA24829967

 * 
 * Example:
 * 
 * TASK::TASK_DRIVE_BY(l_467[1/22/], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});
 * 
 * 
 * 
 * 
 * Needs working example. Doesn't seem to do anything.
 * 
 * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
 * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
 * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {VehicleIndex} targetVehicle
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} abortRange
 * @param {number} frequencyPercentage
 * @param {boolean} pushUnderneathDrivingTaskIfDriving
 * @param {EFiringPatternHash} firingPatternHash Allows you to set the firing pattern from a list
 */
export function taskDriveBy(ped: PedIndex, otherPed: PedIndex, targetVehicle: VehicleIndex, coorsX: number, coorsY: number, coorsZ: number, abortRange: number, frequencyPercentage: number, pushUnderneathDrivingTaskIfDriving: boolean = false, firingPatternHash: EFiringPatternHash | number = 753768974): void {
	const taskDriveBy_result = Citizen.invokeNative<void>('0xD83588CA24829967', ped, otherPed, targetVehicle, coorsX, coorsY, coorsZ, abortRange, frequencyPercentage, pushUnderneathDrivingTaskIfDriving, firingPatternHash);
	return taskDriveBy_result;
}