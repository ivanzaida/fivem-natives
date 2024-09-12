import { Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_WORLD_COORD_FROM_SCREEN_COORD
 *
 * 0XC81D0659

 * Converts a screen coordinate into its relative world coordinate.
 * 
 * ------------------------------------------------------------------
 * @param {number} screenX A screen horizontal axis coordinate (0.0  1.0).
 * @param {number} screenY A screen vertical axis coordinate (0.0  1.0).
 * @param {Vector3Ref} worldVector The world coord vector pointer. [Ref]
 * @param {Vector3Ref} normalVector The screen normal vector pointer. [Ref]
 */
export function getWorldCoordFromScreenCoord(screenX: number, screenY: number, worldVector: Vector3Ref /* ptr */, normalVector: Vector3Ref /* ptr */): void {
	const getWorldCoordFromScreenCoord_result = Citizen.invokeNative<void>('0XC81D0659', screenX, screenY, worldVector.dataView, normalVector.dataView);
	return getWorldCoordFromScreenCoord_result;
}