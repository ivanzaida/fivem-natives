import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_TOUCHING_ENTITY
 *
 * 0x685171EED42BC4DF

 * 
 * Checks that 2 entities are intersecting each other this frame.
 * If any of the entities are peds in a vehicle, then the vehicle is used in the check.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} firstEntity
 * @param {EntityIndex} secondEntity
 * @returns {boolean}  
 */
export function isEntityTouchingEntity(firstEntity: EntityIndex, secondEntity: EntityIndex): boolean {
	const isEntityTouchingEntity_result = Citizen.invokeNative<boolean>('0x685171EED42BC4DF', firstEntity, secondEntity);
	return isEntityTouchingEntity_result;
}