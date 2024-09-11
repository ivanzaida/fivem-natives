import { ESavemigrationStatusCodes } from '@ivanzaida/structures'

/**
 * SAVEMIGRATION:SAVEMIGRATION_MP_GET_STATUS
 *
 * 0x340CF8A9750C3D1A

 * 
 * ------------------------------------------------------------------
 * @returns {ESavemigrationStatusCodes}  
 */
export function savemigrationMpGetStatus(): ESavemigrationStatusCodes {
	const savemigrationMpGetStatus_result = Citizen.invokeNative<ESavemigrationStatusCodes>('0x340CF8A9750C3D1A', );
	return savemigrationMpGetStatus_result;
}