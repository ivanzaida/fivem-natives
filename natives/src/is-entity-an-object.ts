import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_AN_OBJECT
 *
 * 0xBE79A96C521F4432

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityAnObject(entity: EntityIndex): boolean {
	const isEntityAnObject_result = Citizen.invokeNative<boolean>('0xBE79A96C521F4432', entity);
	return isEntityAnObject_result;
}