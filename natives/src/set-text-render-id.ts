/**
 * HUD:SET_TEXT_RENDER_ID
 *
 * 0x61055542D9D877AE

 * 
 * The rendertarget ID can be obtained through the <...>_RENDERTARGET_RENDER_ID Functions.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} render
 */
export function setTextRenderId(render: number): void {
	const setTextRenderId_result = Citizen.invokeNative<void>('0x61055542D9D877AE', render);
	return setTextRenderId_result;
}