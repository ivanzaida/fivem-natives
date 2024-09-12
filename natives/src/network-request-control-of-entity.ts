import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_REQUEST_CONTROL_OF_ENTITY
 *
 * 0xF093E270C0B6B318

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function networkRequestControlOfEntity(entity: EntityIndex): boolean {
	const networkRequestControlOfEntity_result = Citizen.invokeNative<boolean>('0xF093E270C0B6B318', entity);
	return networkRequestControlOfEntity_result;
}