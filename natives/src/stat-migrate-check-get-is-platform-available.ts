import { EMigrationPlatform, EMigrationResultCodes } from '@ivanzaida/structures'

/**
 * STATS:STAT_MIGRATE_CHECK_GET_IS_PLATFORM_AVAILABLE
 *
 * 0xE76F74E4C982A0D4

 * 
 * ------------------------------------------------------------------
 * @param {EMigrationPlatform} platform
 * @returns {EMigrationResultCodes}  
 */
export function statMigrateCheckGetIsPlatformAvailable(platform: EMigrationPlatform | number): EMigrationResultCodes {
	const statMigrateCheckGetIsPlatformAvailable_result = Citizen.invokeNative<EMigrationResultCodes>('0xE76F74E4C982A0D4', platform);
	return statMigrateCheckGetIsPlatformAvailable_result;
}