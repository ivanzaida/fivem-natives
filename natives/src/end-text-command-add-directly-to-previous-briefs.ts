/**
 * HUD:END_TEXT_COMMAND_ADD_DIRECTLY_TO_PREVIOUS_BRIEFS
 *
 * 0x77AFF2EAF772F223

 * 
 * ------------------------------------------------------------------
 * @param {boolean} usesUnderscore
 */
export function endTextCommandAddDirectlyToPreviousBriefs(usesUnderscore: boolean): void {
	const endTextCommandAddDirectlyToPreviousBriefs_result = Citizen.invokeNative<void>('0x77AFF2EAF772F223', usesUnderscore);
	return endTextCommandAddDirectlyToPreviousBriefs_result;
}