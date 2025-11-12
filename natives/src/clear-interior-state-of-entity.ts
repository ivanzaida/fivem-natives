import { EntityIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:CLEAR_INTERIOR_STATE_OF_ENTITY
 *
 * 0xDE69E5D63A1F57E0

 * 
 * If an entity is in the retained state, then force it out of that state and into a clean, in-exterior-world state instead
 * 
 * Immediately removes entity from an interior. Like sets entity to `limbo` room.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function clearInteriorStateOfEntity(entity: EntityIndex): void {
	const clearInteriorStateOfEntity_result = Citizen.invokeNative<void>('0xDE69E5D63A1F57E0', entity);
	return clearInteriorStateOfEntity_result;
}