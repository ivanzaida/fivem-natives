/**
 * AUDIO:PLAY_MISSION_COMPLETE_AUDIO
 *
 * 0xFAE22BD3C12AEFB4

 * 
 * Called 38 times in the scripts. There are 5 different audioNames used.
 *  One unknown removed below.
 * 
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("DEAD");
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("FRANKLIN_BIG_01");
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("GENERIC_FAILED");
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("TREVOR_SMALL_01");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} missionCompleteId
 */
export function playMissionCompleteAudio(missionCompleteId: string): void {
	const playMissionCompleteAudio_result = Citizen.invokeNative<void>('0xFAE22BD3C12AEFB4', missionCompleteId);
	return playMissionCompleteAudio_result;
}