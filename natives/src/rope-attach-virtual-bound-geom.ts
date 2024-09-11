import { RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ROPE_ATTACH_VIRTUAL_BOUND_GEOM
 *
 * 0x67C2FA3B5006F779

 * 
 * ------------------------------------------------------------------
 * @param {RopeIndex} ropeID
 * @param {number} boundIdx
 * @param {number} pt0X
 * @param {number} pt0Y
 * @param {number} pt0Z
 * @param {number} pt1X
 * @param {number} pt1Y
 * @param {number} pt1Z
 * @param {number} pt2X
 * @param {number} pt2Y
 * @param {number} pt2Z
 * @param {number} pt3X
 * @param {number} pt3Y
 * @param {number} pt3Z
 */
export function ropeAttachVirtualBoundGeom(ropeID: RopeIndex, boundIdx: number, pt0X: number, pt0Y: number, pt0Z: number, pt1X: number, pt1Y: number, pt1Z: number, pt2X: number, pt2Y: number, pt2Z: number, pt3X: number, pt3Y: number, pt3Z: number): void {
	const ropeAttachVirtualBoundGeom_result = Citizen.invokeNative<void>('0x67C2FA3B5006F779', ropeID, boundIdx, pt0X, pt0Y, pt0Z, pt1X, pt1Y, pt1Z, pt2X, pt2Y, pt2Z, pt3X, pt3Y, pt3Z);
	return ropeAttachVirtualBoundGeom_result;
}