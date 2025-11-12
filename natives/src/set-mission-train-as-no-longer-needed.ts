import { IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_MISSION_TRAIN_AS_NO_LONGER_NEEDED
 *
 * 0xC4929897EF5CADC2

 * 
 * p1 is always 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} train [Ref]
 * @param {number} flags
 */
export function setMissionTrainAsNoLongerNeeded(train: IntRef /* ptr */, flags: number = 0): void {
	const setMissionTrainAsNoLongerNeeded_result = Citizen.invokeNative<void>('0xC4929897EF5CADC2', train.dataView, flags);
	return setMissionTrainAsNoLongerNeeded_result;
}