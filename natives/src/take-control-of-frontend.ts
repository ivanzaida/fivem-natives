/**
 * HUD:TAKE_CONTROL_OF_FRONTEND
 *
 * 0x26CE50366B7C2760

 * 
 * Disables frontend (works in custom frontends, not sure about regular pause menu) navigation keys on keyboard. Not sure about controller. Does not disable mouse controls. No need to call this every tick.
 * 
 * To enable the keys again, use `0x14621BB1DF14E2B2`.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function takeControlOfFrontend(): void {
	const takeControlOfFrontend_result = Citizen.invokeNative<void>('0x26CE50366B7C2760', );
	return takeControlOfFrontend_result;
}