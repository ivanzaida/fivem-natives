/**
 * TASK:DELETE_PATROL_ROUTE
 *
 * 0x2225C9F62E93B943

 * 
 * From the b617d scripts:
 * 
 * TASK::DELETE_PATROL_ROUTE("miss_merc0");
 * TASK::DELETE_PATROL_ROUTE("miss_merc1");
 * TASK::DELETE_PATROL_ROUTE("miss_merc2");
 * TASK::DELETE_PATROL_ROUTE("miss_dock");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} routeName
 */
export function deletePatrolRoute(routeName: string): void {
	const deletePatrolRoute_result = Citizen.invokeNative<void>('0x2225C9F62E93B943', routeName);
	return deletePatrolRoute_result;
}