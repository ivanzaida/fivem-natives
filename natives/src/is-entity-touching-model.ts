import { EntityIndex, ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_TOUCHING_MODEL
 *
 * 0xE68E61D23A75BC3E

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {ModelNames} modelHashKey
 * @returns {boolean}  
 */
export function isEntityTouchingModel(entity: EntityIndex, modelHashKey: ModelNames): boolean {
	const isEntityTouchingModel_result = Citizen.invokeNative<boolean>('0xE68E61D23A75BC3E', entity, modelHashKey);
	return isEntityTouchingModel_result;
}