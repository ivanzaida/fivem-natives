/**
 * HUD:FLASH_WANTED_DISPLAY
 *
 * 0x3C77232660BA1403

 * 
 * Will make the wanted display flash for as long as it's displayed
 * but WON'T force it to display. That's being wanteds' job.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldBeFlashing
 */
export function flashWantedDisplay(shouldBeFlashing: boolean): void {
	const flashWantedDisplay_result = Citizen.invokeNative<void>('0x3C77232660BA1403', shouldBeFlashing);
	return flashWantedDisplay_result;
}