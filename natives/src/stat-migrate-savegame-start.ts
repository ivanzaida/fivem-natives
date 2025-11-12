/**
 * STATS:STAT_MIGRATE_SAVEGAME_START
 *
 * 0x38BED19EB5C34B41

 * 
 * platformName must be one of the following: ps3, xbox360, ps4, xboxone
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} sourcePlatform
 * @returns {boolean}  
 */
export function statMigrateSavegameStart(sourcePlatform: string): boolean {
	const statMigrateSavegameStart_result = Citizen.invokeNative<boolean>('0x38BED19EB5C34B41', sourcePlatform);
	return statMigrateSavegameStart_result;
}