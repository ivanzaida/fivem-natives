import { EntityIndex } from '@ivanzaida/structures'

/**
 * STREAMING:SET_RESTORE_FOCUS_ENTITY
 *
 * 0x9E3DFB4BEB42BEDF

 * 
 * The game focus is used for loading map data, collisions, object population etc.
 * This command overrides it for the specified entity.
 * Special case - on player switch termination script may want to restore
 * focus to a specific ped rather than the default current player ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function setRestoreFocusEntity(entity: EntityIndex): void {
	const setRestoreFocusEntity_result = Citizen.invokeNative<void>('0x9E3DFB4BEB42BEDF', entity);
	return setRestoreFocusEntity_result;
}