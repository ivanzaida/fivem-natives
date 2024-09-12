/**
 * HUD:SHOW_START_MISSION_INSTRUCTIONAL_BUTTON
 *
 * 0xD441661EA68E9C70

 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function showStartMissionInstructionalButton(value: boolean): void {
	const showStartMissionInstructionalButton_result = Citizen.invokeNative<void>('0xD441661EA68E9C70', value);
	return showStartMissionInstructionalButton_result;
}