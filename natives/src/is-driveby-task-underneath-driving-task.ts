import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_DRIVEBY_TASK_UNDERNEATH_DRIVING_TASK
 *
 * 0x10BAD2FED582B598

 * 
 * Used to query driveby tasks given by TASK_DRIVE_BY with bPushUnderneathDrivingTaskIfDriving set on peds driving
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isDrivebyTaskUnderneathDrivingTask(ped: PedIndex): boolean {
	const isDrivebyTaskUnderneathDrivingTask_result = Citizen.invokeNative<boolean>('0x10BAD2FED582B598', ped);
	return isDrivebyTaskUnderneathDrivingTask_result;
}