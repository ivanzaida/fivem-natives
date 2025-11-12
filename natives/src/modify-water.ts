/**
 * WATER:MODIFY_WATER
 *
 * 0xE75901370C558054

 * 
 * Allow interaction with water. This will create a disturbance in the water at coordinates (worldX,worldY).
 * newSpeed control the amplitude of movement to be applied to the water (between 0 and 5)
 * rate controls the blend between the current water speed at this point and newSpeed (0: no change, 1: newSpeed).
 * 
 * Sets the water height for a given position and radius.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} worldX
 * @param {number} worldY
 * @param {number} newSpeed
 * @param {number} rate
 */
export function modifyWater(worldX: number, worldY: number, newSpeed: number, rate: number): void {
	const modifyWater_result = Citizen.invokeNative<void>('0xE75901370C558054', worldX, worldY, newSpeed, rate);
	return modifyWater_result;
}