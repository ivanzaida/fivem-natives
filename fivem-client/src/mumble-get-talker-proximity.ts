/**
 * CFX:MUMBLE_GET_TALKER_PROXIMITY
 *
 * 0x84E02A32

 * 
 * ------------------------------------------------------------------
 * @returns {number}  Talker proximity value.
 */
export function mumbleGetTalkerProximity(): number {
	const mumbleGetTalkerProximity_result = Citizen.invokeNative<number>('0x84E02A32', );
	return mumbleGetTalkerProximity_result;
}