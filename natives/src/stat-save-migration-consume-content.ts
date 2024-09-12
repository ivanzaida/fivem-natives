/**
 * STATS:STAT_SAVE_MIGRATION_CONSUME_CONTENT
 *
 * 0x07D12DEAC5A3B4E6

 * Call this to make sure that this account is entitled to consume a certain content id.
 * JobLTSRoundInfo
 * Again, this does nothing to check if the user should have access to the content, it is
 * only to enforce uniqueness that only one given player can unlock a specific piece of content
 * from a given cg account. So we should still be using the cross-platform leaderboard/profile
 * stats reads to determine if a player should have CGtoNG content unlocked.
 * For the player having played last Gen if the command is returning TRUE please use this to make sure
 * he is entitled to that.
 * - contentId: You can use whatever contentId you want, as long as we're consistent.
 * The server doesn't care what the contentId is it just uses it to track the status separately
 * per piece of content if there is more than one.
 * - Special Edition content please use the string hash of the content.
 * - For having played last gen just use the hash of "played_last_gen".
 * 
 * ------------------------------------------------------------------
 * @param {number} contentId
 * @param {string} sourcePlatform
 * @param {string} srcGamerHandle
 * @returns {boolean}  
 */
export function statSaveMigrationConsumeContent(contentId: number, sourcePlatform: string, srcGamerHandle: string): boolean {
	const statSaveMigrationConsumeContent_result = Citizen.invokeNative<boolean>('0x07D12DEAC5A3B4E6', contentId, sourcePlatform, srcGamerHandle);
	return statSaveMigrationConsumeContent_result;
}