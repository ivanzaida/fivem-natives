import { EReplayImportance } from '@ivanzaida/structures'

/**
 * RECORDING:REPLAY_START_EVENT
 *
 * 0xB9784D6C7219851B

 * 
 * ------------------------------------------------------------------
 * @param {EReplayImportance} importance
 */
export function replayStartEvent(importance: EReplayImportance | number = 3): void {
	const replayStartEvent_result = Citizen.invokeNative<void>('0xB9784D6C7219851B', importance);
	return replayStartEvent_result;
}