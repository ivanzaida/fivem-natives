/**
 * PAD:SET_CURSOR_POSITION
 *
 * 0xA715917D148B834B

 * 
 * Returns true if the cursor position was succesfully set (also returns false on platforms not supported).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} x
 * @param {number} y
 * @returns {boolean}  
 */
export function setCursorPosition(x: number, y: number): boolean {
	const setCursorPosition_result = Citizen.invokeNative<boolean>('0xA715917D148B834B', x, y);
	return setCursorPosition_result;
}