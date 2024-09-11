import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_ENTITY_VISIBLE_IN_CUTSCENE
 *
 * 0xE6E7B0D0E904CA62

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} visible
 * @param {boolean} remotelyVisible
 */
export function setEntityVisibleInCutscene(entity: EntityIndex, visible: boolean, remotelyVisible: boolean = false): void {
	const setEntityVisibleInCutscene_result = Citizen.invokeNative<void>('0xE6E7B0D0E904CA62', entity, visible, remotelyVisible);
	return setEntityVisibleInCutscene_result;
}