import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_ENTITY_ICON_VISIBILITY
 *
 * 0xE71F327DD7F42EE2

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 * @param {boolean} visible
 */
export function setEntityIconVisibility(entityID: EntityIndex, visible: boolean): void {
	const setEntityIconVisibility_result = Citizen.invokeNative<void>('0xE71F327DD7F42EE2', entityID, visible);
	return setEntityIconVisibility_result;
}