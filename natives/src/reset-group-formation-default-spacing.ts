import { GroupIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_GROUP_FORMATION_DEFAULT_SPACING
 *
 * 0xAD9D10D7F8C6F478

 * 
 * Resets the spacing which the group formation is currently using, back to its default values
 * This will also happen when the mission terminates.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GroupIndex} uniqueGroupID
 */
export function resetGroupFormationDefaultSpacing(uniqueGroupID: GroupIndex): void {
	const resetGroupFormationDefaultSpacing_result = Citizen.invokeNative<void>('0xAD9D10D7F8C6F478', uniqueGroupID);
	return resetGroupFormationDefaultSpacing_result;
}