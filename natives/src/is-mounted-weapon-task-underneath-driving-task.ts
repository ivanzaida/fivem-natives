import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_MOUNTED_WEAPON_TASK_UNDERNEATH_DRIVING_TASK
 *
 * 0x5652C0D8FC728983

 * 
 * Used to query if the mounted weapon control task given by CONTROL_MOUNTED_WEAPON is set on driving ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isMountedWeaponTaskUnderneathDrivingTask(ped: PedIndex): boolean {
	const isMountedWeaponTaskUnderneathDrivingTask_result = Citizen.invokeNative<boolean>('0x5652C0D8FC728983', ped);
	return isMountedWeaponTaskUnderneathDrivingTask_result;
}