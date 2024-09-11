import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_ENTITY_IS_LOCAL
 *
 * 0xE639563966553FA8

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function networkGetEntityIsLocal(entity: EntityIndex): boolean {
	const networkGetEntityIsLocal_result = Citizen.invokeNative<boolean>('0xE639563966553FA8', entity);
	return networkGetEntityIsLocal_result;
}