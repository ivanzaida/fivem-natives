import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_BEEN_DAMAGED_BY_ANY_PED
 *
 * 0xF76AF9D45D6BDA45

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function hasEntityBeenDamagedByAnyPed(entity: EntityIndex): boolean {
	const hasEntityBeenDamagedByAnyPed_result = Citizen.invokeNative<boolean>('0xF76AF9D45D6BDA45', entity);
	return hasEntityBeenDamagedByAnyPed_result;
}