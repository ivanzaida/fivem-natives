/**
 * FILES:REVERT_CONTENT_CHANGESET_GROUP_FOR_ALL
 *
 * 0x5D75D30DF32ECA8E

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
export function revertContentChangesetGroupForAll(groupName: number): void {
	const revertContentChangesetGroupForAll_result = Citizen.invokeNative<void>('0x5D75D30DF32ECA8E', groupName);
	return revertContentChangesetGroupForAll_result;
}