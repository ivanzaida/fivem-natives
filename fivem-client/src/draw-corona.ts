/**
 * CFX:DRAW_CORONA
 *
 * 0xFF44780E

 * Allows drawing advanced light effects, known as coronas, which support flares, volumetric lighting, and customizable glow properties.
 * 
 * ------------------------------------------------------------------
 * @param {number} posX The X position of the corona origin.
 * @param {number} posY The Y position of the corona origin.
 * @param {number} posZ The Z position of the corona origin.
 * @param {number} size The size of the corona.
 * @param {number} red The red component of the marker color, on a scale from 0255.
 * @param {number} green The green component of the marker color, on a scale from 0255.
 * @param {number} blue The blue component of the marker color, on a scale from 0255.
 * @param {number} alpha The alpha component of the marker color, on a scale from 0255.
 * @param {number} intensity The intensity of the corona.
 * @param {number} zBias zBias slightly shifts the depth of surfaces to make sure they don’t overlap or cause visual glitches when they are very close together. The zBias value are usually in the range of 0.0 to 1.0.
 * @param {number} dirX The X direction of the corona.
 * @param {number} dirY The Y direction of the corona.
 * @param {number} dirZ The Z direction of the corona.
 * @param {number} viewThreshold The view threshold is to determine the fading of the corona based on the distance.
 * @param {number} innerAngle The inner angle of the corona.
 * @param {number} outerAngle The outer angle of the corona.
 * @param {number} flags The corona flags.
 */
export function drawCorona(posX: number, posY: number, posZ: number, size: number, red: number, green: number, blue: number, alpha: number, intensity: number, zBias: number, dirX: number, dirY: number, dirZ: number, viewThreshold: number, innerAngle: number, outerAngle: number, flags: number): void {
	const drawCorona_result = Citizen.invokeNative<void>('0xFF44780E', posX, posY, posZ, size, red, green, blue, alpha, intensity, zBias, dirX, dirY, dirZ, viewThreshold, innerAngle, outerAngle, flags);
	return drawCorona_result;
}