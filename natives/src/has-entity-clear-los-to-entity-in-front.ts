import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_CLEAR_LOS_TO_ENTITY_IN_FRONT
 *
 * 0x300A997AE991C0A8

 * 
 * Checks if the entity has a clear line of sight to another entity, and the second entity is in a 180 sphere in
 * front of the first. If the 2 entities are peds then the LOS check is done between the heads of the 2 peds.
 * 
 * Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.
 * This is one of the most CPU demanding BOOL natives in the game; avoid calling this in things like nested for-loops
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} firstEntity
 * @param {EntityIndex} secondEntity
 * @returns {boolean}  
 */
export function hasEntityClearLosToEntityInFront(firstEntity: EntityIndex, secondEntity: EntityIndex): boolean {
	const hasEntityClearLosToEntityInFront_result = Citizen.invokeNative<boolean>('0x300A997AE991C0A8', firstEntity, secondEntity);
	return hasEntityClearLosToEntityInFront_result;
}