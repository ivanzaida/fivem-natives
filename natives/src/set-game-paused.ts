/**
 * MISC:SET_GAME_PAUSED
 *
 * 0x98E393364463951A

 * 
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused which means you will lose control and the game remains in paused mode until you exit GTA5.exe
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} doPause
 */
export function setGamePaused(doPause: boolean): void {
	const setGamePaused_result = Citizen.invokeNative<void>('0x98E393364463951A', doPause);
	return setGamePaused_result;
}