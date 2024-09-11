/**
 * HUD:SET_PLAYER_ICON_COLOUR
 *
 * 0x4D66E2ACA1273DC7

 * 
 * ------------------------------------------------------------------
 * @param {number} colour
 */
export function setPlayerIconColour(colour: number): void {
	const setPlayerIconColour_result = Citizen.invokeNative<void>('0x4D66E2ACA1273DC7', colour);
	return setPlayerIconColour_result;
}