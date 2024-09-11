/**
 * STATS:PLAYSTATS_RANDOM_MISSION_DONE
 *
 * 0x3AF124228E3EAF07

 * 
 * ------------------------------------------------------------------
 * @param {string} missionName
 * @param {number} outcome
 * @param {number} timespent
 * @param {number} attempts
 */
export function playstatsRandomMissionDone(missionName: string, outcome: number, timespent: number, attempts: number = 0): void {
	const playstatsRandomMissionDone_result = Citizen.invokeNative<void>('0x3AF124228E3EAF07', missionName, outcome, timespent, attempts);
	return playstatsRandomMissionDone_result;
}