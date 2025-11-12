import { EntityIndex } from '@ivanzaida/structures'

/**
 * STREAMING:IS_ENTITY_FOCUS
 *
 * 0x4C052E5245B17920

 * 
 * returns true if the specified entity is the current focus.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {boolean}  
 */
export function isEntityFocus(entity: EntityIndex): boolean {
	const isEntityFocus_result = Citizen.invokeNative<boolean>('0x4C052E5245B17920', entity);
	return isEntityFocus_result;
}