import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * VEHICLE:GENERATE_VEHICLE_CREATION_POS_FROM_PATHS
 *
 * 0x8D6ED2284F9E6186

 * 
 * ------------------------------------------------------------------
 * @param {Vector3} searchPos [Ref]
 * @param {Vector3} result [Ref]
 * @param {Vector3} resultLinkDir [Ref]
 * @param {number} desiredHeading
 * @param {number} desiredHeadingTolerance
 * @param {number} minCreationDistance What's the minimum distance from SearchPos that you'd like a vehicle to spawn?
 * @param {boolean} includeSwitchedOffNodes Search areas not currently switched on
 * @param {boolean} noWater TRUE to prevent finding a position in water
 * @param {boolean} allowAgainstTraffic
 * @returns {boolean}  
 */
export function generateVehicleCreationPosFromPaths(searchPos: Vector3 /* ptr */, result: Vector3 /* ptr */, resultLinkDir: Vector3 /* ptr */, desiredHeading: number = 0, desiredHeadingTolerance: number = 180, minCreationDistance: number = 0, includeSwitchedOffNodes: boolean = false, noWater: boolean = true, allowAgainstTraffic: boolean = true): boolean {
	const searchPosPtr = new Vector3Ref();
	const resultPtr = new Vector3Ref();
	const resultLinkDirPtr = new Vector3Ref();
	const generateVehicleCreationPosFromPaths_result = Citizen.invokeNative<boolean>('0x8D6ED2284F9E6186', searchPosPtr.dataView, resultPtr.dataView, resultLinkDirPtr.dataView, desiredHeading, desiredHeadingTolerance, minCreationDistance, includeSwitchedOffNodes, noWater, allowAgainstTraffic);
	searchPosPtr.copyToVector(searchPos);
	resultPtr.copyToVector(result);
	resultLinkDirPtr.copyToVector(resultLinkDir);
	return generateVehicleCreationPosFromPaths_result;
}