import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_REMOTE_SYNCED_SCENES_ALLOWED
 *
 * 0xD3FC9D88

 * Enables or disables the owner check for the specified entity in network-synchronized scenes. When set to `false`, the entity cannot participate in synced scenes initiated by clients that do not own the entity.By default, this is `false` for all entities, meaning only the entity's owner can include it in networked synchronized scenes.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to set the flag for.
 * @param {boolean} allow Whether to allow remote synced scenes for the entity.
 */
export function setEntityRemoteSyncedScenesAllowed(entity: EntityIndex, allow: boolean): void {
	const setEntityRemoteSyncedScenesAllowed_result = Citizen.invokeNative<void>('0xD3FC9D88', entity, allow);
	return setEntityRemoteSyncedScenesAllowed_result;
}