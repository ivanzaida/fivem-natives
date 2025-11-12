/**
 * CFX:GET_GAME_TIMER
 *
 * 0xA4EA0691

 * 
 * The game timer is counted in milliseconds and starts at 0 when the game begins. This command could be useful if you want to trigger something after a number of milliseconds but can’t use a WAIT
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getGameTimer(): number {
	const getGameTimer_result = Citizen.invokeNative<number>('0xA4EA0691', );
	return getGameTimer_result;
}