import { PedIndex, ESyncedScenePlaybackFlags, ERagdollBlockingFlags, EIkControlFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_SYNCHRONIZED_SCENE
 *
 * 0x3DA436E63AB0F541

 * 
 * TASK::TASK_SYNCHRONIZED_SCENE(ped, scene, "creatures@rottweiler@in_vehicle@std_car", "get_in", 1000.0, -8.0, 4, 0, 0x447a0000, 0);
 * 
 * Full list of animation dictionaries and anims by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/animDictsCompact.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} sceneID
 * @param {string} animDictionary
 * @param {string} anim
 * @param {number} blendInDelta
 * @param {number} blendOutDelta
 * @param {ESyncedScenePlaybackFlags} flags
 * @param {ERagdollBlockingFlags} ragdollFlags
 * @param {number} moverBlendInDelta
 * @param {EIkControlFlags} ikFlags
 */
export function taskSynchronizedScene(ped: PedIndex, sceneID: number, animDictionary: string, anim: string, blendInDelta: number, blendOutDelta: number, flags: ESyncedScenePlaybackFlags | number = 0, ragdollFlags: ERagdollBlockingFlags | number = 0, moverBlendInDelta: number = 1000, ikFlags: EIkControlFlags | number = 0): void {
	const taskSynchronizedScene_result = Citizen.invokeNative<void>('0x3DA436E63AB0F541', ped, sceneID, animDictionary, anim, blendInDelta, blendOutDelta, flags, ragdollFlags, moverBlendInDelta, ikFlags);
	return taskSynchronizedScene_result;
}