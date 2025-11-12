import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_DRIVEBY_TASK_TARGET
 *
 * 0xF38F1E299109383A

 * 
 * Used to update a drive by task target (instead of constantly clearing and creating a new task)
 * 
 * For p1 & p2 (Ped, Vehicle). I could be wrong, as the only time this native is called in scripts is once and both are 0, but I assume this native will work like SET_MOUNTED_WEAPON_TARGET in which has the same exact amount of parameters and the 1st and last 3 parameters are right and the same for both natives.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @param {VehicleIndex} targetVehicle
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 */
export function setDrivebyTaskTarget(ped: PedIndex, otherPed: PedIndex, targetVehicle: VehicleIndex, coorsX: number, coorsY: number, coorsZ: number): void {
	const setDrivebyTaskTarget_result = Citizen.invokeNative<void>('0xF38F1E299109383A', ped, otherPed, targetVehicle, coorsX, coorsY, coorsZ);
	return setDrivebyTaskTarget_result;
}