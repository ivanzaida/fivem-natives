import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_CAN_ONLY_BE_DAMAGED_BY_ENTITY
 *
 * 0x6662B1F8A5BFA0F2

 * 
 * Sets an entity to only be damaged by one other entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EntityIndex} damagingEntity
 */
export function setEntityCanOnlyBeDamagedByEntity(entity: EntityIndex, damagingEntity: EntityIndex): void {
	const setEntityCanOnlyBeDamagedByEntity_result = Citizen.invokeNative<void>('0x6662B1F8A5BFA0F2', entity, damagingEntity);
	return setEntityCanOnlyBeDamagedByEntity_result;
}