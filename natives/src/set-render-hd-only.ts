/**
 * STREAMING:SET_RENDER_HD_ONLY
 *
 * 0x030379A8083CE8F9

 * 
 * In very specific circumstances it may be desirable to pre-stream a tiny HD scene and cut to it,
 * and stop the game from trying to draw nearby LODs etc.
 * Set the game to only render HD models (or not) and strip out all LODs from the scene.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} hdOnly
 */
export function setRenderHdOnly(hdOnly: boolean): void {
	const setRenderHdOnly_result = Citizen.invokeNative<void>('0x030379A8083CE8F9', hdOnly);
	return setRenderHdOnly_result;
}