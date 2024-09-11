/**
 * MISC:USING_MISSION_CREATOR
 *
 * 0xCC1EDB9BCC914639

 * 
 * ------------------------------------------------------------------
 * @param {boolean} newState
 */
export function usingMissionCreator(newState: boolean): void {
	const usingMissionCreator_result = Citizen.invokeNative<void>('0xCC1EDB9BCC914639', newState);
	return usingMissionCreator_result;
}