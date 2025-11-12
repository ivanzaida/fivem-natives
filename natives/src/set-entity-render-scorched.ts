import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_RENDER_SCORCHED
 *
 * 0x0615DFA55885D5B3

 * 
 * Setup an entity to be rendered as scorched/burned down
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} renderScorched
 */
export function setEntityRenderScorched(entity: EntityIndex, renderScorched: boolean): void {
	const setEntityRenderScorched_result = Citizen.invokeNative<void>('0x0615DFA55885D5B3', entity, renderScorched);
	return setEntityRenderScorched_result;
}