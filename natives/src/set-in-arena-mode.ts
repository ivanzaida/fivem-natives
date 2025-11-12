/**
 * PHYSICS:SET_IN_ARENA_MODE
 *
 * 0xB5CC1BD0A7024484

 * 
 * Related to the lower-end of a vehicles fTractionCurve, e.g., from standing starts and acceleration from low/zero speeds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inArenaMode
 */
export function setInArenaMode(inArenaMode: boolean): void {
	const setInArenaMode_result = Citizen.invokeNative<void>('0xB5CC1BD0A7024484', inArenaMode);
	return setInArenaMode_result;
}