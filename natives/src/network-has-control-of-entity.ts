import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HAS_CONTROL_OF_ENTITY
 *
 * 0x1B1A446EFA398EB5

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function networkHasControlOfEntity(entity: EntityIndex): boolean {
	const networkHasControlOfEntity_result = Citizen.invokeNative<boolean>('0x1B1A446EFA398EB5', entity);
	return networkHasControlOfEntity_result;
}