import { FloatRef } from '@ivanzaida/structures'

/**
 * WATER:GET_WATER_HEIGHT_NO_WAVES
 *
 * 0x7CF3DDFB660E9328

 * 
 * This command does not take the waves into account so the result will be the same between different frames
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {FloatRef} height [Ref]
 * @returns {boolean}  
 */
export function getWaterHeightNoWaves(posX: number, posY: number, posZ: number, height: FloatRef /* ptr */): boolean {
	const getWaterHeightNoWaves_result = Citizen.invokeNative<boolean>('0x7CF3DDFB660E9328', posX, posY, posZ, height.dataView);
	return getWaterHeightNoWaves_result;
}