/**
 * CFX:PREPARE_LIGHT
 *
 * 0x584B4C99

 * Create a new light with specified type, flags, position, color, and intensity.
 * 
 * ------------------------------------------------------------------
 * @param {number} lightType The type of the light
 * @param {number} flags Light flags
 * @param {number} x X coordinate of the light position
 * @param {number} y Y coordinate of the light position
 * @param {number} z Z coordinate of the light position
 * @param {number} r Red component of the light color (0255)
 * @param {number} g Green component of the light color (0255)
 * @param {number} b Blue component of the light color (0255)
 * @param {number} intensity Intensity of the light
 */
export function prepareLight(lightType: number, flags: number, x: number, y: number, z: number, r: number, g: number, b: number, intensity: number): void {
	const prepareLight_result = Citizen.invokeNative<void>('0x584B4C99', lightType, flags, x, y, z, r, g, b, intensity);
	return prepareLight_result;
}