import { VehicleIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PLAYBACK_TO_USE_AI
 *
 * 0x0642B7FD807FF696

 * 
 * After this command is called the car will use ai to try and stay close to the original recording
 * 
 * Identical to SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER with 0 as arguments for p1 and p3.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {EDrivingmode} mode
 */
export function setPlaybackToUseAi(vehicle: VehicleIndex, mode: EDrivingmode | number = 786603): void {
	const setPlaybackToUseAi_result = Citizen.invokeNative<void>('0x0642B7FD807FF696', vehicle, mode);
	return setPlaybackToUseAi_result;
}