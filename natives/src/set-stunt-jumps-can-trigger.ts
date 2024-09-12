/**
 * MISC:SET_STUNT_JUMPS_CAN_TRIGGER
 *
 * 0x7F0D18D1F5BF6D0F

 * 
 * ------------------------------------------------------------------
 * @param {boolean} allow
 */
export function setStuntJumpsCanTrigger(allow: boolean): void {
	const setStuntJumpsCanTrigger_result = Citizen.invokeNative<void>('0x7F0D18D1F5BF6D0F', allow);
	return setStuntJumpsCanTrigger_result;
}