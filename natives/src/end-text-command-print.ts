/**
 * HUD:END_TEXT_COMMAND_PRINT
 *
 * 0x0A3136AD174470CC

 * 
 * Draws the subtitle at middle center of the screen.
 * 
 * int duration = time in milliseconds to show text on screen before disappearing
 * 
 * drawImmediately = If true, the text will be drawn immediately, if false, the text will be drawn after the previous subtitle has finished
 * 
 * Used to be known as _DRAW_SUBTITLE_TIMED
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} duration
 * @param {boolean} printNow
 */
export function endTextCommandPrint(duration: number, printNow: boolean): void {
	const endTextCommandPrint_result = Citizen.invokeNative<void>('0x0A3136AD174470CC', duration, printNow);
	return endTextCommandPrint_result;
}