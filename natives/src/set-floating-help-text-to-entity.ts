import { EEHelpTextFloatingId, EntityIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_FLOATING_HELP_TEXT_TO_ENTITY
 *
 * 0xC8E9EF71F45A1675

 * 
 * ------------------------------------------------------------------
 * @param {EEHelpTextFloatingId} id
 * @param {EntityIndex} entity
 * @param {number} offsetX
 * @param {number} offsetY
 */
export function setFloatingHelpTextToEntity(id: EEHelpTextFloatingId | number, entity: EntityIndex, offsetX: number, offsetY: number): void {
	const setFloatingHelpTextToEntity_result = Citizen.invokeNative<void>('0xC8E9EF71F45A1675', id, entity, offsetX, offsetY);
	return setFloatingHelpTextToEntity_result;
}