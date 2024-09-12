/**
 * HUD:THEFEED_AUTO_POST_GAMETIPS_OFF
 *
 * 0x1E528DDB9C065FB7

 * Turns random game tips off.
 * THEFEED_FORCE_RENDER_OFF() may need to be called depending on
 * where this needs to be displayed.
 * Displays "normal" notifications again after calling `THEFEED_AUTO_POST_GAMETIPS_ON` (those that were drawn before calling this native too), though those will have a weird offset and stay on screen forever (tested with notifications created from same script).
 * 
 * ------------------------------------------------------------------
 */
export function thefeedAutoPostGametipsOff(): void {
	const thefeedAutoPostGametipsOff_result = Citizen.invokeNative<void>('0x1E528DDB9C065FB7', );
	return thefeedAutoPostGametipsOff_result;
}