import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:NETWORK_GET_ENTITY_OWNER
 *
 * 0x526FEE31

 * Returns the owner ID of the specified entity.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to get the owner for.
 * @returns {number}  On the server, the server ID of the entity owner. On the client, returns the player/slot ID of the entity owner.
 */
export function networkGetEntityOwner(entity: EntityIndex): number {
	const networkGetEntityOwner_result = Citizen.invokeNative<number>('0x526FEE31', entity);
	return networkGetEntityOwner_result;
}