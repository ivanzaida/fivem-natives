/**
 * STATS:PLAYSTATS_NPC_PHONE
 *
 * 0x7114D68882DD5DFB

 * 
 * ------------------------------------------------------------------
 * @param {number} caller
 * @param {number} type
 * @param {number} subject
 * @param {number} playerAction
 * @param {boolean} request
 * @param {number} rank
 */
export function playstatsNpcPhone(caller: number, type: number, subject: number, playerAction: number, request: boolean, rank: number): void {
	const playstatsNpcPhone_result = Citizen.invokeNative<void>('0x7114D68882DD5DFB', caller, type, subject, playerAction, request, rank);
	return playstatsNpcPhone_result;
}