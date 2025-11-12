import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_USE_MAX_DISTANCE_FOR_WATER_REFLECTION
 *
 * 0xAC895C06C6322C1E

 * 
 * Set whether the entity should use the max distance check for being included in water reflections
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} useMaxDistance
 */
export function setEntityUseMaxDistanceForWaterReflection(entity: EntityIndex, useMaxDistance: boolean): void {
	const setEntityUseMaxDistanceForWaterReflection_result = Citizen.invokeNative<void>('0xAC895C06C6322C1E', entity, useMaxDistance);
	return setEntityUseMaxDistanceForWaterReflection_result;
}