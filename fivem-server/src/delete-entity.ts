import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:DELETE_ENTITY
 *
 * 0XFAA3D236

 * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function deleteEntity(entity: EntityIndex): void {
	const deleteEntity_result = Citizen.invokeNative<void>('0XFAA3D236', entity);
	return deleteEntity_result;
}