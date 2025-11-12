import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_ENTITY_CLEAR_LOS_TO_ENTITY_ADJUST_FOR_COVER
 *
 * 0x4EAD67A3E57A9458

 * 
 * Checks if the entity has a clear line of sight to another entity. If the 2 entities are peds then
 * the LOS check is done between the heads of the 2 peds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} firstEntity
 * @param {EntityIndex} secondEntity
 * @param {number} losFlags
 * @returns {boolean}  
 */
export function hasEntityClearLosToEntityAdjustForCover(firstEntity: EntityIndex, secondEntity: EntityIndex, losFlags: number = 17): boolean {
	const hasEntityClearLosToEntityAdjustForCover_result = Citizen.invokeNative<boolean>('0x4EAD67A3E57A9458', firstEntity, secondEntity, losFlags);
	return hasEntityClearLosToEntityAdjustForCover_result;
}