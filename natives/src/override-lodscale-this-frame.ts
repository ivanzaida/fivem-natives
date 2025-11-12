/**
 * STREAMING:OVERRIDE_LODSCALE_THIS_FRAME
 *
 * 0xF8A2800C0B863DB1

 * 
 * override the global LOD scale this frame
 * 
 * This allows you to override "extended distance scaling" setting. Needs to be called each frame.
 * Max scaling seems to be 200.0, normal is 1.0
 * See https://gfycat.com/DetailedHauntingIncatern
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} lodScale
 */
export function overrideLodscaleThisFrame(lodScale: number): void {
	const overrideLodscaleThisFrame_result = Citizen.invokeNative<void>('0xF8A2800C0B863DB1', lodScale);
	return overrideLodscaleThisFrame_result;
}