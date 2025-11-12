/**
 * HUD:CLEAR_THIS_PRINT
 *
 * 0x4E8E15513E171E54

 * 
 * p0: found arguments in the b617d scripts: https://pastebin.com/X5akCN7z
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} textLabel
 */
export function clearThisPrint(textLabel: string): void {
	const clearThisPrint_result = Citizen.invokeNative<void>('0x4E8E15513E171E54', textLabel);
	return clearThisPrint_result;
}