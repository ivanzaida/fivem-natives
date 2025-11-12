/**
 * SOCIALCLUB:SC_GET_NEW_ROCKSTAR_MSG
 *
 * 0x6E9A5327B5FDB44C

 * 
 * Retrieves the last new Rockstar Message sent via the SC Admin site.
 * Note:  	This should only be called if SC_HAS_NEW_ROCKSTAR_MSG has returned TRUE
 * Once this function is called, SC_HAS_NEW_ROCKSTAR_MSG will return FALSE until a new message is posted.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function scGetNewRockstarMsg(): string {
	const scGetNewRockstarMsg_result = Citizen.invokeNative<string>('0x6E9A5327B5FDB44C', );
	return scGetNewRockstarMsg_result;
}