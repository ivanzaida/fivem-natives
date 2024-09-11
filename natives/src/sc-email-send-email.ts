import { EmailData } from '@ivanzaida/structures'

/**
 * SOCIALCLUB:SC_EMAIL_SEND_EMAIL
 *
 * 0x14F6AFFEDAA326C3

 * 
 * ------------------------------------------------------------------
 * @param {EmailData} emailData [Ref]
 */
export function scEmailSendEmail(emailData: EmailData /* ptr */): void {
	const scEmailSendEmail_result = Citizen.invokeNative<void>('0x14F6AFFEDAA326C3', emailData.dataView);
	return scEmailSendEmail_result;
}