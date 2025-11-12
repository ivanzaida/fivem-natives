import { Vector3, FloatRef } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:OVERRIDE_SAVE_HOUSE
 *
 * 0x4C6A124A4C49BC22

 * 
 * Call this with bOverride=TRUE to force the player to respawn at vecCoords with fHeading instead of at a savehouse after a load.
 * These settings will be applied to all saves until you call the command again with bOverride=FALSE
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} override
 * @param {number} vecCoordsX
 * @param {number} vecCoordsY
 * @param {number} vecCoordsZ
 * @param {number} heading
 * @param {boolean} isAnAutosave
 * @param {Vector3} vecReturnCoords [Ref]
 * @param {FloatRef} outHeading [Ref]
 * @returns {boolean}  
 */
export function overrideSaveHouse(override: boolean, vecCoordsX: number, vecCoordsY: number, vecCoordsZ: number, heading: number, isAnAutosave: boolean, vecReturnCoords: Vector3 /* ptr */, outHeading: FloatRef /* ptr */): boolean {
	const vecReturnCoordsPtr = new Vector3Ref();
	const overrideSaveHouse_result = Citizen.invokeNative<boolean>('0x4C6A124A4C49BC22', override, vecCoordsX, vecCoordsY, vecCoordsZ, heading, isAnAutosave, vecReturnCoordsPtr.dataView, outHeading.dataView);
	vecReturnCoordsPtr.copyToVector(vecReturnCoords);
	return overrideSaveHouse_result;
}