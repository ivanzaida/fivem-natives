import { ModelNames, EntityIndex } from '@ivanzaida/structures'

/**
 * CUTSCENE:GET_ENTITY_INDEX_OF_CUTSCENE_ENTITY
 *
 * 0xD461826371A3782B

 * 
 * These entitis can be deleted at any time, use the registered version to check for
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} entitySceneName
 * @param {ModelNames} model
 * @returns {EntityIndex}  
 */
export function getEntityIndexOfCutsceneEntity(entitySceneName: string, model: ModelNames = 0): EntityIndex {
	const getEntityIndexOfCutsceneEntity_result = Citizen.invokeNative<EntityIndex>('0xD461826371A3782B', entitySceneName, model);
	return getEntityIndexOfCutsceneEntity_result;
}