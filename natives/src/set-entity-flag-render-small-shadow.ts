import { EntityIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_ENTITY_FLAG_RENDER_SMALL_SHADOW
 *
 * 0xCE01C49286D13953

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 * @param {boolean} flag
 */
export function setEntityFlagRenderSmallShadow(entityID: EntityIndex, flag: boolean): void {
	const setEntityFlagRenderSmallShadow_result = Citizen.invokeNative<void>('0xCE01C49286D13953', entityID, flag);
	return setEntityFlagRenderSmallShadow_result;
}