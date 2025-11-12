/**
 * ZONE:GET_HASH_OF_MAP_AREA_AT_COORDS
 *
 * 0x1E2447C0261A7995

 * 
 * Returns the hash of the name of the area at these coordinates (should be City or Countryside)
 * The returned value should be either MAP_AREA_CITY or MAP_AREA_COUNTRYSIDE
 * 
 * Returns a hash representing which part of the map the given coords are located.
 * 
 * Possible return values:
 * (Hash of) city -> -289320599
 * (Hash of) countryside -> 2072609373
 * 
 * C# Example :
 * 
 * Ped player = Game.Player.Character;
 * Hash h = Function.Call<Hash>(Hash.GET_HASH_OF_MAP_AREA_AT_COORDS, player.Position.X, player.Position.Y, player.Position.Z);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coordsX
 * @param {number} coordsY
 * @param {number} coordsZ
 * @returns {number}  
 */
export function getHashOfMapAreaAtCoords(coordsX: number, coordsY: number, coordsZ: number): number {
	const getHashOfMapAreaAtCoords_result = Citizen.invokeNative<number>('0x1E2447C0261A7995', coordsX, coordsY, coordsZ);
	return getHashOfMapAreaAtCoords_result;
}