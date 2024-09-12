/**
 * CFX:MUMBLE_SET_TALKER_PROXIMITY
 *
 * 0X74E927B0

 * 
 * ------------------------------------------------------------------
 * @param {number} value Proximity value.
 */
export function mumbleSetTalkerProximity(value: number): void {
	const mumbleSetTalkerProximity_result = Citizen.invokeNative<void>('0X74E927B0', value);
	return mumbleSetTalkerProximity_result;
}