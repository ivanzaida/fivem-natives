/**
 * GRAPHICS:SET_PLAYER_TCMODIFIER_TRANSITION
 *
 * 0x58DF2EDF7CB54B60

 * 
 * ------------------------------------------------------------------
 * @param {number} transitionDelta
 */
export function setPlayerTcmodifierTransition(transitionDelta: number): void {
	const setPlayerTcmodifierTransition_result = Citizen.invokeNative<void>('0x58DF2EDF7CB54B60', transitionDelta);
	return setPlayerTcmodifierTransition_result;
}