import { PedIndex, ESyncedScenePlaybackFlags, ERagdollBlockingFlags, EIkControlFlags } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ADD_PED_TO_SYNCHRONISED_SCENE
 *
 * 0x0B94AB707B44E754

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
 * @param {EIkControlFlags} ikFlags
 */
export function networkAddPedToSynchronisedScene(ped: PedIndex, networkSceneID: number, animDictionary: string, anim: string, blendInDelta: number, blendOutDelta: number, flags: ESyncedScenePlaybackFlags | number = 0, ragdollFlags: ERagdollBlockingFlags | number = 0, moverBlendInDelta: number = 1000, ikFlags: EIkControlFlags | number = 0): void {
	const networkAddPedToSynchronisedScene_result = Citizen.invokeNative<void>('0x0B94AB707B44E754', ped, networkSceneID, animDictionary, anim, blendInDelta, blendOutDelta, flags, ragdollFlags, moverBlendInDelta, ikFlags);
	return networkAddPedToSynchronisedScene_result;
}