import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_MOTION_BLUR
 *
 * 0xD7AC50B9FB801C60

 * 
 * Toggles motion blur on an entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} enableMotionBlur
 */
export function setEntityMotionBlur(entity: EntityIndex, enableMotionBlur: boolean): void {
	const setEntityMotionBlur_result = Citizen.invokeNative<void>('0xD7AC50B9FB801C60', entity, enableMotionBlur);
	return setEntityMotionBlur_result;
}