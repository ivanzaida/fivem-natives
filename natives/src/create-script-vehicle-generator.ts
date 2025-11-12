import { ModelNames, VehicleGeneratorIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:CREATE_SCRIPT_VEHICLE_GENERATOR
 *
 * 0x7E711C5CE9160738

 * 
 * Creates a script vehicle generator at the given coordinates. Most parameters after the model hash are unknown.
 * 
 * Parameters:
 * x/y/z - Generator position
 * heading - Generator heading
 * p4 - Unknown (always 5.0)
 * p5 - Unknown (always 3.0)
 * modelHash - Vehicle model hash
 * p7/8/9/10 - Unknown (always -1)
 * p11 - Unknown (usually TRUE, only one instance of FALSE)
 * p12/13 - Unknown (always FALSE)
 * p14 - Unknown (usally FALSE, only two instances of TRUE)
 * p15 - Unknown (always TRUE)
 * p16 - Unknown (always -1)
 * 
 * Vector3 coords = GET_ENTITY_COORDS(PLAYER_PED_ID(), 0);    CREATE_SCRIPT_VEHICLE_GENERATOR(coords.x, coords.y, coords.z, 1.0f, 5.0f, 3.0f, GET_HASH_KEY("adder"), -1. -1, -1, -1, -1, true, false, false, false, true, -1);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {number} headingInDegrees
 * @param {number} maxLength
 * @param {number} maxWidth
 * @param {ModelNames} modelHashKey
 * @param {number} remap1
 * @param {number} remap2
 * @param {number} remap3
 * @param {number} remap4
 * @param {boolean} highPriorityFlag
 * @param {number} chanceOfCarAlarm
 * @param {number} chanceOfLocked
 * @param {boolean} preventEntryIfNotQualified
 * @param {boolean} canBeStolen
 * @param {number} livery
 * @returns {VehicleGeneratorIndex}  
 */
export function createScriptVehicleGenerator(newCoorsX: number, newCoorsY: number, newCoorsZ: number, headingInDegrees: number, maxLength: number, maxWidth: number, modelHashKey: ModelNames, remap1: number, remap2: number, remap3: number, remap4: number, highPriorityFlag: boolean, chanceOfCarAlarm: number, chanceOfLocked: number, preventEntryIfNotQualified: boolean = false, canBeStolen: boolean = true, livery: number = 1): VehicleGeneratorIndex {
	const createScriptVehicleGenerator_result = Citizen.invokeNative<VehicleGeneratorIndex>('0x7E711C5CE9160738', newCoorsX, newCoorsY, newCoorsZ, headingInDegrees, maxLength, maxWidth, modelHashKey, remap1, remap2, remap3, remap4, highPriorityFlag, chanceOfCarAlarm, chanceOfLocked, preventEntryIfNotQualified, canBeStolen, livery);
	return createScriptVehicleGenerator_result;
}