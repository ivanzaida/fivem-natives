import { EntityIndex, PedIndex } from '@ivanzaida/structures'

/**
 * NETWORK:REMOVE_ALL_STICKY_BOMBS_FROM_ENTITY
 *
 * 0xFF71621A8661D34F

 * 
 * Removes all sticky bombs attached to the given entity by informing the remote players who own them to destroy them.
 * 
 * entity must be a valid entity; ped can be NULL
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {PedIndex} owner Index
 */
export function removeAllStickyBombsFromEntity(entity: EntityIndex, owner: PedIndex = null!): void {
	const removeAllStickyBombsFromEntity_result = Citizen.invokeNative<void>('0xFF71621A8661D34F', entity, owner);
	return removeAllStickyBombsFromEntity_result;
}