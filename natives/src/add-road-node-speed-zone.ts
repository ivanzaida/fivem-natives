/**
 * VEHICLE:ADD_ROAD_NODE_SPEED_ZONE
 *
 * 0x44589DAC2564FF02

 * 
 * Adds a road speed zone at the specified position+radius.  Cars cruising in this volume will travel]
 * at a max speed of the param "maxSpeed".  This only affects cars running TASK_VEHICLE_CRUISE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} centerX
 * @param {number} centerY
 * @param {number} centerZ
 * @param {number} radius
 * @param {number} maxSpeed
 * @param {boolean} allowAffectMissionVehs Should this also slow down mission vehicles
 * @returns {number}  
 */
export function addRoadNodeSpeedZone(centerX: number, centerY: number, centerZ: number, radius: number, maxSpeed: number, allowAffectMissionVehs: boolean = false): number {
	const addRoadNodeSpeedZone_result = Citizen.invokeNative<number>('0x44589DAC2564FF02', centerX, centerY, centerZ, radius, maxSpeed, allowAffectMissionVehs);
	return addRoadNodeSpeedZone_result;
}