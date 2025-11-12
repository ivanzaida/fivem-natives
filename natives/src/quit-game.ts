/**
 * MISC:QUIT_GAME
 *
 * 0x1AB062C44F06F033

 * 
 * Exits the game and downloads a fresh social club update on next restart.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function quitGame(): void {
	const quitGame_result = Citizen.invokeNative<void>('0x1AB062C44F06F033', );
	return quitGame_result;
}