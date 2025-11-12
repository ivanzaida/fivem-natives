import { VehicleIndex, EDrivingmode } from '@ivanzaida/structures'

/**
 * VEHICLE:START_PLAYBACK_RECORDED_VEHICLE_WITH_FLAGS
 *
 * 0x9CCFFF877AB82ACA

 * 
 * flags requires further research, e.g., 0x4/0x8 are related to the AI driving task and 0x20 is internally set and interacts with dynamic entity components.
 * 
 * time, often zero and capped at 500, is related to SET_PLAYBACK_TO_USE_AI_TRY_TO_REVERT_BACK_LATER
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} fileNumber
 * @param {string} recordingName
 * @param {number} flags Can be from the enum VEHICLE_RECORDING_PLAYBACK_FLAGS, then can be combined together using "|"
 * @param {number} delayInMillisecondsToRevertIfSwitchedToAI
 * @param {EDrivingmode} mode
 */
export function startPlaybackRecordedVehicleWithFlags(vehicle: VehicleIndex, fileNumber: number, recordingName: string, flags: number = 4, delayInMillisecondsToRevertIfSwitchedToAI: number = 0, mode: EDrivingmode | number = 786603): void {
	const startPlaybackRecordedVehicleWithFlags_result = Citizen.invokeNative<void>('0x9CCFFF877AB82ACA', vehicle, fileNumber, recordingName, flags, delayInMillisecondsToRevertIfSwitchedToAI, mode);
	return startPlaybackRecordedVehicleWithFlags_result;
}