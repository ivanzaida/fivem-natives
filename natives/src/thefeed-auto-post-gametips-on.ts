/**
 * HUD:THEFEED_AUTO_POST_GAMETIPS_ON
 *
 * 0x9EABCC9DA69DEDC2

 * 
 * Turns random game tips on.
 * THEFEED_FORCE_RENDER_ON() may need to be called depending on
 * where this needs to be displayed.
 * 
 * Enables loading screen tips to be be shown (`THEFEED_SHOW`), blocks other kinds of notifications from being displayed (at least from current script). Call `THEFEED_AUTO_POST_GAMETIPS_OFF` to display those again.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function thefeedAutoPostGametipsOn(): void {
	const thefeedAutoPostGametipsOn_result = Citizen.invokeNative<void>('0x9EABCC9DA69DEDC2', );
	return thefeedAutoPostGametipsOn_result;
}