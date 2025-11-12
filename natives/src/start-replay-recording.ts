import { EReplayStartParam } from '@ivanzaida/structures'

/**
 * RECORDING:START_REPLAY_RECORDING
 *
 * 0x318F6CC45BC7DB75

 * 
 * Starts recording a replay.
 * If mode is 0, turns on action replay.
 * If mode is 1, starts recording.
 * If already recording a replay, does nothing.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EReplayStartParam} startParam
 */
export function startReplayRecording(startParam: EReplayStartParam | number): void {
	const startReplayRecording_result = Citizen.invokeNative<void>('0x318F6CC45BC7DB75', startParam);
	return startReplayRecording_result;
}