/**
 * SOCIALCLUB:SC_INBOX_MESSAGE_DO_APPLY
 *
 * 0x895C996CADF26E19

 * 
 * ------------------------------------------------------------------
 * @param {number} mgs
 * @returns {boolean}  
 */
export function scInboxMessageDoApply(mgs: number): boolean {
	const scInboxMessageDoApply_result = Citizen.invokeNative<boolean>('0x895C996CADF26E19', mgs);
	return scInboxMessageDoApply_result;
}