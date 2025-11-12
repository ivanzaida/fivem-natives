import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:RESET_ENTITY_ALPHA
 *
 * 0xC14A2FED36D0EBB9

 * 
 * Revert entity alpha override.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function resetEntityAlpha(entity: EntityIndex): void {
	const resetEntityAlpha_result = Citizen.invokeNative<void>('0xC14A2FED36D0EBB9', entity);
	return resetEntityAlpha_result;
}