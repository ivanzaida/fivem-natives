import { FloatRef } from '@ivanzaida/structures'

/**
 * WATER:GET_WATER_HEIGHT
 *
 * 0xF85C2BE613AD7903

 * 
 * This command takes the waves into account so the result may be different depending on the exact frame of calling.
 * 
 * This function set height to the value of z-axis of the water surface.
 * 
 * This function works with sea and lake. However it does not work with shallow rivers (e.g. raton canyon will return -100000.0f)
 * 
 * note: seems to return true when you are in water
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {FloatRef} height [Ref]
 * @returns {boolean}  
 */
export function getWaterHeight(posX: number, posY: number, posZ: number, height: FloatRef /* ptr */): boolean {
	const getWaterHeight_result = Citizen.invokeNative<boolean>('0xF85C2BE613AD7903', posX, posY, posZ, height.dataView);
	return getWaterHeight_result;
}