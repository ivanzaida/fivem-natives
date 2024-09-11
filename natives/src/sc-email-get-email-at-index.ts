import { EmailData } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_EMAIL_GET_EMAIL_AT_INDEX
 *
 * 0xEC552A25287441B8

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {EmailData} emailData [Ref]
 * @returns {boolean}  
 */
export function scEmailGetEmailAtIndex(index: number, emailData: EmailData /* ptr */): boolean {
	const scEmailGetEmailAtIndex_result = Citizen.invokeNative<boolean>('0xEC552A25287441B8', index, emailData.dataView);
	return scEmailGetEmailAtIndex_result;
}