/**
 * MOBILE:SET_MOBILE_PHONE_POSITION
 *
 * 0x6B7EA0158D00C600

 * 
 * ------------------------------------------------------------------
 * @param {number} newPositionVectorX
 * @param {number} newPositionVectorY
 * @param {number} newPositionVectorZ
 */
export function setMobilePhonePosition(newPositionVectorX: number, newPositionVectorY: number, newPositionVectorZ: number): void {
	const setMobilePhonePosition_result = Citizen.invokeNative<void>('0x6B7EA0158D00C600', newPositionVectorX, newPositionVectorY, newPositionVectorZ);
	return setMobilePhonePosition_result;
}