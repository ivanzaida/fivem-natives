import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:HAS_COLLISION_LOADED_AROUND_ENTITY
 *
 * 0x5E22EA3310AF52EA

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function hasCollisionLoadedAroundEntity(entity: EntityIndex): boolean {
	const hasCollisionLoadedAroundEntity_result = Citizen.invokeNative<boolean>('0x5E22EA3310AF52EA', entity);
	return hasCollisionLoadedAroundEntity_result;
}