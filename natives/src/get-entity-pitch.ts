import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_PITCH
 *
 * 0xED4193081E867405

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {number}  
 */
export function getEntityPitch(entity: EntityIndex): number {
	const getEntityPitch_result = Citizen.invokeNative<number>('0xED4193081E867405', entity);
	return getEntityPitch_result;
}