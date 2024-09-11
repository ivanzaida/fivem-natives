import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_ENTITY_LOCALLY_VISIBLE
 *
 * 0x158E535F1DD78CFE

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function setEntityLocallyVisible(entity: EntityIndex): void {
	const setEntityLocallyVisible_result = Citizen.invokeNative<void>('0x158E535F1DD78CFE', entity);
	return setEntityLocallyVisible_result;
}