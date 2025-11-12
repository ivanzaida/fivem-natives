import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:CLEAR_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
 *
 * 0x827783BAD5CBE95D

 * 
 * Used to clear driveby tasks given by TASK_DRIVE_BY with bPushUnderneathDrivingTaskIfDriving set on peds driving
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearDrivebyTaskUnderneathDrivingTask(ped: PedIndex): void {
	const clearDrivebyTaskUnderneathDrivingTask_result = Citizen.invokeNative<void>('0x827783BAD5CBE95D', ped);
	return clearDrivebyTaskUnderneathDrivingTask_result;
}