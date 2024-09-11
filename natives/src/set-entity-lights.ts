import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_LIGHTS
 *
 * 0x4CD0763EB5DCD503

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} lightSwitch
 */
export function setEntityLights(entity: EntityIndex, lightSwitch: boolean): void {
	const setEntityLights_result = Citizen.invokeNative<void>('0x4CD0763EB5DCD503', entity, lightSwitch);
	return setEntityLights_result;
}