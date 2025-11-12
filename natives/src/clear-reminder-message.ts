/**
 * HUD:CLEAR_REMINDER_MESSAGE
 *
 * 0xF64D9910FB38427C

 * 
 * This native does absolutely nothing, just a nullsub
 * 
 * 
 * ------------------------------------------------------------------
 */
export function clearReminderMessage(): void {
	const clearReminderMessage_result = Citizen.invokeNative<void>('0xF64D9910FB38427C', );
	return clearReminderMessage_result;
}