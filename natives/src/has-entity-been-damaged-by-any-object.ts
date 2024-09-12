import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_BEEN_DAMAGED_BY_ANY_OBJECT
 *
 * 0x6E470765558FCD9E

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function hasEntityBeenDamagedByAnyObject(entity: EntityIndex): boolean {
	const hasEntityBeenDamagedByAnyObject_result = Citizen.invokeNative<boolean>('0x6E470765558FCD9E', entity);
	return hasEntityBeenDamagedByAnyObject_result;
}