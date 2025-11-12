import { FloatRef } from '@ivanzaida/structures'

/**
 * MISC:SLERP_NEAR_QUATERNION
 *
 * 0x4D16ECAA05186DFE

 * 
 * This native always come right before SET_ENTITY_QUATERNION where its final 4 parameters are SLERP_NEAR_QUATERNION p9 to p12
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} time
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} startW
 * @param {number} destinationX
 * @param {number} destinationY
 * @param {number} destinationZ
 * @param {number} destinationW
 * @param {FloatRef} resultX [Ref]
 * @param {FloatRef} resultY [Ref]
 * @param {FloatRef} resultZ [Ref]
 * @param {FloatRef} resultW [Ref]
 */
export function slerpNearQuaternion(time: number, startX: number, startY: number, startZ: number, startW: number, destinationX: number, destinationY: number, destinationZ: number, destinationW: number, resultX: FloatRef /* ptr */, resultY: FloatRef /* ptr */, resultZ: FloatRef /* ptr */, resultW: FloatRef /* ptr */): void {
	const slerpNearQuaternion_result = Citizen.invokeNative<void>('0x4D16ECAA05186DFE', time, startX, startY, startZ, startW, destinationX, destinationY, destinationZ, destinationW, resultX.dataView, resultY.dataView, resultZ.dataView, resultW.dataView);
	return slerpNearQuaternion_result;
}