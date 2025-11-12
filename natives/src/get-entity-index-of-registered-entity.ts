import { ModelNames, EntityIndex } from '@ivanzaida/structures'

/**
 * CUTSCENE:GET_ENTITY_INDEX_OF_REGISTERED_ENTITY
 *
 * 0x4240B5D04F91480C

 * 
 * Call this command during the cutscene when REGISTER_ENTITY_FOR_CUTSCENE with CU_CREATE_AND_ANIMATE_NEW_SCRIPT_ENTITY is used.
 * Only need to pass a Model in if the scene contains both an IG_ and CS_ version of the same entity.
 * e.g. The scene is seamless and will swap a the CS_ version for an IG_ at the end of the scene.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} entitySceneName
 * @param {ModelNames} model
 * @returns {EntityIndex}  
 */
export function getEntityIndexOfRegisteredEntity(entitySceneName: string, model: ModelNames = 0): EntityIndex {
	const getEntityIndexOfRegisteredEntity_result = Citizen.invokeNative<EntityIndex>('0x4240B5D04F91480C', entitySceneName, model);
	return getEntityIndexOfRegisteredEntity_result;
}