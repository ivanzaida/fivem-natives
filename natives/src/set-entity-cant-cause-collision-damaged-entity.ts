import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_CANT_CAUSE_COLLISION_DAMAGED_ENTITY
 *
 * 0x37419414971A4C4B

 * 
 * Sets an entity to not have collision damage from the other entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EntityIndex} damagingEntity
 */
export function setEntityCantCauseCollisionDamagedEntity(entity: EntityIndex, damagingEntity: EntityIndex): void {
	const setEntityCantCauseCollisionDamagedEntity_result = Citizen.invokeNative<void>('0x37419414971A4C4B', entity, damagingEntity);
	return setEntityCantCauseCollisionDamagedEntity_result;
}