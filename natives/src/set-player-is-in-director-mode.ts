/**
 * HUD:SET_PLAYER_IS_IN_DIRECTOR_MODE
 *
 * 0x8BF557F9256B2A6E

 * 
 * If toggle is true, hides special ability bar / character name in the pause menu
 * If toggle is false, shows special ability bar / character name in the pause menu
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} isInDirectorMode
 */
export function setPlayerIsInDirectorMode(isInDirectorMode: boolean): void {
	const setPlayerIsInDirectorMode_result = Citizen.invokeNative<void>('0x8BF557F9256B2A6E', isInDirectorMode);
	return setPlayerIsInDirectorMode_result;
}