import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_UPSIDEDOWN
 *
 * 0xD1F1A906BA9226BE

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityUpsidedown(entity: EntityIndex): boolean {
	const isEntityUpsidedown_result = Citizen.invokeNative<boolean>('0xD1F1A906BA9226BE', entity);
	return isEntityUpsidedown_result;
}