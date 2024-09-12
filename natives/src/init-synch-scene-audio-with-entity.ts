import { EntityIndex } from '@ivanzaida/structures'

/**
 * AUDIO:INIT_SYNCH_SCENE_AUDIO_WITH_ENTITY
 *
 * 0x4FE00B5CFB97782B

 * 
 * ------------------------------------------------------------------
 * @param {string} audioName
 * @param {EntityIndex} entity
 */
export function initSynchSceneAudioWithEntity(audioName: string, entity: EntityIndex): void {
	const initSynchSceneAudioWithEntity_result = Citizen.invokeNative<void>('0x4FE00B5CFB97782B', audioName, entity);
	return initSynchSceneAudioWithEntity_result;
}