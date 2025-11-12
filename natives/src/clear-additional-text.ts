import { ETextBlockSlots } from '@ivanzaida/structures'

/**
 * HUD:CLEAR_ADDITIONAL_TEXT
 *
 * 0xA790E8E6FD7393AC

 * 
 * You will probably always want to call this command with TRUE for bClearPreviousBriefs. The reason for adding this command was for the situation where the player fails a mission and then replays it.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ETextBlockSlots} slotNumber
 * @param {boolean} clearPreviousBriefs
 */
export function clearAdditionalText(slotNumber: ETextBlockSlots | number, clearPreviousBriefs: boolean): void {
	const clearAdditionalText_result = Citizen.invokeNative<void>('0xA790E8E6FD7393AC', slotNumber, clearPreviousBriefs);
	return clearAdditionalText_result;
}