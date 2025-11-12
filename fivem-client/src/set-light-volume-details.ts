/**
 * CFX:SET_LIGHT_VOLUME_DETAILS
 *
 * 0x2F731AE7

 * Set volumetric light properties for an existing light, enabling custom volumetric effects such as fog-like glow.
 * 
 * ------------------------------------------------------------------
 * @param {number} volIntensity Intensity of the volumetric effect
 * @param {number} volSizeScale Scale of the volumetric volume
 * @param {number} r Red channel for volumetric outer color (0–255)
 * @param {number} g Green channel for volumetric outer color (0–255)
 * @param {number} b Blue channel for volumetric outer color (0–255)
 * @param {number} i Intensity (alpha) of the volumetric outer color
 * @param {number} outerExponent Exponent controlling falloff of the volumetric outer glow
 */
export function setLightVolumeDetails(volIntensity: number, volSizeScale: number, r: number, g: number, b: number, i: number, outerExponent: number): void {
	const setLightVolumeDetails_result = Citizen.invokeNative<void>('0x2F731AE7', volIntensity, volSizeScale, r, g, b, i, outerExponent);
	return setLightVolumeDetails_result;
}