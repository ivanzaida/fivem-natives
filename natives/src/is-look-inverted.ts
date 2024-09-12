/**
 * PAD:IS_LOOK_INVERTED
 *
 * 0x660D0B8C8AE85314

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isLookInverted(): boolean {
	const isLookInverted_result = Citizen.invokeNative<boolean>('0x660D0B8C8AE85314', );
	return isLookInverted_result;
}