import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_TRAIN_CURRENT_TRACK_NODE
 *
 * 0XE015E854

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} train The target train.
 * @returns {number}  Train's current track node index.
 */
export function getTrainCurrentTrackNode(train: VehicleIndex): number {
	const getTrainCurrentTrackNode_result = Citizen.invokeNative<number>('0XE015E854', train);
	return getTrainCurrentTrackNode_result;
}