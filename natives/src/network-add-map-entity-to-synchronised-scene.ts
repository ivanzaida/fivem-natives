import { ModelNames, ESyncedScenePlaybackFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ADD_MAP_ENTITY_TO_SYNCHRONISED_SCENE
 *
 * 0xA78D3770EC931263

 * 
 * Similar structure as NETWORK_ADD_ENTITY_TO_SYNCHRONISED_SCENE but it includes this time a hash.
 * In casino_slots it is used one time in a synced scene involving a ped and the slot machine?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} networkSceneID
 * @param {ModelNames} modelHashKey
 * @param {number} modelPositionX
 * @param {number} modelPositionY
 * @param {number} modelPositionZ
 * @param {string} animDictionary
 * @param {string} anim
 * @param {number} blendInDelta
 * @param {number} blendOutDelta
 * @param {ESyncedScenePlaybackFlags} flags
 */
export function networkAddMapEntityToSynchronisedScene(networkSceneID: number, modelHashKey: ModelNames, modelPositionX: number, modelPositionY: number, modelPositionZ: number, animDictionary: string, anim: string, blendInDelta: number, blendOutDelta: number, flags: ESyncedScenePlaybackFlags | number = 0): void {
	const networkAddMapEntityToSynchronisedScene_result = Citizen.invokeNative<void>('0xA78D3770EC931263', networkSceneID, modelHashKey, modelPositionX, modelPositionY, modelPositionZ, animDictionary, anim, blendInDelta, blendOutDelta, flags);
	return networkAddMapEntityToSynchronisedScene_result;
}