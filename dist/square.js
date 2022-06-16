"use strict";
/**
 * 点
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
/**
 * 正方形。
 */
class Square {
    /**
     * コンストラクタ。
     *
     * @param p1 左上の点
     * @param p2 右下の点
     */
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    findArea() {
        return this.getSideLength() ** 2;
    }
    /**
     * @returns 1辺の長さ
     */
    getSideLength() {
        // 対角線の長さ = p1とp2の距離
        const diagonal = Math.sqrt(Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2));
        // 正方形なので、対角線の平方根を返す。
        return diagonal / Math.sqrt(2);
    }
}
const square = new Square(new Point(0, 2), new Point(2, 0));
console.log(square.findArea());
