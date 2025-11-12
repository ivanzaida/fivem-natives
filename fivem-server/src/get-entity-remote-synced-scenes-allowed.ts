import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_REMOTE_SYNCED_SCENES_ALLOWED
 *
 * 0x91B38FB6

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to get the flag for.
 * @returns {boolean}  Returns if the entity is allowed to participate in network-synchronized scenes initiated by clients that do not own the entity.
 */
export function getEntityRemoteSyncedScenesAllowed(entity: EntityIndex): boolean {
	const getEntityRemoteSyncedScenesAllowed_result = Citizen.invokeNative<boolean>('0x91B38FB6', entity);
	return getEntityRemoteSyncedScenesAllowed_result;
}