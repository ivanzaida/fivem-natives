/**
 * CFX:MUMBLE_GET_TALKER_PROXIMITY
 *
 * 0X84E02A32

 * 
 * ------------------------------------------------------------------
 * @returns {number}  Talker proximity value.
 */
export function mumbleGetTalkerProximity(): number {
	const mumbleGetTalkerProximity_result = Citizen.invokeNative<number>('0X84E02A32', );
	return mumbleGetTalkerProximity_result;
}