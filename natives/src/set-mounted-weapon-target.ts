import { PedIndex, VehicleIndex, EVehiclemountedweapontaskmode } from '@ivanzaida/structures'

/**
 * TASK:SET_MOUNTED_WEAPON_TARGET
 *
 * 0x26CC8B808F859C87

 * 
 * Used to update a mounted weapon task (instead of constantly clearing and creating a new task) and to update the position
 * 
 * Note: Look in decompiled scripts and the times that p1 and p2 aren't 0. They are filled with vars. If you look through out that script what other natives those vars are used in, you can tell p1 is a ped and p2 is a vehicle. Which most likely means if you want the mounted weapon to target a ped set targetVehicle to 0 or vice-versa.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {VehicleIndex} targetVehicle
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {EVehiclemountedweapontaskmode} vehicleTaskMode
 * @param {boolean} ignoreTargetVehDeadCheck
 */
export function setMountedWeaponTarget(ped: PedIndex, otherPed: PedIndex, targetVehicle: VehicleIndex, coorsX: number, coorsY: number, coorsZ: number, vehicleTaskMode: EVehiclemountedweapontaskmode | number = 2, ignoreTargetVehDeadCheck: boolean = false): void {
	const setMountedWeaponTarget_result = Citizen.invokeNative<void>('0x26CC8B808F859C87', ped, otherPed, targetVehicle, coorsX, coorsY, coorsZ, vehicleTaskMode, ignoreTargetVehDeadCheck);
	return setMountedWeaponTarget_result;
}