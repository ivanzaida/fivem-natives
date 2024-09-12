/**
 * SYSTEM:SETTIMERB
 *
 * 0x5AE11BC36633DE4E

 * 
 * ------------------------------------------------------------------
 * @param {number} value
 */
export function settimerb(value: number): void {
	const settimerb_result = Citizen.invokeNative<void>('0x5AE11BC36633DE4E', value);
	return settimerb_result;
}