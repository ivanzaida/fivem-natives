import { IntRef, ETaskNetStatus } from '@ivanzaida/structures'

/**
 * STATS:STAT_GET_SAVE_MIGRATION_CONSUME_CONTENT_STATUS
 *
 * 0x040F27244ED9B5A6

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} errorCode [Ref]
 * @returns {ETaskNetStatus}  
 */
export function statGetSaveMigrationConsumeContentStatus(errorCode: IntRef /* ptr */): ETaskNetStatus {
	const statGetSaveMigrationConsumeContentStatus_result = Citizen.invokeNative<ETaskNetStatus>('0x040F27244ED9B5A6', errorCode.dataView);
	return statGetSaveMigrationConsumeContentStatus_result;
}