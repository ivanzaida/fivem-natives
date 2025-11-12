import { ModelNames } from '@ivanzaida/structures'

/**
 * CUTSCENE:DOES_CUTSCENE_ENTITY_EXIST
 *
 * 0x24CAD023099769B1

 * 
 * Only need to pass the model in if the scene has both an IG_ and CS_ version of the same model
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} entitySceneName
 * @param {ModelNames} model
 * @returns {boolean}  
 */
export function doesCutsceneEntityExist(entitySceneName: string, model: ModelNames = 0): boolean {
	const doesCutsceneEntityExist_result = Citizen.invokeNative<boolean>('0x24CAD023099769B1', entitySceneName, model);
	return doesCutsceneEntityExist_result;
}