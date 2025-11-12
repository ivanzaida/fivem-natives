/**
 * CFX:SET_FOG_VOLUME_RENDER_DISABLED
 *
 * 0xFBC64DA3

 * This completely disables rendering of fog volumes (vfxfogvolumeinfo.ymt).
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state Toggle on or off.
 */
export function setFogVolumeRenderDisabled(state: boolean): void {
	const setFogVolumeRenderDisabled_result = Citizen.invokeNative<void>('0xFBC64DA3', state);
	return setFogVolumeRenderDisabled_result;
}