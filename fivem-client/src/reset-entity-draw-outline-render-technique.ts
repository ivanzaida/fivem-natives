/**
 * CFX:RESET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE
 *
 * 0x8EB6EC38

 * This function undoes changes made by [`SET_ENTITY_DRAW_OUTLINE_RENDER_TECHNIQUE`](#_0x68DFF2DD), restoring the original outline rendering behavior. The default render technique group is `unlit`.
 * 
 * ------------------------------------------------------------------
 */
export function resetEntityDrawOutlineRenderTechnique(): void {
	const resetEntityDrawOutlineRenderTechnique_result = Citizen.invokeNative<void>('0x8EB6EC38', );
	return resetEntityDrawOutlineRenderTechnique_result;
}