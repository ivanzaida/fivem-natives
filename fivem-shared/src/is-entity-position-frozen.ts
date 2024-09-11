import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_ENTITY_POSITION_FROZEN
 *
 * 0XEDBE6ADD

 * A getter for [FREEZE_ENTITY_POSITION](#_0x428CA6DBD1094446).
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to check for
 * @returns {boolean}  Boolean stating if it is frozen or not.
 */
export function isEntityPositionFrozen(entity: EntityIndex): boolean {
	const isEntityPositionFrozen_result = Citizen.invokeNative<boolean>('0XEDBE6ADD', entity);
	return isEntityPositionFrozen_result;
}