import { FloatRef } from '@ivanzaida/structures'

/**
 * MISC:GET_LINE_PLANE_INTERSECTION
 *
 * 0x148F60DDDBC323FD

 * 
 * ------------------------------------------------------------------
 * @param {number} vscrPntAX
 * @param {number} vscrPntAY
 * @param {number} vscrPntAZ
 * @param {number} vscrPntBX
 * @param {number} vscrPntBY
 * @param {number} vscrPntBZ
 * @param {number} vscrPntOnPlaneX
 * @param {number} vscrPntOnPlaneY
 * @param {number} vscrPntOnPlaneZ
 * @param {number} vscrNormalX
 * @param {number} vscrNormalY
 * @param {number} vscrNormalZ
 * @param {FloatRef} tValue [Ref]
 * @returns {boolean}  
 */
export function getLinePlaneIntersection(vscrPntAX: number, vscrPntAY: number, vscrPntAZ: number, vscrPntBX: number, vscrPntBY: number, vscrPntBZ: number, vscrPntOnPlaneX: number, vscrPntOnPlaneY: number, vscrPntOnPlaneZ: number, vscrNormalX: number, vscrNormalY: number, vscrNormalZ: number, tValue: FloatRef /* ptr */): boolean {
	const getLinePlaneIntersection_result = Citizen.invokeNative<boolean>('0x148F60DDDBC323FD', vscrPntAX, vscrPntAY, vscrPntAZ, vscrPntBX, vscrPntBY, vscrPntBZ, vscrPntOnPlaneX, vscrPntOnPlaneY, vscrPntOnPlaneZ, vscrNormalX, vscrNormalY, vscrNormalZ, tValue.dataView);
	return getLinePlaneIntersection_result;
}