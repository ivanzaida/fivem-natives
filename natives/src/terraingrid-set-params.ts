/**
 * GRAPHICS:TERRAINGRID_SET_PARAMS
 *
 * 0xDF3F4CBE546A000D

 * 
 * This native is used along with these two natives: `TERRAINGRID_ACTIVATE` and `TERRAINGRID_SET_COLOURS`.
 * This native configures the location, size, rotation, normal height, and the difference ratio between min, normal and max.
 * 
 * All those natives combined they will output something like this: https://i.imgur.com/TC6cku6.png
 * 
 * This native renders a box at the given position, with a special shader that renders a grid on world geometry behind it. This box does not have backface culling.
 * The forward args here are a direction vector, something similar to what's returned by GET_ENTITY_FORWARD_VECTOR.
 * normalHeight and heightDiff are used for positioning the color gradient of the grid, colors specified via TERRAINGRID_SET_COLOURS.
 * 
 * Example with box superimposed on the image to demonstrate: https://i.imgur.com/wdqskxd.jpg
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centrePosX
 * @param {number} centrePosY
 * @param {number} centrePosZ
 * @param {number} dirX
 * @param {number} dirY
 * @param {number} dirZ
 * @param {number} boxWidth
 * @param {number} boxHeight
 * @param {number} boxDepth
 * @param {number} gridRes
 * @param {number} colMult
 * @param {number} minHeight
 * @param {number} maxHeight
 */
export function terraingridSetParams(centrePosX: number, centrePosY: number, centrePosZ: number, dirX: number, dirY: number, dirZ: number, boxWidth: number, boxHeight: number, boxDepth: number, gridRes: number, colMult: number, minHeight: number, maxHeight: number): void {
	const terraingridSetParams_result = Citizen.invokeNative<void>('0xDF3F4CBE546A000D', centrePosX, centrePosY, centrePosZ, dirX, dirY, dirZ, boxWidth, boxHeight, boxDepth, gridRes, colMult, minHeight, maxHeight);
	return terraingridSetParams_result;
}