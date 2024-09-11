import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_DRIVE_TASK_MAX_CRUISE_SPEED
 *
 * 0x24B82F8CB7F8A3E5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} maxCruiseSpeed
 */
export function setDriveTaskMaxCruiseSpeed(ped: PedIndex, maxCruiseSpeed: number): void {
	const setDriveTaskMaxCruiseSpeed_result = Citizen.invokeNative<void>('0x24B82F8CB7F8A3E5', ped, maxCruiseSpeed);
	return setDriveTaskMaxCruiseSpeed_result;
}