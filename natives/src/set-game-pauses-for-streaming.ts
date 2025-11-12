/**
 * STREAMING:SET_GAME_PAUSES_FOR_STREAMING
 *
 * 0xD82473EFEF7FC622

 * 
 * The credits will call it with FALSE at the start and
 * TRUE at the end. This is to stop the scrolling of the credits from pausing when the player warps from
 * one area of the city to another during the screen fades.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} allowPause
 */
export function setGamePausesForStreaming(allowPause: boolean): void {
	const setGamePausesForStreaming_result = Citizen.invokeNative<void>('0xD82473EFEF7FC622', allowPause);
	return setGamePausesForStreaming_result;
}