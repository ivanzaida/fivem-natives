/**
 * AUDIO:SET_POSITION_FOR_NULL_CONV_PED
 *
 * 0x353876FDDC0D0E0E

 * 
 * ------------------------------------------------------------------
 * @param {number} speakerConversation
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 */
export function setPositionForNullConvPed(speakerConversation: number, positionX: number, positionY: number, positionZ: number): void {
	const setPositionForNullConvPed_result = Citizen.invokeNative<void>('0x353876FDDC0D0E0E', speakerConversation, positionX, positionY, positionZ);
	return setPositionForNullConvPed_result;
}