import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:FREEZE_ENTITY_POSITION
 *
 * 0x65C16D57

 * 
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using SET_ENTITY_COORDS.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to freeze/unfreeze.
 * @param {boolean} toggle Freeze or unfreeze entity.
 */
export function freezeEntityPosition(entity: EntityIndex, toggle: boolean): void {
	const freezeEntityPosition_result = Citizen.invokeNative<void>('0x65C16D57', entity, toggle);
	return freezeEntityPosition_result;
}