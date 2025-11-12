import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_VISIBLE
 *
 * 0x4285E11B28063EE0

 * 
 * resetRenderPhaseVisibilityMask is always false.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} visibleFlag
 * @param {boolean} resetRenderPhaseVisibilityMask
 */
export function setEntityVisible(entity: EntityIndex, visibleFlag: boolean, resetRenderPhaseVisibilityMask: boolean = false): void {
	const setEntityVisible_result = Citizen.invokeNative<void>('0x4285E11B28063EE0', entity, visibleFlag, resetRenderPhaseVisibilityMask);
	return setEntityVisible_result;
}