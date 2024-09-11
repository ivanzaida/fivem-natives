import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SELECT_ENTITY_AT_POS
 *
 * 0XAFE8D405

 * Gets the selected entity at the specified mouse cursor position, and changes the current selection depth. This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {number} fracX Mouse cursor X fraction.
 * @param {number} fracY Mouse cursor Y fraction.
 * @param {number} hitFlags A bit mask of entity types to match.
 * @param {boolean} precise Whether to do a _precise_ test, i.e. of visual coordinates, too.
 * @returns {EntityIndex}  An entity handle, or zero.
 */
export function selectEntityAtPos(fracX: number, fracY: number, hitFlags: number, precise: boolean): EntityIndex {
	const selectEntityAtPos_result = Citizen.invokeNative<EntityIndex>('0XAFE8D405', fracX, fracY, hitFlags, precise);
	return selectEntityAtPos_result;
}