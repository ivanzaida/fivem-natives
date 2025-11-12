/**
 * GRAPHICS:DRAW_BOX
 *
 * 0x66ECCFB3761A11CA

 * 
 * Call this command every frame.
 * 
 * x,y,z = start pos
 * x2,y2,z2 = end pos
 * 
 * Draw's a 3D Box between the two x,y,z coords.
 * --------------
 * Keep in mind that the edges of the box do only align to the worlds base-vectors. Therefore something like rotation cannot be applied. That means this function is pretty much useless, unless you want a static unicolor box somewhere.
 * I recommend using a predefined function to call this.
 * [VB.NET]
 * Public Sub DrawBox(a As Vector3, b As Vector3, col As Color)
 *     [Function].Call(Hash.DRAW_BOX,a.X, a.Y, a.Z,b.X, b.Y, b.Z,col.R, col.G, col.B, col.A)
 * End Sub
 * 
 * [C#]
 * public void DrawBox(Vector3 a, Vector3 b, Color col)
 * {
 *     Function.Call(Hash.DRAW_BOX,a.X, a.Y, a.Z,b.X, b.Y, b.Z,col.R, col.G, col.B, col.A);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsMinX
 * @param {number} coorsMinY
 * @param {number} coorsMinZ
 * @param {number} coorsMaxX
 * @param {number} coorsMaxY
 * @param {number} coorsMaxZ
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function drawBox(coorsMinX: number, coorsMinY: number, coorsMinZ: number, coorsMaxX: number, coorsMaxY: number, coorsMaxZ: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawBox_result = Citizen.invokeNative<void>('0x66ECCFB3761A11CA', coorsMinX, coorsMinY, coorsMinZ, coorsMaxX, coorsMaxY, coorsMaxZ, red, green, blue, alpha);
	return drawBox_result;
}