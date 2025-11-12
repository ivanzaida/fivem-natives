import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_DRIVE_TASK_DRIVING_STYLE
 *
 * 0x413BDD7A1192FC87

 * 
 * This native is used to set the driving style for specific ped.
 * 
 * Driving styles id seems to be:
 * 786468
 * 262144
 * 786469
 * 
 * http://gtaforums.com/topic/822314-guide-driving-styles/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} driveStyle
 */
export function setDriveTaskDrivingStyle(ped: PedIndex, driveStyle: number): void {
	const setDriveTaskDrivingStyle_result = Citizen.invokeNative<void>('0x413BDD7A1192FC87', ped, driveStyle);
	return setDriveTaskDrivingStyle_result;
}