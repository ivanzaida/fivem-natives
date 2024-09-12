/**
 * CFX:MUMBLE_IS_ACTIVE
 *
 * 0xE820BC10

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  True if the player has enabled voice chat.
 */
export function mumbleIsActive(): boolean {
	const mumbleIsActive_result = Citizen.invokeNative<boolean>('0xE820BC10', );
	return mumbleIsActive_result;
}