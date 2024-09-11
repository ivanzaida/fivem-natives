import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ALWAYS_PRERENDER
 *
 * 0x05177DCE3DD6F271

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} alwaysPreRender
 */
export function setEntityAlwaysPrerender(entity: EntityIndex, alwaysPreRender: boolean): void {
	const setEntityAlwaysPrerender_result = Citizen.invokeNative<void>('0x05177DCE3DD6F271', entity, alwaysPreRender);
	return setEntityAlwaysPrerender_result;
}