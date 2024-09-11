import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_USE_CAMERA_HEADING_FOR_DESIRED_DIRECTION_LOCK_ON_TEST
 *
 * 0x476AD3ABB8EA8A58

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} useCameraHeading
 */
export function setUseCameraHeadingForDesiredDirectionLockOnTest(ped: PedIndex, useCameraHeading: boolean): void {
	const setUseCameraHeadingForDesiredDirectionLockOnTest_result = Citizen.invokeNative<void>('0x476AD3ABB8EA8A58', ped, useCameraHeading);
	return setUseCameraHeadingForDesiredDirectionLockOnTest_result;
}