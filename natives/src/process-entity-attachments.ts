import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:PROCESS_ENTITY_ATTACHMENTS
 *
 * 0x0D84113E3B923524

 * 
 * Updates the position of an attached entity (And all of its children) immediately, so that up to date entity and child entity positions can be grabbed. Also updates the position of the entity within a synchronized scene.
 * Update an entities attachments immediately
 * 
 * Called to update entity attachments.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function processEntityAttachments(entity: EntityIndex): void {
	const processEntityAttachments_result = Citizen.invokeNative<void>('0x0D84113E3B923524', entity);
	return processEntityAttachments_result;
}