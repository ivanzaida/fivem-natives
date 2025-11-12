import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:FREEZE_ENTITY_POSITION
 *
 * 0x5D7CD709B34C90F0

 * 
 * Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using SET_ENTITY_COORDS.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} frozenByScriptFlag
 */
export function freezeEntityPosition(entity: EntityIndex, frozenByScriptFlag: boolean): void {
	const freezeEntityPosition_result = Citizen.invokeNative<void>('0x5D7CD709B34C90F0', entity, frozenByScriptFlag);
	return freezeEntityPosition_result;
}