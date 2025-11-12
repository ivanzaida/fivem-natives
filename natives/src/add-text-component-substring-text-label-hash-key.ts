/**
 * HUD:ADD_TEXT_COMPONENT_SUBSTRING_TEXT_LABEL_HASH_KEY
 *
 * 0xD4006E065B0782FA

 * 
 * It adds the localized text of the specified GXT entry name. Eg. if the argument is GET_HASH_KEY("ES_HELP"), adds "Continue". Just uses a text labels hash key
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} hashKeyOfSubStringTextLabelToAdd
 */
export function addTextComponentSubstringTextLabelHashKey(hashKeyOfSubStringTextLabelToAdd: number): void {
	const addTextComponentSubstringTextLabelHashKey_result = Citizen.invokeNative<void>('0xD4006E065B0782FA', hashKeyOfSubStringTextLabelToAdd);
	return addTextComponentSubstringTextLabelHashKey_result;
}