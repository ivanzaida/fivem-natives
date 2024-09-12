import { EntityIndex, ModelNames } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_MODEL
 *
 * 0XDAFCB3EC

 * Returns the model hash from the entity
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {ModelNames}  
 */
export function getEntityModel(entity: EntityIndex): ModelNames {
	const getEntityModel_result = Citizen.invokeNative<ModelNames>('0XDAFCB3EC', entity);
	return getEntityModel_result;
}