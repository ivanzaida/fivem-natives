import { ECutscenePlaybackFlags } from '@ivanzaida/structures'

/**
 * CUTSCENE:IS_CUTSCENE_PLAYBACK_FLAG_SET
 *
 * 0xFE2EB239B608CDF9

 * 
 * ------------------------------------------------------------------
 * @param {ECutscenePlaybackFlags} flags
 * @returns {boolean}  
 */
export function isCutscenePlaybackFlagSet(flags: ECutscenePlaybackFlags | number): boolean {
	const isCutscenePlaybackFlagSet_result = Citizen.invokeNative<boolean>('0xFE2EB239B608CDF9', flags);
	return isCutscenePlaybackFlagSet_result;
}