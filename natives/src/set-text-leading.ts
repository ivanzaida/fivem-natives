/**
 * HUD:SET_TEXT_LEADING
 *
 * 0xFB193A91887FFAB1

 * 
 * ------------------------------------------------------------------
 * @param {number} leadingAmount
 */
export function setTextLeading(leadingAmount: number): void {
	const setTextLeading_result = Citizen.invokeNative<void>('0xFB193A91887FFAB1', leadingAmount);
	return setTextLeading_result;
}