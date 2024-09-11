import { ModelNames, ECutsceneEntityStreamingFlags } from '@ivanzaida/structures'

/**
 * CUTSCENE:SET_CUTSCENE_ENTITY_STREAMING_FLAGS
 *
 * 0x7901DE0AC779EB29

 * 
 * ------------------------------------------------------------------
 * @param {string} sceneHandle
 * @param {ModelNames} model
 * @param {ECutsceneEntityStreamingFlags} streamingFlags
 */
export function setCutsceneEntityStreamingFlags(sceneHandle: string, model: ModelNames = 0, streamingFlags: ECutsceneEntityStreamingFlags | number = 0): void {
	const setCutsceneEntityStreamingFlags_result = Citizen.invokeNative<void>('0x7901DE0AC779EB29', sceneHandle, model, streamingFlags);
	return setCutsceneEntityStreamingFlags_result;
}