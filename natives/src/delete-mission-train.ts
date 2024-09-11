import { IntRef } from '@ivanzaida/structures'

/**
 * VEHICLE:DELETE_MISSION_TRAIN
 *
 * 0x903908AA21114D72

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} train [Ref]
 */
export function deleteMissionTrain(train: IntRef /* ptr */): void {
	const deleteMissionTrain_result = Citizen.invokeNative<void>('0x903908AA21114D72', train.dataView);
	return deleteMissionTrain_result;
}