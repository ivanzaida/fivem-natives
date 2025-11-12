/**
 * CUTSCENE:GET_CUTSCENE_TOTAL_DURATION
 *
 * 0xA4A6A6336888604F

 * 
 * Gets the total duration in milliseconds of the loaded cutscene.
 * Note this does not take into account the concat list you specify from script, it's the total length of the whole cutscene asset.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCutsceneTotalDuration(): number {
	const getCutsceneTotalDuration_result = Citizen.invokeNative<number>('0xA4A6A6336888604F', );
	return getCutsceneTotalDuration_result;
}