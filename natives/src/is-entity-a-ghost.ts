import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:IS_ENTITY_A_GHOST
 *
 * 0xF073EDDFCBA082E6

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAGhost(entity: EntityIndex): boolean {
	const isEntityAGhost_result = Citizen.invokeNative<boolean>('0xF073EDDFCBA082E6', entity);
	return isEntityAGhost_result;
}