import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:FREEZE_ENTITY_POSITION
 *
 * 0X65C16D57

 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using SET_ENTITY_COORDS.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} frozenByScriptFlag
 */
export function freezeEntityPosition(entity: EntityIndex, frozenByScriptFlag: boolean): void {
	const freezeEntityPosition_result = Citizen.invokeNative<void>('0X65C16D57', entity, frozenByScriptFlag);
	return freezeEntityPosition_result;
}