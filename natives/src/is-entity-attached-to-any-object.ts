import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_ATTACHED_TO_ANY_OBJECT
 *
 * 0x592E6281C16BB0F2

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAttachedToAnyObject(entity: EntityIndex): boolean {
	const isEntityAttachedToAnyObject_result = Citizen.invokeNative<boolean>('0x592E6281C16BB0F2', entity);
	return isEntityAttachedToAnyObject_result;
}