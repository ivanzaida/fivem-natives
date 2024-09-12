import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_ATTACHED_TO_ENTITY
 *
 * 0x21478251925DBFD7

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityIndex1
 * @param {EntityIndex} entityIndex2
 * @returns {boolean}  
 */
export function isEntityAttachedToEntity(entityIndex1: EntityIndex, entityIndex2: EntityIndex): boolean {
	const isEntityAttachedToEntity_result = Citizen.invokeNative<boolean>('0x21478251925DBFD7', entityIndex1, entityIndex2);
	return isEntityAttachedToEntity_result;
}