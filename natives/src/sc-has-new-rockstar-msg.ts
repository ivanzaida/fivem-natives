/**
 * SOCIALCLUB:SC_HAS_NEW_ROCKSTAR_MSG
 *
 * 0xDAE47D07294589FC

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function scHasNewRockstarMsg(): boolean {
	const scHasNewRockstarMsg_result = Citizen.invokeNative<boolean>('0xDAE47D07294589FC', );
	return scHasNewRockstarMsg_result;
}