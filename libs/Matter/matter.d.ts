/** Declaration file generated by dts-gen */

export = Matter;
export as namespace Matter;

declare namespace Matter {

export const name: string;

export const used: any[];

export const uses: any[];

export const version: string;

export function after(path: any, func: any): any;

export function before(path: any, func: any): any;

export function use(...args: any[]): void;

export namespace Axes {
    function fromVertices(vertices: any): any;

    function rotate(axes: any, angle: any): void;

    namespace fromVertices {
        const prototype: {
        };

    }

    namespace rotate {
        const prototype: {
        };

    }

}

export namespace Bodies {
    function circle(x: any, y: any, radius: any, options: any, maxSides: any): any;

    function fromVertices(x: any, y: any, vertexSets: any, options: any, flagInternal: any, removeCollinear: any, minimumArea: any): any;

    function polygon(x: any, y: any, sides: any, radius: any, options: any): any;

    function rectangle(x: any, y: any, width: any, height: any, options: any): any;

    function trapezoid(x: any, y: any, width: any, height: any, slope: any, options: any): any;

    namespace circle {
        const prototype: {
        };

    }

    namespace fromVertices {
        const prototype: {
        };

    }

    namespace polygon {
        const prototype: {
        };

    }

    namespace rectangle {
        const prototype: {
        };

    }

    namespace trapezoid {
        const prototype: {
        };

    }

}

export namespace Body {
    function applyForce(body: any, position: any, force: any): void;

    function create(options: any): any;

    function nextCategory(): any;

    function nextGroup(isNonColliding: any): any;

    function rotate(body: any, rotation: any, point: any): void;

    function scale(body: any, scaleX: any, scaleY: any, point: any): void;

    function set(body: any, settings: any, value: any): void;

    function setAngle(body: any, angle: any): void;

    function setAngularVelocity(body: any, velocity: any): void;

    function setDensity(body: any, density: any): void;

    function setInertia(body: any, inertia: any): void;

    function setMass(body: any, mass: any): void;

    function setParts(body: any, parts: any, autoHull: any): void;

    function setPosition(body: any, position: any): void;

    function setStatic(body: any, isStatic: any): void;

    function setVelocity(body: any, velocity: any): void;

    function setVertices(body: any, vertices: any): void;

    function translate(body: any, translation: any): void;

    function update(body: any, deltaTime: any, timeScale: any, correction: any): void;

    namespace applyForce {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace nextCategory {
        const prototype: {
        };

    }

    namespace nextGroup {
        const prototype: {
        };

    }

    namespace rotate {
        const prototype: {
        };

    }

    namespace scale {
        const prototype: {
        };

    }

    namespace set {
        const prototype: {
        };

    }

    namespace setAngle {
        const prototype: {
        };

    }

    namespace setAngularVelocity {
        const prototype: {
        };

    }

    namespace setDensity {
        const prototype: {
        };

    }

    namespace setInertia {
        const prototype: {
        };

    }

    namespace setMass {
        const prototype: {
        };

    }

    namespace setParts {
        const prototype: {
        };

    }

    namespace setPosition {
        const prototype: {
        };

    }

    namespace setStatic {
        const prototype: {
        };

    }

    namespace setVelocity {
        const prototype: {
        };

    }

    namespace setVertices {
        const prototype: {
        };

    }

    namespace translate {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Bounds {
    function contains(bounds: any, point: any): any;

    function create(vertices: any): any;

    function overlaps(boundsA: any, boundsB: any): any;

    function shift(bounds: any, position: any): void;

    function translate(bounds: any, vector: any): void;

    function update(bounds: any, vertices: any, velocity: any): void;

    namespace contains {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace overlaps {
        const prototype: {
        };

    }

    namespace shift {
        const prototype: {
        };

    }

    namespace translate {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Common {
    const logLevel: number;

    function chain(...args: any[]): any;

    function chainPathAfter(base: any, path: any, func: any): any;

    function chainPathBefore(base: any, path: any, func: any): any;

    function choose(choices: any): any;

    function clamp(value: any, min: any, max: any): any;

    function clone(obj: any, deep: any): any;

    function colorToNumber(colorString: any): any;

    function extend(obj: any, deep: any, ...args: any[]): any;

    function get(obj: any, path: any, begin: any, end: any): any;

    function indexOf(haystack: any, needle: any): any;

    function info(...args: any[]): void;

    function isArray(obj: any): any;

    function isElement(obj: any): any;

    function isFunction(obj: any): any;

    function isPlainObject(obj: any): any;

    function isString(obj: any): any;

    function keys(obj: any): any;

    function log(...args: any[]): void;

    function map(list: any, func: any): any;

    function nextId(): any;

    function now(): any;

    function random(min: any, max: any): any;

    function set(obj: any, path: any, val: any, begin: any, end: any): any;

    function shuffle(array: any): any;

    function sign(value: any): any;

    function topologicalSort(graph: any): any;

    function values(obj: any): any;

    function warn(...args: any[]): void;

    namespace chain {
        const prototype: {
        };

    }

    namespace chainPathAfter {
        const prototype: {
        };

    }

    namespace chainPathBefore {
        const prototype: {
        };

    }

    namespace choose {
        const prototype: {
        };

    }

    namespace clamp {
        const prototype: {
        };

    }

    namespace clone {
        const prototype: {
        };

    }

    namespace colorToNumber {
        const prototype: {
        };

    }

    namespace extend {
        const prototype: {
        };

    }

    namespace get {
        const prototype: {
        };

    }

    namespace indexOf {
        const prototype: {
        };

    }

    namespace info {
        const prototype: {
        };

    }

    namespace isArray {
        const prototype: {
        };

    }

    namespace isElement {
        const prototype: {
        };

    }

    namespace isFunction {
        const prototype: {
        };

    }

    namespace isPlainObject {
        const prototype: {
        };

    }

    namespace isString {
        const prototype: {
        };

    }

    namespace keys {
        const prototype: {
        };

    }

    namespace log {
        const prototype: {
        };

    }

    namespace map {
        const prototype: {
        };

    }

    namespace nextId {
        const prototype: {
        };

    }

    namespace now {
        const prototype: {
        };

    }

    namespace random {
        const prototype: {
        };

    }

    namespace set {
        const prototype: {
        };

    }

    namespace shuffle {
        const prototype: {
        };

    }

    namespace sign {
        const prototype: {
        };

    }

    namespace topologicalSort {
        const prototype: {
        };

    }

    namespace values {
        const prototype: {
        };

    }

    namespace warn {
        const prototype: {
        };

    }

}

export namespace Composite {
    function add(composite: any, object: any): any;

    function addBody(composite: any, body: any): any;

    function addComposite(compositeA: any, compositeB: any): any;

    function addConstraint(composite: any, constraint: any): any;

    function allBodies(composite: any): any;

    function allComposites(composite: any): any;

    function allConstraints(composite: any): any;

    function bounds(composite: any): any;

    function clear(composite: any, keepStatic: any, deep: any): any;

    function create(options: any): any;

    function get(composite: any, id: any, type: any): any;

    function move(compositeA: any, objects: any, compositeB: any): any;

    function rebase(composite: any): any;

    function remove(composite: any, object: any, deep: any): any;

    function removeBody(composite: any, body: any, deep: any): any;

    function removeBodyAt(composite: any, position: any): any;

    function removeComposite(compositeA: any, compositeB: any, deep: any): any;

    function removeCompositeAt(composite: any, position: any): any;

    function removeConstraint(composite: any, constraint: any, deep: any): any;

    function removeConstraintAt(composite: any, position: any): any;

    function rotate(composite: any, rotation: any, point: any, recursive: any): any;

    function scale(composite: any, scaleX: any, scaleY: any, point: any, recursive: any): any;

    function setModified(composite: any, isModified: any, updateParents: any, updateChildren: any): void;

    function translate(composite: any, translation: any, recursive: any): any;

    namespace add {
        const prototype: {
        };

    }

    namespace addBody {
        const prototype: {
        };

    }

    namespace addComposite {
        const prototype: {
        };

    }

    namespace addConstraint {
        const prototype: {
        };

    }

    namespace allBodies {
        const prototype: {
        };

    }

    namespace allComposites {
        const prototype: {
        };

    }

    namespace allConstraints {
        const prototype: {
        };

    }

    namespace bounds {
        const prototype: {
        };

    }

    namespace clear {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace get {
        const prototype: {
        };

    }

    namespace move {
        const prototype: {
        };

    }

    namespace rebase {
        const prototype: {
        };

    }

    namespace remove {
        const prototype: {
        };

    }

    namespace removeBody {
        const prototype: {
        };

    }

    namespace removeBodyAt {
        const prototype: {
        };

    }

    namespace removeComposite {
        const prototype: {
        };

    }

    namespace removeCompositeAt {
        const prototype: {
        };

    }

    namespace removeConstraint {
        const prototype: {
        };

    }

    namespace removeConstraintAt {
        const prototype: {
        };

    }

    namespace rotate {
        const prototype: {
        };

    }

    namespace scale {
        const prototype: {
        };

    }

    namespace setModified {
        const prototype: {
        };

    }

    namespace translate {
        const prototype: {
        };

    }

}

export namespace Composites {
    function car(xx: any, yy: any, width: any, height: any, wheelSize: any): any;

    function chain(composite: any, xOffsetA: any, yOffsetA: any, xOffsetB: any, yOffsetB: any, options: any): any;

    function mesh(composite: any, columns: any, rows: any, crossBrace: any, options: any): any;

    function newtonsCradle(xx: any, yy: any, number: any, size: any, length: any): any;

    function pyramid(xx: any, yy: any, columns: any, rows: any, columnGap: any, rowGap: any, callback: any): any;

    function softBody(xx: any, yy: any, columns: any, rows: any, columnGap: any, rowGap: any, crossBrace: any, particleRadius: any, particleOptions: any, constraintOptions: any): any;

    function stack(xx: any, yy: any, columns: any, rows: any, columnGap: any, rowGap: any, callback: any): any;

    namespace car {
        const prototype: {
        };

    }

    namespace chain {
        const prototype: {
        };

    }

    namespace mesh {
        const prototype: {
        };

    }

    namespace newtonsCradle {
        const prototype: {
        };

    }

    namespace pyramid {
        const prototype: {
        };

    }

    namespace softBody {
        const prototype: {
        };

    }

    namespace stack {
        const prototype: {
        };

    }

}

export namespace Constraint {
    function create(options: any): any;

    function postSolveAll(bodies: any): void;

    function preSolveAll(bodies: any): void;

    function solve(constraint: any, timeScale: any): void;

    function solveAll(constraints: any, timeScale: any): void;

    namespace create {
        const prototype: {
        };

    }

    namespace postSolveAll {
        const prototype: {
        };

    }

    namespace preSolveAll {
        const prototype: {
        };

    }

    namespace solve {
        const prototype: {
        };

    }

    namespace solveAll {
        const prototype: {
        };

    }

}

export namespace Contact {
    function create(vertex: any): any;

    function id(vertex: any): any;

    namespace create {
        const prototype: {
        };

    }

    namespace id {
        const prototype: {
        };

    }

}

export namespace Detector {
    function canCollide(filterA: any, filterB: any): any;

    function collisions(broadphasePairs: any, engine: any): any;

    namespace canCollide {
        const prototype: {
        };

    }

    namespace collisions {
        const prototype: {
        };

    }

}

export namespace Engine {
    function clear(engine: any): void;

    function create(element: any, options: any): any;

    function merge(engineA: any, engineB: any): void;

    function run(runner: any, engine: any): any;

    function update(engine: any, delta: any, correction: any): any;

    namespace clear {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace merge {
        const prototype: {
        };

    }

    namespace run {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Events {
    function off(object: any, eventNames: any, callback: any): void;

    function on(object: any, eventNames: any, callback: any): any;

    function trigger(object: any, eventNames: any, event: any): void;

    namespace off {
        const prototype: {
        };

    }

    namespace on {
        const prototype: {
        };

    }

    namespace trigger {
        const prototype: {
        };

    }

}

export namespace Grid {
    function clear(grid: any): void;

    function create(options: any): any;

    function update(grid: any, bodies: any, engine: any, forceUpdate: any): void;

    namespace clear {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Mouse {
    function clearSourceEvents(mouse: any): void;

    function create(element: any): any;

    function setElement(mouse: any, element: any): void;

    function setOffset(mouse: any, offset: any): void;

    function setScale(mouse: any, scale: any): void;

    namespace clearSourceEvents {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace setElement {
        const prototype: {
        };

    }

    namespace setOffset {
        const prototype: {
        };

    }

    namespace setScale {
        const prototype: {
        };

    }

}

export namespace MouseConstraint {
    function create(engine: any, options: any): any;

    function update(mouseConstraint: any, bodies: any): void;

    namespace create {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Pair {
    function create(collision: any, timestamp: any): any;

    function id(bodyA: any, bodyB: any): any;

    function setActive(pair: any, isActive: any, timestamp: any): void;

    function update(pair: any, collision: any, timestamp: any): void;

    namespace create {
        const prototype: {
        };

    }

    namespace id {
        const prototype: {
        };

    }

    namespace setActive {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Pairs {
    function clear(pairs: any): any;

    function create(options: any): any;

    function removeOld(pairs: any, timestamp: any): void;

    function update(pairs: any, collisions: any, timestamp: any): void;

    namespace clear {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace removeOld {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Plugin {
    function dependencies(module: any, tracked: any): any;

    function dependencyParse(dependency: any): any;

    function isFor(plugin: any, module: any): any;

    function isPlugin(obj: any): any;

    function isUsed(module: any, name: any): any;

    function register(plugin: any): any;

    function resolve(dependency: any): any;

    function toString(plugin: any): any;

    function use(module: any, plugins: any): void;

    function versionParse(range: any): any;

    function versionSatisfies(version: any, range: any): any;

    namespace dependencies {
        const prototype: {
        };

    }

    namespace dependencyParse {
        const prototype: {
        };

    }

    namespace isFor {
        const prototype: {
        };

    }

    namespace isPlugin {
        const prototype: {
        };

    }

    namespace isUsed {
        const prototype: {
        };

    }

    namespace register {
        const prototype: {
        };

    }

    namespace resolve {
        const prototype: {
        };

    }

    namespace toString {
        const prototype: {
        };

    }

    namespace use {
        const prototype: {
        };

    }

    namespace versionParse {
        const prototype: {
        };

    }

    namespace versionSatisfies {
        const prototype: {
        };

    }

}

export namespace Query {
    function collides(body: any, bodies: any): any;

    function point(bodies: any, point: any): any;

    function ray(bodies: any, startPoint: any, endPoint: any, rayWidth: any): any;

    function region(bodies: any, bounds: any, outside: any): any;

    namespace collides {
        const prototype: {
        };

    }

    namespace point {
        const prototype: {
        };

    }

    namespace ray {
        const prototype: {
        };

    }

    namespace region {
        const prototype: {
        };

    }

}

export namespace Render {
    function bodies(render: any, bodies: any, context: any): void;

    function bodyAxes(render: any, bodies: any, context: any): void;

    function bodyBounds(render: any, bodies: any, context: any): void;

    function bodyConvexHulls(render: any, bodies: any, context: any): void;

    function bodyIds(render: any, bodies: any, context: any): void;

    function bodyPositions(render: any, bodies: any, context: any): void;

    function bodyShadows(render: any, bodies: any, context: any): void;

    function bodyVelocity(render: any, bodies: any, context: any): void;

    function bodyWireframes(render: any, bodies: any, context: any): void;

    function collisions(render: any, pairs: any, context: any): void;

    function constraints(constraints: any, context: any): void;

    function create(options: any): any;

    function debug(render: any, context: any): void;

    function endViewTransform(render: any): void;

    function grid(render: any, grid: any, context: any): void;

    function inspector(inspector: any, context: any): void;

    function lookAt(render: any, objects: any, padding: any, center: any): void;

    function mousePosition(render: any, mouse: any, context: any): void;

    function run(render: any): void;

    function separations(render: any, pairs: any, context: any): void;

    function setPixelRatio(render: any, pixelRatio: any): void;

    function startViewTransform(render: any): void;

    function stop(render: any): void;

    function vertexNumbers(render: any, bodies: any, context: any): void;

    function world(render: any): void;

    namespace bodies {
        const prototype: {
        };

    }

    namespace bodyAxes {
        const prototype: {
        };

    }

    namespace bodyBounds {
        const prototype: {
        };

    }

    namespace bodyConvexHulls {
        const prototype: {
        };

    }

    namespace bodyIds {
        const prototype: {
        };

    }

    namespace bodyPositions {
        const prototype: {
        };

    }

    namespace bodyShadows {
        const prototype: {
        };

    }

    namespace bodyVelocity {
        const prototype: {
        };

    }

    namespace bodyWireframes {
        const prototype: {
        };

    }

    namespace collisions {
        const prototype: {
        };

    }

    namespace constraints {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace debug {
        const prototype: {
        };

    }

    namespace endViewTransform {
        const prototype: {
        };

    }

    namespace grid {
        const prototype: {
        };

    }

    namespace inspector {
        const prototype: {
        };

    }

    namespace lookAt {
        const prototype: {
        };

    }

    namespace mousePosition {
        const prototype: {
        };

    }

    namespace run {
        const prototype: {
        };

    }

    namespace separations {
        const prototype: {
        };

    }

    namespace setPixelRatio {
        const prototype: {
        };

    }

    namespace startViewTransform {
        const prototype: {
        };

    }

    namespace stop {
        const prototype: {
        };

    }

    namespace vertexNumbers {
        const prototype: {
        };

    }

    namespace world {
        const prototype: {
        };

    }

}

export namespace RenderPixi {
    function body(render: any, body: any): void;

    function clear(render: any): void;

    function constraint(render: any, constraint: any): void;

    function create(options: any): any;

    function run(render: any): void;

    function setBackground(render: any, background: any): void;

    function stop(render: any): void;

    function world(render: any): void;

    namespace body {
        const prototype: {
        };

    }

    namespace clear {
        const prototype: {
        };

    }

    namespace constraint {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace run {
        const prototype: {
        };

    }

    namespace setBackground {
        const prototype: {
        };

    }

    namespace stop {
        const prototype: {
        };

    }

    namespace world {
        const prototype: {
        };

    }

}

export namespace Resolver {
    function postSolvePosition(bodies: any): void;

    function preSolvePosition(pairs: any): void;

    function preSolveVelocity(pairs: any): void;

    function solvePosition(pairs: any, timeScale: any): void;

    function solveVelocity(pairs: any, timeScale: any): void;

    namespace postSolvePosition {
        const prototype: {
        };

    }

    namespace preSolvePosition {
        const prototype: {
        };

    }

    namespace preSolveVelocity {
        const prototype: {
        };

    }

    namespace solvePosition {
        const prototype: {
        };

    }

    namespace solveVelocity {
        const prototype: {
        };

    }

}

export namespace Runner {
    function create(options: any): any;

    function run(runner: any, engine: any): any;

    function start(runner: any, engine: any): void;

    function stop(runner: any): void;

    function tick(runner: any, engine: any, time: any): void;

    namespace create {
        const prototype: {
        };

    }

    namespace run {
        const prototype: {
        };

    }

    namespace start {
        const prototype: {
        };

    }

    namespace stop {
        const prototype: {
        };

    }

    namespace tick {
        const prototype: {
        };

    }

}

export namespace SAT {
    function collides(bodyA: any, bodyB: any, previousCollision: any): any;

    namespace collides {
        const prototype: {
        };

    }

}

export namespace Sleeping {
    function afterCollisions(pairs: any, timeScale: any): void;

    function set(body: any, isSleeping: any): void;

    function update(bodies: any, timeScale: any): void;

    namespace afterCollisions {
        const prototype: {
        };

    }

    namespace set {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace Svg {
    function pathToVertices(path: any, sampleLength: any): any;

    namespace pathToVertices {
        const prototype: {
        };

    }

}

export namespace Vector {
    function add(vectorA: any, vectorB: any, output: any): any;

    function angle(vectorA: any, vectorB: any): any;

    function clone(vector: any): any;

    function create(x: any, y: any): any;

    function cross(vectorA: any, vectorB: any): any;

    function cross3(vectorA: any, vectorB: any, vectorC: any): any;

    function div(vector: any, scalar: any): any;

    function dot(vectorA: any, vectorB: any): any;

    function magnitude(vector: any): any;

    function magnitudeSquared(vector: any): any;

    function mult(vector: any, scalar: any): any;

    function neg(vector: any): any;

    function normalise(vector: any): any;

    function perp(vector: any, negate: any): any;

    function rotate(vector: any, angle: any, output: any): any;

    function rotateAbout(vector: any, angle: any, point: any, output: any): any;

    function sub(vectorA: any, vectorB: any, output: any): any;

    namespace add {
        const prototype: {
        };

    }

    namespace angle {
        const prototype: {
        };

    }

    namespace clone {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace cross {
        const prototype: {
        };

    }

    namespace cross3 {
        const prototype: {
        };

    }

    namespace div {
        const prototype: {
        };

    }

    namespace dot {
        const prototype: {
        };

    }

    namespace magnitude {
        const prototype: {
        };

    }

    namespace magnitudeSquared {
        const prototype: {
        };

    }

    namespace mult {
        const prototype: {
        };

    }

    namespace neg {
        const prototype: {
        };

    }

    namespace normalise {
        const prototype: {
        };

    }

    namespace perp {
        const prototype: {
        };

    }

    namespace rotate {
        const prototype: {
        };

    }

    namespace rotateAbout {
        const prototype: {
        };

    }

    namespace sub {
        const prototype: {
        };

    }

}

export namespace Vertices {
    function area(vertices: any, signed: any): any;

    function centre(vertices: any): any;

    function chamfer(vertices: any, radius: any, quality: any, qualityMin: any, qualityMax: any): any;

    function clockwiseSort(vertices: any): any;

    function contains(vertices: any, point: any): any;

    function create(points: any, body: any): any;

    function fromPath(path: any, body: any): any;

    function hull(vertices: any): any;

    function inertia(vertices: any, mass: any): any;

    function isConvex(vertices: any): any;

    function mean(vertices: any): any;

    function rotate(vertices: any, angle: any, point: any): any;

    function scale(vertices: any, scaleX: any, scaleY: any, point: any): any;

    function translate(vertices: any, vector: any, scalar: any): any;

    namespace area {
        const prototype: {
        };

    }

    namespace centre {
        const prototype: {
        };

    }

    namespace chamfer {
        const prototype: {
        };

    }

    namespace clockwiseSort {
        const prototype: {
        };

    }

    namespace contains {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace fromPath {
        const prototype: {
        };

    }

    namespace hull {
        const prototype: {
        };

    }

    namespace inertia {
        const prototype: {
        };

    }

    namespace isConvex {
        const prototype: {
        };

    }

    namespace mean {
        const prototype: {
        };

    }

    namespace rotate {
        const prototype: {
        };

    }

    namespace scale {
        const prototype: {
        };

    }

    namespace translate {
        const prototype: {
        };

    }

}

export namespace World {
    function add(composite: any, object: any): any;

    function addBody(composite: any, body: any): any;

    function addComposite(compositeA: any, compositeB: any): any;

    function addConstraint(composite: any, constraint: any): any;

    function clear(composite: any, keepStatic: any, deep: any): any;

    function create(options: any): any;

    function remove(composite: any, object: any, deep: any): any;

    namespace add {
        const prototype: {
        };

    }

    namespace addBody {
        const prototype: {
        };

    }

    namespace addComposite {
        const prototype: {
        };

    }

    namespace addConstraint {
        const prototype: {
        };

    }

    namespace clear {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace remove {
        const prototype: {
        };

    }

}

export namespace after {
    const prototype: {
    };

}

export namespace before {
    const prototype: {
    };

}

export namespace use {
    const prototype: {
    };

}
}

