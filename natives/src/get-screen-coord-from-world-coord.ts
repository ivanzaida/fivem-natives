import { FloatRef } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_SCREEN_COORD_FROM_WORLD_COORD
 *
 * 0x2F8A75C70AF54208

 * Convert a world coordinate into its relative screen coordinate.  (WorldToScreen)
 * Returns a boolean; whether or not the operation was successful. It will return false if the coordinates given are not visible to the rendering camera.
 * For .NET users...
 * VB:
 * Public Shared Function World3DToScreen2d(pos as vector3) As Vector2
 *         Dim x2dp, y2dp As New Native.OutputArgument
 *         Native.Function.Call(Of Boolean)(Native.Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.x, pos.y, pos.z, x2dp, y2dp)
 *         Return New Vector2(x2dp.GetResult(Of Single), y2dp.GetResult(Of Single))
 *     End Function
 * C#:
 * Vector2 World3DToScreen2d(Vector3 pos)
 *     {
 *         var x2dp = new OutputArgument();
 *         var y2dp = new OutputArgument();
 *         Function.Call<bool>(Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.X, pos.Y, pos.Z, x2dp, y2dp);
 *         return new Vector2(x2dp.GetResult<float>(), y2dp.GetResult<float>());
 *     }
 * //USE VERY SMALL VALUES FOR THE SCALE OF RECTS/TEXT because it is dramatically larger on screen than in 3D, e.g '0.05' small.
 * Used to be called _WORLD3D_TO_SCREEN2D
 * I thought we lost you from the scene forever. It does seem however that calling SET_DRAW_ORIGIN then your natives, then ending it. Seems to work better for certain things such as keeping boxes around people for a predator missile e.g.
 * 
 * ------------------------------------------------------------------
 * @param {number} worldPosX
 * @param {number} worldPosY
 * @param {number} worldPosZ
 * @param {FloatRef} xpos [Ref]
 * @param {FloatRef} ypos [Ref]
 * @returns {boolean}  
 */
export function getScreenCoordFromWorldCoord(worldPosX: number, worldPosY: number, worldPosZ: number, xpos: FloatRef /* ptr */, ypos: FloatRef /* ptr */): boolean {
	const getScreenCoordFromWorldCoord_result = Citizen.invokeNative<boolean>('0x2F8A75C70AF54208', worldPosX, worldPosY, worldPosZ, xpos.dataView, ypos.dataView);
	return getScreenCoordFromWorldCoord_result;
}