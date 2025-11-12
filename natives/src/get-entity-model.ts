import { EntityIndex, ModelNames } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_MODEL
 *
 * 0x4B423FAA24E8ABF0

 * 
 * Returns the model hash from the entity
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {ModelNames}  
 */
export function getEntityModel(entity: EntityIndex): ModelNames {
	const getEntityModel_result = Citizen.invokeNative<ModelNames>('0x4B423FAA24E8ABF0', entity);
	return getEntityModel_result;
}