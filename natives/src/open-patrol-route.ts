/**
 * TASK:OPEN_PATROL_ROUTE
 *
 * 0xFA0AB32CDCA06D33

 * 
 * This should be called once when added a patrol route.
 * 
 *  patrolRoutes found in the b617d scripts:
 *  "miss_Ass0",
 *  "miss_Ass1",
 *  "miss_Ass2",
 *  "miss_Ass3",
 *  "miss_Ass4",
 *  "miss_Ass5",
 *  "miss_Ass6",
 *  "MISS_PATROL_6",
 *  "MISS_PATROL_7",
 *  "MISS_PATROL_8",
 *  "MISS_PATROL_9",
 *  "miss_Tower_01",
 *  "miss_Tower_02",
 *  "miss_Tower_03",
 *  "miss_Tower_04",
 *  "miss_Tower_05",
 *  "miss_Tower_06",
 *  "miss_Tower_07",
 *  "miss_Tower_08",
 *  "miss_Tower_10"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} routeName
 */
export function openPatrolRoute(routeName: string): void {
	const openPatrolRoute_result = Citizen.invokeNative<void>('0xFA0AB32CDCA06D33', routeName);
	return openPatrolRoute_result;
}