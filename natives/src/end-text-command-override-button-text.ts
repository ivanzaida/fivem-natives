/**
 * HUD:END_TEXT_COMMAND_OVERRIDE_BUTTON_TEXT
 *
 * 0xC5999CADF163C996

 * 
 * ------------------------------------------------------------------
 * @param {number} slot
 */
export function endTextCommandOverrideButtonText(slot: number): void {
	const endTextCommandOverrideButtonText_result = Citizen.invokeNative<void>('0xC5999CADF163C996', slot);
	return endTextCommandOverrideButtonText_result;
}