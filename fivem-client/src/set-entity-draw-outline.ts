import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_DRAW_OUTLINE
 *
 * 0X76180407

 * Draws an outline around a given entity. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity A valid entity handle.
 * @param {boolean} enabled Whether or not to draw an outline.
 */
export function setEntityDrawOutline(entity: EntityIndex, enabled: boolean): void {
	const setEntityDrawOutline_result = Citizen.invokeNative<void>('0X76180407', entity, enabled);
	return setEntityDrawOutline_result;
}