/**
 * CFX:DRAW_GLOW_SPHERE
 *
 * 0XBD25EC89

 * Draw a glow sphere this frame. Up to 256 per single frame.
 * 
 * ------------------------------------------------------------------
 * @param {number} posX Position X.
 * @param {number} posY Position Y.
 * @param {number} posZ Position Z.
 * @param {number} radius Sphere radius.
 * @param {number} colorR Red.
 * @param {number} colorG Green.
 * @param {number} colorB Blue.
 * @param {number} intensity Intensity.
 * @param {boolean} invert Invert rendering.
 * @param {boolean} marker Draw as a marker, otherwise as an overlay.
 */
export function drawGlowSphere(posX: number, posY: number, posZ: number, radius: number, colorR: number, colorG: number, colorB: number, intensity: number, invert: boolean, marker: boolean): void {
	const drawGlowSphere_result = Citizen.invokeNative<void>('0XBD25EC89', posX, posY, posZ, radius, colorR, colorG, colorB, intensity, invert, marker);
	return drawGlowSphere_result;
}