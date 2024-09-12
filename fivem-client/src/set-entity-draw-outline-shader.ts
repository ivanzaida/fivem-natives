/**
 * CFX:SET_ENTITY_DRAW_OUTLINE_SHADER
 *
 * 0X5261A01A

 * Sets variant of shader that will be used to draw entity outline.Variants are: 0: Default value, gauss shader. 1: 2px wide solid color outline. 2: Fullscreen solid color except for entity.
 * 
 * ------------------------------------------------------------------
 * @param {number} shader An outline shader variant.
 */
export function setEntityDrawOutlineShader(shader: number): void {
	const setEntityDrawOutlineShader_result = Citizen.invokeNative<void>('0X5261A01A', shader);
	return setEntityDrawOutlineShader_result;
}