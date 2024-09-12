/**
 * SAVEMIGRATION:SAVEMIGRATION_IS_MP_ENABLED
 *
 * 0xFE45CC32BB79DB76

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function savemigrationIsMpEnabled(): boolean {
	const savemigrationIsMpEnabled_result = Citizen.invokeNative<boolean>('0xFE45CC32BB79DB76', );
	return savemigrationIsMpEnabled_result;
}