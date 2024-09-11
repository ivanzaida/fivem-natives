import { PedIndex, ESyncedScenePlaybackFlags, ERagdollBlockingFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ADD_PED_TO_SYNCHRONISED_SCENE_WITH_IK
 *
 * 0xB81F209A2A150B89

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} networkSceneID
 * @param {string} animDictionary
 * @param {string} anim
 * @param {number} blendInDelta
 * @param {number} blendOutDelta
 * @param {ESyncedScenePlaybackFlags} flags
 * @param {ERagdollBlockingFlags} ragdollFlags
 * @param {number} moverBlendInDelta
 * @param {number} ikFlags
 */
export function networkAddPedToSynchronisedSceneWithIk(ped: PedIndex, networkSceneID: number, animDictionary: string, anim: string, blendInDelta: number, blendOutDelta: number, flags: ESyncedScenePlaybackFlags | number = 0, ragdollFlags: ERagdollBlockingFlags | number = 0, moverBlendInDelta: number = 1000, ikFlags: number = 0): void {
	const networkAddPedToSynchronisedSceneWithIk_result = Citizen.invokeNative<void>('0xB81F209A2A150B89', ped, networkSceneID, animDictionary, anim, blendInDelta, blendOutDelta, flags, ragdollFlags, moverBlendInDelta, ikFlags);
	return networkAddPedToSynchronisedSceneWithIk_result;
}