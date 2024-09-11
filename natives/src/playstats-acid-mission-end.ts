/**
 * STATS:_PLAYSTATS_ACID_MISSION_END
 *
 * 0x11FD0D892567AF52

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 */
export function playstatsAcidMissionEnd(p0: unknown): void {
	const playstatsAcidMissionEnd_result = Citizen.invokeNative<void>('0x11FD0D892567AF52', p0);
	return playstatsAcidMissionEnd_result;
}