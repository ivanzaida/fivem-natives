import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SELECT_ENTITY_AT_CURSOR
 *
 * 0x3DD8130F

 * Gets the selected entity at the current mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {number} hitFlags A bit mask of entity types to match.
 * @param {boolean} precise Whether to do a _precise_ test, i.e. of visual coordinates, too.
 * @returns {EntityIndex}  An entity handle, or zero.
 */
export function selectEntityAtCursor(hitFlags: number, precise: boolean): EntityIndex {
	const selectEntityAtCursor_result = Citizen.invokeNative<EntityIndex>('0x3DD8130F', hitFlags, precise);
	return selectEntityAtCursor_result;
}