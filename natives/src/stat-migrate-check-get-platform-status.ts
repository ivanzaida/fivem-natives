import { EMigrationPlatform, AvailableSaveData, EMigrationStatus } from '@ivanzaida/structures'

/**
 * STATS:STAT_MIGRATE_CHECK_GET_PLATFORM_STATUS
 *
 * 0x0FE2E7ACE70D240E

 * 
 * ------------------------------------------------------------------
 * @param {EMigrationPlatform} platform
 * @param {AvailableSaveData} data [Ref]
 * @returns {EMigrationStatus}  
 */
export function statMigrateCheckGetPlatformStatus(platform: EMigrationPlatform | number, data: AvailableSaveData /* ptr */): EMigrationStatus {
	const statMigrateCheckGetPlatformStatus_result = Citizen.invokeNative<EMigrationStatus>('0x0FE2E7ACE70D240E', platform, data.dataView);
	return statMigrateCheckGetPlatformStatus_result;
}