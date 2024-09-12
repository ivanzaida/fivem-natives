import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_CAN_BE_DAMAGED
 *
 * 0xCC7210A943D5E698

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function getEntityCanBeDamaged(entity: EntityIndex): boolean {
	const getEntityCanBeDamaged_result = Citizen.invokeNative<boolean>('0xCC7210A943D5E698', entity);
	return getEntityCanBeDamaged_result;
}