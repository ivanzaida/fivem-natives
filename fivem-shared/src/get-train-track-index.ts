import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_TRACK_INDEX
 *
 * 0x9AA339D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The train handle
 * @returns {number}  The track index the train is currently on.
 */
export function getTrainTrackIndex(train: VehicleIndex): number {
	const getTrainTrackIndex_result = Citizen.invokeNative<number>('0x9AA339D', train);
	return getTrainTrackIndex_result;
}