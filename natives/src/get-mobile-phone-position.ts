import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MOBILE:GET_MOBILE_PHONE_POSITION
 *
 * 0x78C4EBB0251847E2

 * 
 * ------------------------------------------------------------------
 * @param {Vector3} outPositionVector [Ref]
 */
export function getMobilePhonePosition(outPositionVector: Vector3 /* ptr */): void {
	const outPositionVectorPtr = new Vector3Ref();
	const getMobilePhonePosition_result = Citizen.invokeNative<void>('0x78C4EBB0251847E2', outPositionVectorPtr.dataView);
	outPositionVectorPtr.copyToVector(outPositionVector);
	return getMobilePhonePosition_result;
}