/**
 * LOADINGSCREEN:LOBBY_SET_AUTO_MP_RANDOM_JOB
 *
 * 0x8191C51F9DD9189D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isAuto
 */
export function lobbySetAutoMpRandomJob(isAuto: boolean): void {
	const lobbySetAutoMpRandomJob_result = Citizen.invokeNative<void>('0x8191C51F9DD9189D', isAuto);
	return lobbySetAutoMpRandomJob_result;
}