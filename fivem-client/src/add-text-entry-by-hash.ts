/**
 * CFX:ADD_TEXT_ENTRY_BY_HASH
 *
 * 0x289DA860

 * 
 * ------------------------------------------------------------------
 * @param {number} entryKey
 * @param {string} entryText
 */
export function addTextEntryByHash(entryKey: number, entryText: string): void {
	const addTextEntryByHash_result = Citizen.invokeNative<void>('0x289DA860', entryKey, entryText);
	return addTextEntryByHash_result;
}