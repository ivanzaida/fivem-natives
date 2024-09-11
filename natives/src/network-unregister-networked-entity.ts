import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_UNREGISTER_NETWORKED_ENTITY
 *
 * 0xE34E2B2CD0086B03

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function networkUnregisterNetworkedEntity(entity: EntityIndex): void {
	const networkUnregisterNetworkedEntity_result = Citizen.invokeNative<void>('0xE34E2B2CD0086B03', entity);
	return networkUnregisterNetworkedEntity_result;
}