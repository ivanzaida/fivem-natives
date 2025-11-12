/**
 * PLAYER:GET_TIME_SINCE_LAST_ARREST
 *
 * 0x5B5405C7B1021630

 * 
 * Returns -1 if the player hasn't been arrested yet since starting a session.
 * 
 * Returns the time since the character was arrested in (ms) milliseconds.
 * 
 * example
 * 
 * var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_ARREST();
 * 
 * UI.DrawSubtitle(time.ToString());
 * 
 * if player has not been arrested, the int returned will be -1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getTimeSinceLastArrest(): number {
	const getTimeSinceLastArrest_result = Citizen.invokeNative<number>('0x5B5405C7B1021630', );
	return getTimeSinceLastArrest_result;
}