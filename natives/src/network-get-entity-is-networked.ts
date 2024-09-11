import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_ENTITY_IS_NETWORKED
 *
 * 0xC8D49539708A80B4

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function networkGetEntityIsNetworked(entity: EntityIndex): boolean {
	const networkGetEntityIsNetworked_result = Citizen.invokeNative<boolean>('0xC8D49539708A80B4', entity);
	return networkGetEntityIsNetworked_result;
}