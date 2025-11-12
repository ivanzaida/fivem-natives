/**
 * HUD:BUSYSPINNER_OFF
 *
 * 0x65662724C6BC4810

 * 
 * Removes the loading prompt at the bottom right of the screen.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function busyspinnerOff(): void {
	const busyspinnerOff_result = Citizen.invokeNative<void>('0x65662724C6BC4810', );
	return busyspinnerOff_result;
}