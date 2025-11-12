import { VehicleIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER
 *
 * 0xD9CBCF1C9EAC9D15

 * 
 * After this command is called the car will use ai to try and stay close to the original recording. After the specified time (in ms) expires the recording will turn itself back into a non-ai one if it is close enough to the route.
 * 
 * Time is number of milliseconds before reverting, zero for indefinitely.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} delayInMilliseconds
 * @param {EDrivingmode} mode
 * @param {boolean} snapToPositionIfNotVisible
 */
export function setPlaybackToUseAiTryToRevertBackLater(vehicle: VehicleIndex, delayInMilliseconds: number, mode: EDrivingmode | number = 786603, snapToPositionIfNotVisible: boolean = false): void {
	const setPlaybackToUseAiTryToRevertBackLater_result = Citizen.invokeNative<void>('0xD9CBCF1C9EAC9D15', vehicle, delayInMilliseconds, mode, snapToPositionIfNotVisible);
	return setPlaybackToUseAiTryToRevertBackLater_result;
}