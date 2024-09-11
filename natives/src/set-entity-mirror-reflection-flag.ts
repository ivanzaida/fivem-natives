import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_MIRROR_REFLECTION_FLAG
 *
 * 0xDE9AC11F2927457D

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} reflectionFlag
 */
export function setEntityMirrorReflectionFlag(entity: EntityIndex, reflectionFlag: boolean): void {
	const setEntityMirrorReflectionFlag_result = Citizen.invokeNative<void>('0xDE9AC11F2927457D', entity, reflectionFlag);
	return setEntityMirrorReflectionFlag_result;
}