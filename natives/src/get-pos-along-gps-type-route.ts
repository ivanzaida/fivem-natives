import { Vector3, EGpsSlotType } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_POS_ALONG_GPS_TYPE_ROUTE
 *
 * 0x4AF7AA151DA57A33

 * 
 * Function to get a position along current player GPS route using supplied slot
 * 
 * p3 can be 0, 1 or 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {Vector3} outPos [Ref]
 * @param {boolean} startAtPlayerPos
 * @param {number} distanceAlongRoute
 * @param {EGpsSlotType} slotType
 * @returns {boolean}  
 */
export function getPosAlongGpsTypeRoute(outPos: Vector3 /* ptr */, startAtPlayerPos: boolean, distanceAlongRoute: number, slotType: EGpsSlotType | number): boolean {
	const outPosPtr = new Vector3Ref();
	const getPosAlongGpsTypeRoute_result = Citizen.invokeNative<boolean>('0x4AF7AA151DA57A33', outPosPtr.dataView, startAtPlayerPos, distanceAlongRoute, slotType);
	outPosPtr.copyToVector(outPos);
	return getPosAlongGpsTypeRoute_result;
}