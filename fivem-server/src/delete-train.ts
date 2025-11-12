import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:DELETE_TRAIN
 *
 * 0x523BA3DA

 * Deletes the specified `entity` and any carriage its attached to, or that is attached to it.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The carriage to delete.
 */
export function deleteTrain(entity: EntityIndex): void {
	const deleteTrain_result = Citizen.invokeNative<void>('0x523BA3DA', entity);
	return deleteTrain_result;
}