import { EntityIndex, ESyncedScenePlaybackFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ADD_ENTITY_TO_SYNCHRONISED_SCENE
 *
 * 0xDEE175A01A05A2F7

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} networkSceneID
 * @param {string} animDictionary
 * @param {string} anim
 * @param {number} blendInDelta
 * @param {number} blendOutDelta
 * @param {ESyncedScenePlaybackFlags} flags
 */
export function networkAddEntityToSynchronisedScene(entity: EntityIndex, networkSceneID: number, animDictionary: string, anim: string, blendInDelta: number, blendOutDelta: number, flags: ESyncedScenePlaybackFlags | number = 0): void {
	const networkAddEntityToSynchronisedScene_result = Citizen.invokeNative<void>('0xDEE175A01A05A2F7', entity, networkSceneID, animDictionary, anim, blendInDelta, blendOutDelta, flags);
	return networkAddEntityToSynchronisedScene_result;
}