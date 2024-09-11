/**
 * CUTSCENE:GET_CUTSCENE_PLAY_DURATION
 *
 * 0xC418F430F1F93AEE

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCutscenePlayDuration(): number {
	const getCutscenePlayDuration_result = Citizen.invokeNative<number>('0xC418F430F1F93AEE', );
	return getCutscenePlayDuration_result;
}