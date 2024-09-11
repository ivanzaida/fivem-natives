/**
 * HUD:BEGIN_TEXT_COMMAND_ADD_DIRECTLY_TO_PREVIOUS_BRIEFS
 *
 * 0x2E787BE7A586A8E0

 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandAddDirectlyToPreviousBriefs(mainTextLabel: string): void {
	const beginTextCommandAddDirectlyToPreviousBriefs_result = Citizen.invokeNative<void>('0x2E787BE7A586A8E0', mainTextLabel);
	return beginTextCommandAddDirectlyToPreviousBriefs_result;
}