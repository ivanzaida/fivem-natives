import { ESavemigrationStatusCodes } from '@ivanzaida/structures'

/**
 * SAVEMIGRATION:SAVEMIGRATION_MP_GET_ACCOUNTS_STATUS
 *
 * 0x3E79E8FD627F8207

 * 
 * ------------------------------------------------------------------
 * @returns {ESavemigrationStatusCodes}  
 */
export function savemigrationMpGetAccountsStatus(): ESavemigrationStatusCodes {
	const savemigrationMpGetAccountsStatus_result = Citizen.invokeNative<ESavemigrationStatusCodes>('0x3E79E8FD627F8207', );
	return savemigrationMpGetAccountsStatus_result;
}