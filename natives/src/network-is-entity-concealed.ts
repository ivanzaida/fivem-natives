import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_ENTITY_CONCEALED
 *
 * 0xFFE66020A6507F47

 * 
 * Note: This only works for vehicles, which appears to be a bug (since the setter _does_ work for every entity type and the name is 99% correct).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function networkIsEntityConcealed(entity: EntityIndex): boolean {
	const networkIsEntityConcealed_result = Citizen.invokeNative<boolean>('0xFFE66020A6507F47', entity);
	return networkIsEntityConcealed_result;
}