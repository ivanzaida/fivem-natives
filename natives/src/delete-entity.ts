import { IntRef } from '@ivanzaida/structures'

/**
 * ENTITY:DELETE_ENTITY
 *
 * 0x81A7F3CD719DD53B

 * 
 * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} entity [Ref]
 */
export function deleteEntity(entity: IntRef /* ptr */): void {
	const deleteEntity_result = Citizen.invokeNative<void>('0x81A7F3CD719DD53B', entity.dataView);
	return deleteEntity_result;
}