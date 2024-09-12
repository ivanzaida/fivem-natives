import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_REGISTER_ENTITY_AS_NETWORKED
 *
 * 0xAFD7C87C41AEE7E7

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function networkRegisterEntityAsNetworked(entity: EntityIndex): void {
	const networkRegisterEntityAsNetworked_result = Citizen.invokeNative<void>('0xAFD7C87C41AEE7E7', entity);
	return networkRegisterEntityAsNetworked_result;
}