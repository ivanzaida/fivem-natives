import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_DRIVE_TASK_CRUISE_SPEED
 *
 * 0x553B31859911EC59

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} cruiseSpeed
 */
export function setDriveTaskCruiseSpeed(ped: PedIndex, cruiseSpeed: number): void {
	const setDriveTaskCruiseSpeed_result = Citizen.invokeNative<void>('0x553B31859911EC59', ped, cruiseSpeed);
	return setDriveTaskCruiseSpeed_result;
}