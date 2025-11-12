import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_CONCEAL_ENTITY
 *
 * 0x63FC4C73448FCEA2

 * 
 * Sets the concealed status for the specific entity. This can be used to hide a remote entity (ped, object, vehicle) that is in the
 * same tutorial session as the local player
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} conceal
 */
export function networkConcealEntity(entity: EntityIndex, conceal: boolean): void {
	const networkConcealEntity_result = Citizen.invokeNative<void>('0x63FC4C73448FCEA2', entity, conceal);
	return networkConcealEntity_result;
}