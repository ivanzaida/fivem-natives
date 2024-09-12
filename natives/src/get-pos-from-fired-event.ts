import { PedIndex, EEventNames, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PED:GET_POS_FROM_FIRED_EVENT
 *
 * 0x6B7357A27B4D68F1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EEventNames} eventType
 * @param {Vector3} outPos [Ref]
 * @returns {boolean}  
 */
export function getPosFromFiredEvent(ped: PedIndex, eventType: EEventNames | number, outPos: Vector3 /* ptr */): boolean {
	const outPosPtr = new Vector3Ref();
	const getPosFromFiredEvent_result = Citizen.invokeNative<boolean>('0x6B7357A27B4D68F1', ped, eventType, outPosPtr.dataView);
	outPosPtr.copyToVector(outPos);
	return getPosFromFiredEvent_result;
}