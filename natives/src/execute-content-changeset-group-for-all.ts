/**
 * FILES:EXECUTE_CONTENT_CHANGESET_GROUP_FOR_ALL
 *
 * 0x5A8C2218A9C71C65

 * 
 * From fm_deathmatch_creator and fm_race_creator:
 * 
 * FILES::REVERT_CONTENT_CHANGESET_GROUP_FOR_ALL(joaat("GROUP_MAP_SP"));
 * FILES::EXECUTE_CONTENT_CHANGESET_GROUP_FOR_ALL(joaat("GROUP_MAP"));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} groupName
 */
export function executeContentChangesetGroupForAll(groupName: number): void {
	const executeContentChangesetGroupForAll_result = Citizen.invokeNative<void>('0x5A8C2218A9C71C65', groupName);
	return executeContentChangesetGroupForAll_result;
}