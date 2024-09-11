/**
 * HUD:ADD_NEXT_MESSAGE_TO_PREVIOUS_BRIEFS
 *
 * 0x3EC26139639016E5

 * 
 * ------------------------------------------------------------------
 * @param {boolean} addToPrevBriefsFlag
 */
export function addNextMessageToPreviousBriefs(addToPrevBriefsFlag: boolean): void {
	const addNextMessageToPreviousBriefs_result = Citizen.invokeNative<void>('0x3EC26139639016E5', addToPrevBriefsFlag);
	return addNextMessageToPreviousBriefs_result;
}