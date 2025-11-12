import { ECutsceneHandleSearchResult } from '@ivanzaida/structures'

/**
 * CUTSCENE:DOES_CUTSCENE_HANDLE_EXIST
 *
 * 0x9AF94A69465A9B87

 * 
 * Use this to determine if a cutscene entity with the given scene handle exists in the currently running cut scene
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sceneHandle
 * @returns {ECutsceneHandleSearchResult}  
 */
export function doesCutsceneHandleExist(sceneHandle: string): ECutsceneHandleSearchResult {
	const doesCutsceneHandleExist_result = Citizen.invokeNative<ECutsceneHandleSearchResult>('0x9AF94A69465A9B87', sceneHandle);
	return doesCutsceneHandleExist_result;
}