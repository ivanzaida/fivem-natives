import { EMigrateSave } from '@ivanzaida/structures'

/**
 * STATS:STAT_MIGRATE_SAVEGAME_GET_STATUS
 *
 * 0x8F9CF4C6161EB431

 * 
 * ------------------------------------------------------------------
 * @returns {EMigrateSave}  
 */
export function statMigrateSavegameGetStatus(): EMigrateSave {
	const statMigrateSavegameGetStatus_result = Citizen.invokeNative<EMigrateSave>('0x8F9CF4C6161EB431', );
	return statMigrateSavegameGetStatus_result;
}