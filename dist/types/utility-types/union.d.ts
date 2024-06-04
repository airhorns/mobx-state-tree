import { IType, IAnyType, _NotCustomized } from "../../internal";
export type ITypeDispatcher = (snapshot: any) => IAnyType;
export interface UnionOptions {
    eager?: boolean;
    dispatcher?: ITypeDispatcher;
}
/**
 * Transform _NotCustomized | _NotCustomized... to _NotCustomized, _NotCustomized | A | B to A | B
 * @hidden
 */
export type _CustomCSProcessor<T> = Exclude<T, _NotCustomized> extends never ? _NotCustomized : Exclude<T, _NotCustomized>;
/** @hidden */
export interface ITypeUnion<C, S, T> extends IType<_CustomCSProcessor<C>, _CustomCSProcessor<S>, T> {
}
type IUnionType<Types extends IAnyType[]> = ITypeUnion<Types[number]["CreationType"], Types[number]["SnapshotType"], Types[number]["TypeWithoutSTN"]>;
export declare function union<Types extends IAnyType[]>(...types: Types): IUnionType<Types>;
export declare function union<Types extends IAnyType[]>(options: UnionOptions, ...types: Types): IUnionType<Types>;
/**
 * Returns if a given value represents a union type.
 *
 * @param type
 * @returns
 */
export declare function isUnionType<IT extends IAnyType>(type: IT): type is IT;
export {};
