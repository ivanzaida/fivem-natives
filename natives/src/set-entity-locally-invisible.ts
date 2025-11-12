import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_ENTITY_LOCALLY_INVISIBLE
 *
 * 0xA612CEAF809E9032

 * 
 * Makes the provided entity visible for yourself for the current frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function setEntityLocallyInvisible(entity: EntityIndex): void {
	const setEntityLocallyInvisible_result = Citizen.invokeNative<void>('0xA612CEAF809E9032', entity);
	return setEntityLocallyInvisible_result;
}