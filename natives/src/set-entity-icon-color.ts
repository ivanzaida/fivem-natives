import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_ENTITY_ICON_COLOR
 *
 * 0x371531C96D032099

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityID
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 */
export function setEntityIconColor(entityID: EntityIndex, r: number, g: number, b: number, a: number): void {
	const setEntityIconColor_result = Citizen.invokeNative<void>('0x371531C96D032099', entityID, r, g, b, a);
	return setEntityIconColor_result;
}