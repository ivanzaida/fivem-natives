import { SavemigrationAccount } from '@ivanzaida/structures'

/**
 * SAVEMIGRATION:SAVEMIGRATION_MP_GET_ACCOUNT
 *
 * 0xA283F9C6621A9294

 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {SavemigrationAccount} data [Ref]
 * @returns {boolean}  
 */
export function savemigrationMpGetAccount(index: number, data: SavemigrationAccount /* ptr */): boolean {
	const savemigrationMpGetAccount_result = Citizen.invokeNative<boolean>('0xA283F9C6621A9294', index, data.dataView);
	return savemigrationMpGetAccount_result;
}