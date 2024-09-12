import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:NETWORK_GET_FIRST_ENTITY_OWNER
 *
 * 0X1E546224

 * Returns the first owner ID of the specified entity.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity to get the first owner for.
 * @returns {number}  The server ID of the first entity owner.
 */
export function networkGetFirstEntityOwner(entity: EntityIndex): number {
	const networkGetFirstEntityOwner_result = Citizen.invokeNative<number>('0X1E546224', entity);
	return networkGetFirstEntityOwner_result;
}