import { EntityIndex } from '@ivanzaida/structures'

/**
 * GRAPHICS:UPDATE_LIGHTS_ON_ENTITY
 *
 * 0xFF1E5DCD728C42E2

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 */
export function updateLightsOnEntity(entity: EntityIndex): void {
	const updateLightsOnEntity_result = Citizen.invokeNative<void>('0xFF1E5DCD728C42E2', entity);
	return updateLightsOnEntity_result;
}