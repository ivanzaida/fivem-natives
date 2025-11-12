/**
 * TASK:USE_WAYPOINT_RECORDING_AS_ASSISTED_MOVEMENT_ROUTE
 *
 * 0x94302E8F619FAF3E

 * 
 * Makes the specified recording act as an assisted-movement route for the player
 * The recording can contine to be used for waypoint-following playback as well.
 * Be absolutely sure to turn this back off when no longer required, as it could be costly.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} recordingName
 * @param {boolean} useAsAssistedMovementRoute
 * @param {number} pathWidth
 * @param {number} tension
 */
export function useWaypointRecordingAsAssistedMovementRoute(recordingName: string, useAsAssistedMovementRoute: boolean, pathWidth: number = 1, tension: number = 0.5): void {
	const useWaypointRecordingAsAssistedMovementRoute_result = Citizen.invokeNative<void>('0x94302E8F619FAF3E', recordingName, useAsAssistedMovementRoute, pathWidth, tension);
	return useWaypointRecordingAsAssistedMovementRoute_result;
}