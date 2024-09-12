/**
 * MISC:GET_GAME_TIMER
 *
 * 0x1DD05E817C89C737

 * The game timer is counted in milliseconds and starts at 0 when the game begins. This command could be useful if you want to trigger something after a number of milliseconds but can’t use a WAIT
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getGameTimer(): number {
	const getGameTimer_result = Citizen.invokeNative<number>('0x1DD05E817C89C737', );
	return getGameTimer_result;
}