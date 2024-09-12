import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_ENTITY_BEEN_REGISTERED_WITH_THIS_THREAD
 *
 * 0x5DAE095398CD3303

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function networkHasEntityBeenRegisteredWithThisThread(entity: EntityIndex): boolean {
	const networkHasEntityBeenRegisteredWithThisThread_result = Citizen.invokeNative<boolean>('0x5DAE095398CD3303', entity);
	return networkHasEntityBeenRegisteredWithThisThread_result;
}