/**
 * PLAYER:GET_TIME_SINCE_LAST_DEATH
 *
 * 0xA4A53492861BFB22

 * 
 * Returns -1 if the player hasn't been killed yet since starting a session.
 * 
 * Returns the time since the character died in (ms) milliseconds.
 * 
 * example
 * 
 * var time = Function.call<int>(Hash.GET_TIME_SINCE_LAST_DEATH();
 * 
 * UI.DrawSubtitle(time.ToString());
 * 
 * if player has not died, the int returned will be -1.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getTimeSinceLastDeath(): number {
	const getTimeSinceLastDeath_result = Citizen.invokeNative<number>('0xA4A53492861BFB22', );
	return getTimeSinceLastDeath_result;
}