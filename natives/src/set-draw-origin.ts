/**
 * GRAPHICS:SET_DRAW_ORIGIN
 *
 * 0xB56F2B356187E2E0

 * 
 * Sets the on-screen drawing origin for draw-functions (which is normally x=0,y=0 in the upper left corner of the screen) to a world coordinate.
 * From now on, the screen coordinate which displays the given world coordinate on the screen is seen as x=0,y=0.
 * 
 * Example in C#:
 * Vector3 boneCoord = somePed.GetBoneCoord(Bone.SKEL_Head);
 * Function.Call(Hash.SET_DRAW_ORIGIN, boneCoord.X, boneCoord.Y, boneCoord.Z, 0);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, -0.015, 0.013, 0.013, 0.0, 255, 0, 0, 200);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, -0.015, 0.013, 0.013, 90.0, 255, 0, 0, 200);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, 0.015, 0.013, 0.013, 270.0, 255, 0, 0, 200);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, 0.015, 0.013, 0.013, 180.0, 255, 0, 0, 200);
 * Function.Call(Hash.CLEAR_DRAW_ORIGIN);
 * 
 * Result: www11.pic-upload.de/19.06.15/bkqohvil2uao.jpg
 * If the pedestrian starts walking around now, the sprites are always around her head, no matter where the head is displayed on the screen.
 * 
 * This function also effects the drawing of texts and other UI-elements.
 * The effect can be reset by calling GRAPHICS::CLEAR_DRAW_ORIGIN().
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} vecOriginX
 * @param {number} vecOriginY
 * @param {number} vecOriginZ
 * @param {boolean} is2d
 */
export function setDrawOrigin(vecOriginX: number, vecOriginY: number, vecOriginZ: number, is2d: boolean = false): void {
	const setDrawOrigin_result = Citizen.invokeNative<void>('0xB56F2B356187E2E0', vecOriginX, vecOriginY, vecOriginZ, is2d);
	return setDrawOrigin_result;
}