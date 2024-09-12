/**
 * CFX:SET_ENTITY_DRAW_OUTLINE_COLOR
 *
 * 0xB41A56C2

 * Sets color for entity outline. `255, 0, 255, 255` by default.
 * 
 * ------------------------------------------------------------------
 * @param {number} red Red component of color.
 * @param {number} green Green component of color.
 * @param {number} blue Blue component of color.
 * @param {number} alpha Alpha component of color, ignored for shader 0.
 */
export function setEntityDrawOutlineColor(red: number, green: number, blue: number, alpha: number): void {
	const setEntityDrawOutlineColor_result = Citizen.invokeNative<void>('0xB41A56C2', red, green, blue, alpha);
	return setEntityDrawOutlineColor_result;
}