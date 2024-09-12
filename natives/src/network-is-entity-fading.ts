import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_ENTITY_FADING
 *
 * 0x6BF8FE9F26BBABDE

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function networkIsEntityFading(entity: EntityIndex): boolean {
	const networkIsEntityFading_result = Citizen.invokeNative<boolean>('0x6BF8FE9F26BBABDE', entity);
	return networkIsEntityFading_result;
}