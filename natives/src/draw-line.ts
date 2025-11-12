/**
 * GRAPHICS:DRAW_LINE
 *
 * 0xC9A38C22BE8013F2

 * 
 * Call this command every frame.
 * 
 * Draws a depth-tested line from one point to another.
 * ----------------
 * x1, y1, z1 : Coordinates for the first point
 * x2, y2, z2 : Coordinates for the second point
 * r, g, b, alpha : Color with RGBA-Values
 * I recommend using a predefined function to call this.
 * [VB.NET]
 * Public Sub DrawLine(from As Vector3, [to] As Vector3, col As Color)
 *     [Function].Call(Hash.DRAW_LINE, from.X, from.Y, from.Z, [to].X, [to].Y, [to].Z, col.R, col.G, col.B, col.A)
 * End Sub
 * 
 * [C#]
 * public void DrawLine(Vector3 from, Vector3 to, Color col)
 * {
 *     Function.Call(Hash.DRAW_LINE, from.X, from.Y, from.Z, to.X, to.Y, to.Z, col.R, col.G, col.B, col.A);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsFirstX
 * @param {number} coorsFirstY
 * @param {number} coorsFirstZ
 * @param {number} coorsSecondX
 * @param {number} coorsSecondY
 * @param {number} coorsSecondZ
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function drawLine(coorsFirstX: number, coorsFirstY: number, coorsFirstZ: number, coorsSecondX: number, coorsSecondY: number, coorsSecondZ: number, red: number = 0, green: number = 0, blue: number = 255, alpha: number = 255): void {
	const drawLine_result = Citizen.invokeNative<void>('0xC9A38C22BE8013F2', coorsFirstX, coorsFirstY, coorsFirstZ, coorsSecondX, coorsSecondY, coorsSecondZ, red, green, blue, alpha);
	return drawLine_result;
}