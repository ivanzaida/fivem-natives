/**
 * CFX:ADD_TEXT_ENTRY
 *
 * 0X32CA01C3

 * 
 * ------------------------------------------------------------------
 * @param {string} entryKey
 * @param {string} entryText
 */
export function addTextEntry(entryKey: string, entryText: string): void {
	const addTextEntry_result = Citizen.invokeNative<void>('0X32CA01C3', entryKey, entryText);
	return addTextEntry_result;
}