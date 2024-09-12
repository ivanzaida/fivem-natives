/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL
 *
 * 0xACF853FB3F6EA7D4

 * 
 * ------------------------------------------------------------------
 * @param {string} subStringTextLabelToAdd
 */
export function addTextComponentSubstringTextLabel(subStringTextLabelToAdd: string): void {
	const addTextComponentSubstringTextLabel_result = Citizen.invokeNative<void>('0xACF853FB3F6EA7D4', subStringTextLabelToAdd);
	return addTextComponentSubstringTextLabel_result;
}