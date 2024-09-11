import { EReplayImportance } from '@ivanzaida/structures'

/**
 * RECORDING:REPLAY_RECORD_BACK_FOR_TIME
 *
 * 0xA62957B100C8DE6D

 * 
 * ------------------------------------------------------------------
 * @param {number} backTime
 * @param {number} forwardTime
 * @param {EReplayImportance} importance
 */
export function replayRecordBackForTime(backTime: number, forwardTime: number = 2, importance: EReplayImportance | number = 3): void {
	const replayRecordBackForTime_result = Citizen.invokeNative<void>('0xA62957B100C8DE6D', backTime, forwardTime, importance);
	return replayRecordBackForTime_result;
}