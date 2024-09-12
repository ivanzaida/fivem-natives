/**
 * CUTSCENE:GET_CUTSCENE_END_TIME
 *
 * 0x0E805BBAA9779838

 * Gets the end time of the currently running cutscene (taking into account the specified concat section play list, but in the whole concat scene timeline). Note that this may not be
 * the actual duration of the cutscene, it simply returns the end time of the last section you choose to play from the original asset. If your
 * concat list chooses to skip any sections, this will be beyond the actual duration of the scene as the player sees it. Use GET_CUTSCENE_PLAY_DURATION below
 * if you want the real time that the cutscene will play for based on your specified concat list.
 * e.g. for a scene like this:		|  A (2secs) |  B (3 secs)   |   C (2 secs)  |  D (3 secs) |
 * if your concat list chooses to play A & C (omitting B and D) this command returns 7 seconds(the end time of C).
 * if your concat list chooses to play D (omitting A, B and C) this command returns 10 seconds (the end time of D).
 * Note: GET_CUTSCENE_TIME matches this behaviour, and will jump when skipping sections that aren't played, so you may be able to use that to make comparisons,
 * but potentially only within the first / last concat sections (depending on the play list you've specified).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getCutsceneEndTime(): number {
	const getCutsceneEndTime_result = Citizen.invokeNative<number>('0x0E805BBAA9779838', );
	return getCutsceneEndTime_result;
}