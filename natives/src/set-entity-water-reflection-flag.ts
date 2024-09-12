import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_WATER_REFLECTION_FLAG
 *
 * 0x119BDA4392B5BAB2

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} reflectionFlag
 */
export function setEntityWaterReflectionFlag(entity: EntityIndex, reflectionFlag: boolean): void {
	const setEntityWaterReflectionFlag_result = Citizen.invokeNative<void>('0x119BDA4392B5BAB2', entity, reflectionFlag);
	return setEntityWaterReflectionFlag_result;
}