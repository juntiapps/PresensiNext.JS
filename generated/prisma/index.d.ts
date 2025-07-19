
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Pegawai
 * 
 */
export type Pegawai = $Result.DefaultSelection<Prisma.$PegawaiPayload>
/**
 * Model Departemen
 * 
 */
export type Departemen = $Result.DefaultSelection<Prisma.$DepartemenPayload>
/**
 * Model LogPresensi
 * 
 */
export type LogPresensi = $Result.DefaultSelection<Prisma.$LogPresensiPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pegawai`: Exposes CRUD operations for the **Pegawai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pegawais
    * const pegawais = await prisma.pegawai.findMany()
    * ```
    */
  get pegawai(): Prisma.PegawaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departemen`: Exposes CRUD operations for the **Departemen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departemen
    * const departemen = await prisma.departemen.findMany()
    * ```
    */
  get departemen(): Prisma.DepartemenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logPresensi`: Exposes CRUD operations for the **LogPresensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogPresensis
    * const logPresensis = await prisma.logPresensi.findMany()
    * ```
    */
  get logPresensi(): Prisma.LogPresensiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Pegawai: 'Pegawai',
    Departemen: 'Departemen',
    LogPresensi: 'LogPresensi',
    Role: 'Role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "pegawai" | "departemen" | "logPresensi" | "role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Pegawai: {
        payload: Prisma.$PegawaiPayload<ExtArgs>
        fields: Prisma.PegawaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PegawaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PegawaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          findFirst: {
            args: Prisma.PegawaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PegawaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          findMany: {
            args: Prisma.PegawaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          create: {
            args: Prisma.PegawaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          createMany: {
            args: Prisma.PegawaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PegawaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          delete: {
            args: Prisma.PegawaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          update: {
            args: Prisma.PegawaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          deleteMany: {
            args: Prisma.PegawaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PegawaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PegawaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>[]
          }
          upsert: {
            args: Prisma.PegawaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PegawaiPayload>
          }
          aggregate: {
            args: Prisma.PegawaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePegawai>
          }
          groupBy: {
            args: Prisma.PegawaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<PegawaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.PegawaiCountArgs<ExtArgs>
            result: $Utils.Optional<PegawaiCountAggregateOutputType> | number
          }
        }
      }
      Departemen: {
        payload: Prisma.$DepartemenPayload<ExtArgs>
        fields: Prisma.DepartemenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartemenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartemenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          findFirst: {
            args: Prisma.DepartemenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartemenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          findMany: {
            args: Prisma.DepartemenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>[]
          }
          create: {
            args: Prisma.DepartemenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          createMany: {
            args: Prisma.DepartemenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartemenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>[]
          }
          delete: {
            args: Prisma.DepartemenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          update: {
            args: Prisma.DepartemenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          deleteMany: {
            args: Prisma.DepartemenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartemenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartemenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>[]
          }
          upsert: {
            args: Prisma.DepartemenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartemenPayload>
          }
          aggregate: {
            args: Prisma.DepartemenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartemen>
          }
          groupBy: {
            args: Prisma.DepartemenGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartemenGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartemenCountArgs<ExtArgs>
            result: $Utils.Optional<DepartemenCountAggregateOutputType> | number
          }
        }
      }
      LogPresensi: {
        payload: Prisma.$LogPresensiPayload<ExtArgs>
        fields: Prisma.LogPresensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogPresensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogPresensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>
          }
          findFirst: {
            args: Prisma.LogPresensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogPresensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>
          }
          findMany: {
            args: Prisma.LogPresensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>[]
          }
          create: {
            args: Prisma.LogPresensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>
          }
          createMany: {
            args: Prisma.LogPresensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogPresensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>[]
          }
          delete: {
            args: Prisma.LogPresensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>
          }
          update: {
            args: Prisma.LogPresensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>
          }
          deleteMany: {
            args: Prisma.LogPresensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogPresensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogPresensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>[]
          }
          upsert: {
            args: Prisma.LogPresensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPresensiPayload>
          }
          aggregate: {
            args: Prisma.LogPresensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogPresensi>
          }
          groupBy: {
            args: Prisma.LogPresensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogPresensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogPresensiCountArgs<ExtArgs>
            result: $Utils.Optional<LogPresensiCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    pegawai?: PegawaiOmit
    departemen?: DepartemenOmit
    logPresensi?: LogPresensiOmit
    role?: RoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PegawaiCountOutputType
   */

  export type PegawaiCountOutputType = {
    logPresensi: number
  }

  export type PegawaiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logPresensi?: boolean | PegawaiCountOutputTypeCountLogPresensiArgs
  }

  // Custom InputTypes
  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PegawaiCountOutputType
     */
    select?: PegawaiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PegawaiCountOutputType without action
   */
  export type PegawaiCountOutputTypeCountLogPresensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogPresensiWhereInput
  }


  /**
   * Count Type DepartemenCountOutputType
   */

  export type DepartemenCountOutputType = {
    pegawai: number
  }

  export type DepartemenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | DepartemenCountOutputTypeCountPegawaiArgs
  }

  // Custom InputTypes
  /**
   * DepartemenCountOutputType without action
   */
  export type DepartemenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartemenCountOutputType
     */
    select?: DepartemenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartemenCountOutputType without action
   */
  export type DepartemenCountOutputTypeCountPegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PegawaiWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    pegawai?: boolean | User$pegawaiArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    pegawai?: boolean | User$pegawaiArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      pegawai: Prisma.$PegawaiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pegawai<T extends User$pegawaiArgs<ExtArgs> = {}>(args?: Subset<T, User$pegawaiArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pegawai
   */
  export type User$pegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    where?: PegawaiWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Pegawai
   */

  export type AggregatePegawai = {
    _count: PegawaiCountAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  export type PegawaiMinAggregateOutputType = {
    id: string | null
    nama: string | null
    nip: string | null
    userId: string | null
    departemenId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PegawaiMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    nip: string | null
    userId: string | null
    departemenId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PegawaiCountAggregateOutputType = {
    id: number
    nama: number
    nip: number
    userId: number
    departemenId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PegawaiMinAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    userId?: true
    departemenId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PegawaiMaxAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    userId?: true
    departemenId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PegawaiCountAggregateInputType = {
    id?: true
    nama?: true
    nip?: true
    userId?: true
    departemenId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PegawaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pegawai to aggregate.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pegawais
    **/
    _count?: true | PegawaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PegawaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PegawaiMaxAggregateInputType
  }

  export type GetPegawaiAggregateType<T extends PegawaiAggregateArgs> = {
        [P in keyof T & keyof AggregatePegawai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePegawai[P]>
      : GetScalarType<T[P], AggregatePegawai[P]>
  }




  export type PegawaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PegawaiWhereInput
    orderBy?: PegawaiOrderByWithAggregationInput | PegawaiOrderByWithAggregationInput[]
    by: PegawaiScalarFieldEnum[] | PegawaiScalarFieldEnum
    having?: PegawaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PegawaiCountAggregateInputType | true
    _min?: PegawaiMinAggregateInputType
    _max?: PegawaiMaxAggregateInputType
  }

  export type PegawaiGroupByOutputType = {
    id: string
    nama: string
    nip: string
    userId: string | null
    departemenId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PegawaiCountAggregateOutputType | null
    _min: PegawaiMinAggregateOutputType | null
    _max: PegawaiMaxAggregateOutputType | null
  }

  type GetPegawaiGroupByPayload<T extends PegawaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PegawaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PegawaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
            : GetScalarType<T[P], PegawaiGroupByOutputType[P]>
        }
      >
    >


  export type PegawaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nip?: boolean
    userId?: boolean
    departemenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Pegawai$userArgs<ExtArgs>
    departemen?: boolean | Pegawai$departemenArgs<ExtArgs>
    logPresensi?: boolean | Pegawai$logPresensiArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nip?: boolean
    userId?: boolean
    departemenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Pegawai$userArgs<ExtArgs>
    departemen?: boolean | Pegawai$departemenArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nip?: boolean
    userId?: boolean
    departemenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Pegawai$userArgs<ExtArgs>
    departemen?: boolean | Pegawai$departemenArgs<ExtArgs>
  }, ExtArgs["result"]["pegawai"]>

  export type PegawaiSelectScalar = {
    id?: boolean
    nama?: boolean
    nip?: boolean
    userId?: boolean
    departemenId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PegawaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nip" | "userId" | "departemenId" | "createdAt" | "updatedAt", ExtArgs["result"]["pegawai"]>
  export type PegawaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Pegawai$userArgs<ExtArgs>
    departemen?: boolean | Pegawai$departemenArgs<ExtArgs>
    logPresensi?: boolean | Pegawai$logPresensiArgs<ExtArgs>
    _count?: boolean | PegawaiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PegawaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Pegawai$userArgs<ExtArgs>
    departemen?: boolean | Pegawai$departemenArgs<ExtArgs>
  }
  export type PegawaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Pegawai$userArgs<ExtArgs>
    departemen?: boolean | Pegawai$departemenArgs<ExtArgs>
  }

  export type $PegawaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pegawai"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      departemen: Prisma.$DepartemenPayload<ExtArgs> | null
      logPresensi: Prisma.$LogPresensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      nip: string
      userId: string | null
      departemenId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pegawai"]>
    composites: {}
  }

  type PegawaiGetPayload<S extends boolean | null | undefined | PegawaiDefaultArgs> = $Result.GetResult<Prisma.$PegawaiPayload, S>

  type PegawaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PegawaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PegawaiCountAggregateInputType | true
    }

  export interface PegawaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pegawai'], meta: { name: 'Pegawai' } }
    /**
     * Find zero or one Pegawai that matches the filter.
     * @param {PegawaiFindUniqueArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PegawaiFindUniqueArgs>(args: SelectSubset<T, PegawaiFindUniqueArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pegawai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PegawaiFindUniqueOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PegawaiFindUniqueOrThrowArgs>(args: SelectSubset<T, PegawaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindFirstArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PegawaiFindFirstArgs>(args?: SelectSubset<T, PegawaiFindFirstArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pegawai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindFirstOrThrowArgs} args - Arguments to find a Pegawai
     * @example
     * // Get one Pegawai
     * const pegawai = await prisma.pegawai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PegawaiFindFirstOrThrowArgs>(args?: SelectSubset<T, PegawaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pegawais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pegawais
     * const pegawais = await prisma.pegawai.findMany()
     * 
     * // Get first 10 Pegawais
     * const pegawais = await prisma.pegawai.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PegawaiFindManyArgs>(args?: SelectSubset<T, PegawaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pegawai.
     * @param {PegawaiCreateArgs} args - Arguments to create a Pegawai.
     * @example
     * // Create one Pegawai
     * const Pegawai = await prisma.pegawai.create({
     *   data: {
     *     // ... data to create a Pegawai
     *   }
     * })
     * 
     */
    create<T extends PegawaiCreateArgs>(args: SelectSubset<T, PegawaiCreateArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pegawais.
     * @param {PegawaiCreateManyArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PegawaiCreateManyArgs>(args?: SelectSubset<T, PegawaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pegawais and returns the data saved in the database.
     * @param {PegawaiCreateManyAndReturnArgs} args - Arguments to create many Pegawais.
     * @example
     * // Create many Pegawais
     * const pegawai = await prisma.pegawai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pegawais and only return the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PegawaiCreateManyAndReturnArgs>(args?: SelectSubset<T, PegawaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pegawai.
     * @param {PegawaiDeleteArgs} args - Arguments to delete one Pegawai.
     * @example
     * // Delete one Pegawai
     * const Pegawai = await prisma.pegawai.delete({
     *   where: {
     *     // ... filter to delete one Pegawai
     *   }
     * })
     * 
     */
    delete<T extends PegawaiDeleteArgs>(args: SelectSubset<T, PegawaiDeleteArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pegawai.
     * @param {PegawaiUpdateArgs} args - Arguments to update one Pegawai.
     * @example
     * // Update one Pegawai
     * const pegawai = await prisma.pegawai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PegawaiUpdateArgs>(args: SelectSubset<T, PegawaiUpdateArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pegawais.
     * @param {PegawaiDeleteManyArgs} args - Arguments to filter Pegawais to delete.
     * @example
     * // Delete a few Pegawais
     * const { count } = await prisma.pegawai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PegawaiDeleteManyArgs>(args?: SelectSubset<T, PegawaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PegawaiUpdateManyArgs>(args: SelectSubset<T, PegawaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pegawais and returns the data updated in the database.
     * @param {PegawaiUpdateManyAndReturnArgs} args - Arguments to update many Pegawais.
     * @example
     * // Update many Pegawais
     * const pegawai = await prisma.pegawai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pegawais and only return the `id`
     * const pegawaiWithIdOnly = await prisma.pegawai.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PegawaiUpdateManyAndReturnArgs>(args: SelectSubset<T, PegawaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pegawai.
     * @param {PegawaiUpsertArgs} args - Arguments to update or create a Pegawai.
     * @example
     * // Update or create a Pegawai
     * const pegawai = await prisma.pegawai.upsert({
     *   create: {
     *     // ... data to create a Pegawai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pegawai we want to update
     *   }
     * })
     */
    upsert<T extends PegawaiUpsertArgs>(args: SelectSubset<T, PegawaiUpsertArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pegawais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiCountArgs} args - Arguments to filter Pegawais to count.
     * @example
     * // Count the number of Pegawais
     * const count = await prisma.pegawai.count({
     *   where: {
     *     // ... the filter for the Pegawais we want to count
     *   }
     * })
    **/
    count<T extends PegawaiCountArgs>(
      args?: Subset<T, PegawaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PegawaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PegawaiAggregateArgs>(args: Subset<T, PegawaiAggregateArgs>): Prisma.PrismaPromise<GetPegawaiAggregateType<T>>

    /**
     * Group by Pegawai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PegawaiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PegawaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PegawaiGroupByArgs['orderBy'] }
        : { orderBy?: PegawaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PegawaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPegawaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pegawai model
   */
  readonly fields: PegawaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pegawai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PegawaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Pegawai$userArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    departemen<T extends Pegawai$departemenArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$departemenArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logPresensi<T extends Pegawai$logPresensiArgs<ExtArgs> = {}>(args?: Subset<T, Pegawai$logPresensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pegawai model
   */
  interface PegawaiFieldRefs {
    readonly id: FieldRef<"Pegawai", 'String'>
    readonly nama: FieldRef<"Pegawai", 'String'>
    readonly nip: FieldRef<"Pegawai", 'String'>
    readonly userId: FieldRef<"Pegawai", 'String'>
    readonly departemenId: FieldRef<"Pegawai", 'String'>
    readonly createdAt: FieldRef<"Pegawai", 'DateTime'>
    readonly updatedAt: FieldRef<"Pegawai", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pegawai findUnique
   */
  export type PegawaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai findUniqueOrThrow
   */
  export type PegawaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai findFirst
   */
  export type PegawaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai findFirstOrThrow
   */
  export type PegawaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawai to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pegawais.
     */
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai findMany
   */
  export type PegawaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter, which Pegawais to fetch.
     */
    where?: PegawaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pegawais to fetch.
     */
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pegawais.
     */
    cursor?: PegawaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pegawais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pegawais.
     */
    skip?: number
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Pegawai create
   */
  export type PegawaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * The data needed to create a Pegawai.
     */
    data: XOR<PegawaiCreateInput, PegawaiUncheckedCreateInput>
  }

  /**
   * Pegawai createMany
   */
  export type PegawaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pegawais.
     */
    data: PegawaiCreateManyInput | PegawaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pegawai createManyAndReturn
   */
  export type PegawaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * The data used to create many Pegawais.
     */
    data: PegawaiCreateManyInput | PegawaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pegawai update
   */
  export type PegawaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * The data needed to update a Pegawai.
     */
    data: XOR<PegawaiUpdateInput, PegawaiUncheckedUpdateInput>
    /**
     * Choose, which Pegawai to update.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai updateMany
   */
  export type PegawaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pegawais.
     */
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyInput>
    /**
     * Filter which Pegawais to update
     */
    where?: PegawaiWhereInput
    /**
     * Limit how many Pegawais to update.
     */
    limit?: number
  }

  /**
   * Pegawai updateManyAndReturn
   */
  export type PegawaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * The data used to update Pegawais.
     */
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyInput>
    /**
     * Filter which Pegawais to update
     */
    where?: PegawaiWhereInput
    /**
     * Limit how many Pegawais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pegawai upsert
   */
  export type PegawaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * The filter to search for the Pegawai to update in case it exists.
     */
    where: PegawaiWhereUniqueInput
    /**
     * In case the Pegawai found by the `where` argument doesn't exist, create a new Pegawai with this data.
     */
    create: XOR<PegawaiCreateInput, PegawaiUncheckedCreateInput>
    /**
     * In case the Pegawai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PegawaiUpdateInput, PegawaiUncheckedUpdateInput>
  }

  /**
   * Pegawai delete
   */
  export type PegawaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    /**
     * Filter which Pegawai to delete.
     */
    where: PegawaiWhereUniqueInput
  }

  /**
   * Pegawai deleteMany
   */
  export type PegawaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pegawais to delete
     */
    where?: PegawaiWhereInput
    /**
     * Limit how many Pegawais to delete.
     */
    limit?: number
  }

  /**
   * Pegawai.user
   */
  export type Pegawai$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Pegawai.departemen
   */
  export type Pegawai$departemenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    where?: DepartemenWhereInput
  }

  /**
   * Pegawai.logPresensi
   */
  export type Pegawai$logPresensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    where?: LogPresensiWhereInput
    orderBy?: LogPresensiOrderByWithRelationInput | LogPresensiOrderByWithRelationInput[]
    cursor?: LogPresensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogPresensiScalarFieldEnum | LogPresensiScalarFieldEnum[]
  }

  /**
   * Pegawai without action
   */
  export type PegawaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
  }


  /**
   * Model Departemen
   */

  export type AggregateDepartemen = {
    _count: DepartemenCountAggregateOutputType | null
    _min: DepartemenMinAggregateOutputType | null
    _max: DepartemenMaxAggregateOutputType | null
  }

  export type DepartemenMinAggregateOutputType = {
    id: string | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartemenMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartemenCountAggregateOutputType = {
    id: number
    nama: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartemenMinAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartemenMaxAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartemenCountAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartemenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departemen to aggregate.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departemen
    **/
    _count?: true | DepartemenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartemenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartemenMaxAggregateInputType
  }

  export type GetDepartemenAggregateType<T extends DepartemenAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartemen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartemen[P]>
      : GetScalarType<T[P], AggregateDepartemen[P]>
  }




  export type DepartemenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartemenWhereInput
    orderBy?: DepartemenOrderByWithAggregationInput | DepartemenOrderByWithAggregationInput[]
    by: DepartemenScalarFieldEnum[] | DepartemenScalarFieldEnum
    having?: DepartemenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartemenCountAggregateInputType | true
    _min?: DepartemenMinAggregateInputType
    _max?: DepartemenMaxAggregateInputType
  }

  export type DepartemenGroupByOutputType = {
    id: string
    nama: string
    createdAt: Date
    updatedAt: Date
    _count: DepartemenCountAggregateOutputType | null
    _min: DepartemenMinAggregateOutputType | null
    _max: DepartemenMaxAggregateOutputType | null
  }

  type GetDepartemenGroupByPayload<T extends DepartemenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartemenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartemenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartemenGroupByOutputType[P]>
            : GetScalarType<T[P], DepartemenGroupByOutputType[P]>
        }
      >
    >


  export type DepartemenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pegawai?: boolean | Departemen$pegawaiArgs<ExtArgs>
    _count?: boolean | DepartemenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departemen"]>

  export type DepartemenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["departemen"]>

  export type DepartemenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["departemen"]>

  export type DepartemenSelectScalar = {
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartemenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "createdAt" | "updatedAt", ExtArgs["result"]["departemen"]>
  export type DepartemenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | Departemen$pegawaiArgs<ExtArgs>
    _count?: boolean | DepartemenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartemenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartemenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartemenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departemen"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["departemen"]>
    composites: {}
  }

  type DepartemenGetPayload<S extends boolean | null | undefined | DepartemenDefaultArgs> = $Result.GetResult<Prisma.$DepartemenPayload, S>

  type DepartemenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartemenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartemenCountAggregateInputType | true
    }

  export interface DepartemenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departemen'], meta: { name: 'Departemen' } }
    /**
     * Find zero or one Departemen that matches the filter.
     * @param {DepartemenFindUniqueArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartemenFindUniqueArgs>(args: SelectSubset<T, DepartemenFindUniqueArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departemen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartemenFindUniqueOrThrowArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartemenFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartemenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departemen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindFirstArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartemenFindFirstArgs>(args?: SelectSubset<T, DepartemenFindFirstArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departemen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindFirstOrThrowArgs} args - Arguments to find a Departemen
     * @example
     * // Get one Departemen
     * const departemen = await prisma.departemen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartemenFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartemenFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departemen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departemen
     * const departemen = await prisma.departemen.findMany()
     * 
     * // Get first 10 Departemen
     * const departemen = await prisma.departemen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departemenWithIdOnly = await prisma.departemen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartemenFindManyArgs>(args?: SelectSubset<T, DepartemenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departemen.
     * @param {DepartemenCreateArgs} args - Arguments to create a Departemen.
     * @example
     * // Create one Departemen
     * const Departemen = await prisma.departemen.create({
     *   data: {
     *     // ... data to create a Departemen
     *   }
     * })
     * 
     */
    create<T extends DepartemenCreateArgs>(args: SelectSubset<T, DepartemenCreateArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departemen.
     * @param {DepartemenCreateManyArgs} args - Arguments to create many Departemen.
     * @example
     * // Create many Departemen
     * const departemen = await prisma.departemen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartemenCreateManyArgs>(args?: SelectSubset<T, DepartemenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departemen and returns the data saved in the database.
     * @param {DepartemenCreateManyAndReturnArgs} args - Arguments to create many Departemen.
     * @example
     * // Create many Departemen
     * const departemen = await prisma.departemen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departemen and only return the `id`
     * const departemenWithIdOnly = await prisma.departemen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartemenCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartemenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departemen.
     * @param {DepartemenDeleteArgs} args - Arguments to delete one Departemen.
     * @example
     * // Delete one Departemen
     * const Departemen = await prisma.departemen.delete({
     *   where: {
     *     // ... filter to delete one Departemen
     *   }
     * })
     * 
     */
    delete<T extends DepartemenDeleteArgs>(args: SelectSubset<T, DepartemenDeleteArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departemen.
     * @param {DepartemenUpdateArgs} args - Arguments to update one Departemen.
     * @example
     * // Update one Departemen
     * const departemen = await prisma.departemen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartemenUpdateArgs>(args: SelectSubset<T, DepartemenUpdateArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departemen.
     * @param {DepartemenDeleteManyArgs} args - Arguments to filter Departemen to delete.
     * @example
     * // Delete a few Departemen
     * const { count } = await prisma.departemen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartemenDeleteManyArgs>(args?: SelectSubset<T, DepartemenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departemen
     * const departemen = await prisma.departemen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartemenUpdateManyArgs>(args: SelectSubset<T, DepartemenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departemen and returns the data updated in the database.
     * @param {DepartemenUpdateManyAndReturnArgs} args - Arguments to update many Departemen.
     * @example
     * // Update many Departemen
     * const departemen = await prisma.departemen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departemen and only return the `id`
     * const departemenWithIdOnly = await prisma.departemen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartemenUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartemenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departemen.
     * @param {DepartemenUpsertArgs} args - Arguments to update or create a Departemen.
     * @example
     * // Update or create a Departemen
     * const departemen = await prisma.departemen.upsert({
     *   create: {
     *     // ... data to create a Departemen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departemen we want to update
     *   }
     * })
     */
    upsert<T extends DepartemenUpsertArgs>(args: SelectSubset<T, DepartemenUpsertArgs<ExtArgs>>): Prisma__DepartemenClient<$Result.GetResult<Prisma.$DepartemenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenCountArgs} args - Arguments to filter Departemen to count.
     * @example
     * // Count the number of Departemen
     * const count = await prisma.departemen.count({
     *   where: {
     *     // ... the filter for the Departemen we want to count
     *   }
     * })
    **/
    count<T extends DepartemenCountArgs>(
      args?: Subset<T, DepartemenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartemenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartemenAggregateArgs>(args: Subset<T, DepartemenAggregateArgs>): Prisma.PrismaPromise<GetDepartemenAggregateType<T>>

    /**
     * Group by Departemen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartemenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartemenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartemenGroupByArgs['orderBy'] }
        : { orderBy?: DepartemenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartemenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartemenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departemen model
   */
  readonly fields: DepartemenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departemen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartemenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends Departemen$pegawaiArgs<ExtArgs> = {}>(args?: Subset<T, Departemen$pegawaiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Departemen model
   */
  interface DepartemenFieldRefs {
    readonly id: FieldRef<"Departemen", 'String'>
    readonly nama: FieldRef<"Departemen", 'String'>
    readonly createdAt: FieldRef<"Departemen", 'DateTime'>
    readonly updatedAt: FieldRef<"Departemen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Departemen findUnique
   */
  export type DepartemenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen findUniqueOrThrow
   */
  export type DepartemenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen findFirst
   */
  export type DepartemenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departemen.
     */
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen findFirstOrThrow
   */
  export type DepartemenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departemen.
     */
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen findMany
   */
  export type DepartemenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter, which Departemen to fetch.
     */
    where?: DepartemenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departemen to fetch.
     */
    orderBy?: DepartemenOrderByWithRelationInput | DepartemenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departemen.
     */
    cursor?: DepartemenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departemen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departemen.
     */
    skip?: number
    distinct?: DepartemenScalarFieldEnum | DepartemenScalarFieldEnum[]
  }

  /**
   * Departemen create
   */
  export type DepartemenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The data needed to create a Departemen.
     */
    data: XOR<DepartemenCreateInput, DepartemenUncheckedCreateInput>
  }

  /**
   * Departemen createMany
   */
  export type DepartemenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departemen.
     */
    data: DepartemenCreateManyInput | DepartemenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departemen createManyAndReturn
   */
  export type DepartemenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * The data used to create many Departemen.
     */
    data: DepartemenCreateManyInput | DepartemenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departemen update
   */
  export type DepartemenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The data needed to update a Departemen.
     */
    data: XOR<DepartemenUpdateInput, DepartemenUncheckedUpdateInput>
    /**
     * Choose, which Departemen to update.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen updateMany
   */
  export type DepartemenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departemen.
     */
    data: XOR<DepartemenUpdateManyMutationInput, DepartemenUncheckedUpdateManyInput>
    /**
     * Filter which Departemen to update
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to update.
     */
    limit?: number
  }

  /**
   * Departemen updateManyAndReturn
   */
  export type DepartemenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * The data used to update Departemen.
     */
    data: XOR<DepartemenUpdateManyMutationInput, DepartemenUncheckedUpdateManyInput>
    /**
     * Filter which Departemen to update
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to update.
     */
    limit?: number
  }

  /**
   * Departemen upsert
   */
  export type DepartemenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * The filter to search for the Departemen to update in case it exists.
     */
    where: DepartemenWhereUniqueInput
    /**
     * In case the Departemen found by the `where` argument doesn't exist, create a new Departemen with this data.
     */
    create: XOR<DepartemenCreateInput, DepartemenUncheckedCreateInput>
    /**
     * In case the Departemen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartemenUpdateInput, DepartemenUncheckedUpdateInput>
  }

  /**
   * Departemen delete
   */
  export type DepartemenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
    /**
     * Filter which Departemen to delete.
     */
    where: DepartemenWhereUniqueInput
  }

  /**
   * Departemen deleteMany
   */
  export type DepartemenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departemen to delete
     */
    where?: DepartemenWhereInput
    /**
     * Limit how many Departemen to delete.
     */
    limit?: number
  }

  /**
   * Departemen.pegawai
   */
  export type Departemen$pegawaiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pegawai
     */
    select?: PegawaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pegawai
     */
    omit?: PegawaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PegawaiInclude<ExtArgs> | null
    where?: PegawaiWhereInput
    orderBy?: PegawaiOrderByWithRelationInput | PegawaiOrderByWithRelationInput[]
    cursor?: PegawaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PegawaiScalarFieldEnum | PegawaiScalarFieldEnum[]
  }

  /**
   * Departemen without action
   */
  export type DepartemenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departemen
     */
    select?: DepartemenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departemen
     */
    omit?: DepartemenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartemenInclude<ExtArgs> | null
  }


  /**
   * Model LogPresensi
   */

  export type AggregateLogPresensi = {
    _count: LogPresensiCountAggregateOutputType | null
    _avg: LogPresensiAvgAggregateOutputType | null
    _sum: LogPresensiSumAggregateOutputType | null
    _min: LogPresensiMinAggregateOutputType | null
    _max: LogPresensiMaxAggregateOutputType | null
  }

  export type LogPresensiAvgAggregateOutputType = {
    latMasuk: number | null
    lngMasuk: number | null
    latPulang: number | null
    lngPulang: number | null
  }

  export type LogPresensiSumAggregateOutputType = {
    latMasuk: number | null
    lngMasuk: number | null
    latPulang: number | null
    lngPulang: number | null
  }

  export type LogPresensiMinAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    waktuMasuk: Date | null
    latMasuk: number | null
    lngMasuk: number | null
    waktuPulang: Date | null
    latPulang: number | null
    lngPulang: number | null
    createdAt: Date | null
  }

  export type LogPresensiMaxAggregateOutputType = {
    id: string | null
    pegawaiId: string | null
    waktuMasuk: Date | null
    latMasuk: number | null
    lngMasuk: number | null
    waktuPulang: Date | null
    latPulang: number | null
    lngPulang: number | null
    createdAt: Date | null
  }

  export type LogPresensiCountAggregateOutputType = {
    id: number
    pegawaiId: number
    waktuMasuk: number
    latMasuk: number
    lngMasuk: number
    waktuPulang: number
    latPulang: number
    lngPulang: number
    createdAt: number
    _all: number
  }


  export type LogPresensiAvgAggregateInputType = {
    latMasuk?: true
    lngMasuk?: true
    latPulang?: true
    lngPulang?: true
  }

  export type LogPresensiSumAggregateInputType = {
    latMasuk?: true
    lngMasuk?: true
    latPulang?: true
    lngPulang?: true
  }

  export type LogPresensiMinAggregateInputType = {
    id?: true
    pegawaiId?: true
    waktuMasuk?: true
    latMasuk?: true
    lngMasuk?: true
    waktuPulang?: true
    latPulang?: true
    lngPulang?: true
    createdAt?: true
  }

  export type LogPresensiMaxAggregateInputType = {
    id?: true
    pegawaiId?: true
    waktuMasuk?: true
    latMasuk?: true
    lngMasuk?: true
    waktuPulang?: true
    latPulang?: true
    lngPulang?: true
    createdAt?: true
  }

  export type LogPresensiCountAggregateInputType = {
    id?: true
    pegawaiId?: true
    waktuMasuk?: true
    latMasuk?: true
    lngMasuk?: true
    waktuPulang?: true
    latPulang?: true
    lngPulang?: true
    createdAt?: true
    _all?: true
  }

  export type LogPresensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogPresensi to aggregate.
     */
    where?: LogPresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPresensis to fetch.
     */
    orderBy?: LogPresensiOrderByWithRelationInput | LogPresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogPresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPresensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPresensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogPresensis
    **/
    _count?: true | LogPresensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogPresensiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogPresensiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogPresensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogPresensiMaxAggregateInputType
  }

  export type GetLogPresensiAggregateType<T extends LogPresensiAggregateArgs> = {
        [P in keyof T & keyof AggregateLogPresensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogPresensi[P]>
      : GetScalarType<T[P], AggregateLogPresensi[P]>
  }




  export type LogPresensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogPresensiWhereInput
    orderBy?: LogPresensiOrderByWithAggregationInput | LogPresensiOrderByWithAggregationInput[]
    by: LogPresensiScalarFieldEnum[] | LogPresensiScalarFieldEnum
    having?: LogPresensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogPresensiCountAggregateInputType | true
    _avg?: LogPresensiAvgAggregateInputType
    _sum?: LogPresensiSumAggregateInputType
    _min?: LogPresensiMinAggregateInputType
    _max?: LogPresensiMaxAggregateInputType
  }

  export type LogPresensiGroupByOutputType = {
    id: string
    pegawaiId: string
    waktuMasuk: Date
    latMasuk: number
    lngMasuk: number
    waktuPulang: Date | null
    latPulang: number | null
    lngPulang: number | null
    createdAt: Date
    _count: LogPresensiCountAggregateOutputType | null
    _avg: LogPresensiAvgAggregateOutputType | null
    _sum: LogPresensiSumAggregateOutputType | null
    _min: LogPresensiMinAggregateOutputType | null
    _max: LogPresensiMaxAggregateOutputType | null
  }

  type GetLogPresensiGroupByPayload<T extends LogPresensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogPresensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogPresensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogPresensiGroupByOutputType[P]>
            : GetScalarType<T[P], LogPresensiGroupByOutputType[P]>
        }
      >
    >


  export type LogPresensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    waktuMasuk?: boolean
    latMasuk?: boolean
    lngMasuk?: boolean
    waktuPulang?: boolean
    latPulang?: boolean
    lngPulang?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logPresensi"]>

  export type LogPresensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    waktuMasuk?: boolean
    latMasuk?: boolean
    lngMasuk?: boolean
    waktuPulang?: boolean
    latPulang?: boolean
    lngPulang?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logPresensi"]>

  export type LogPresensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pegawaiId?: boolean
    waktuMasuk?: boolean
    latMasuk?: boolean
    lngMasuk?: boolean
    waktuPulang?: boolean
    latPulang?: boolean
    lngPulang?: boolean
    createdAt?: boolean
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logPresensi"]>

  export type LogPresensiSelectScalar = {
    id?: boolean
    pegawaiId?: boolean
    waktuMasuk?: boolean
    latMasuk?: boolean
    lngMasuk?: boolean
    waktuPulang?: boolean
    latPulang?: boolean
    lngPulang?: boolean
    createdAt?: boolean
  }

  export type LogPresensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pegawaiId" | "waktuMasuk" | "latMasuk" | "lngMasuk" | "waktuPulang" | "latPulang" | "lngPulang" | "createdAt", ExtArgs["result"]["logPresensi"]>
  export type LogPresensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }
  export type LogPresensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }
  export type LogPresensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pegawai?: boolean | PegawaiDefaultArgs<ExtArgs>
  }

  export type $LogPresensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogPresensi"
    objects: {
      pegawai: Prisma.$PegawaiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pegawaiId: string
      waktuMasuk: Date
      latMasuk: number
      lngMasuk: number
      waktuPulang: Date | null
      latPulang: number | null
      lngPulang: number | null
      createdAt: Date
    }, ExtArgs["result"]["logPresensi"]>
    composites: {}
  }

  type LogPresensiGetPayload<S extends boolean | null | undefined | LogPresensiDefaultArgs> = $Result.GetResult<Prisma.$LogPresensiPayload, S>

  type LogPresensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogPresensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogPresensiCountAggregateInputType | true
    }

  export interface LogPresensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogPresensi'], meta: { name: 'LogPresensi' } }
    /**
     * Find zero or one LogPresensi that matches the filter.
     * @param {LogPresensiFindUniqueArgs} args - Arguments to find a LogPresensi
     * @example
     * // Get one LogPresensi
     * const logPresensi = await prisma.logPresensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogPresensiFindUniqueArgs>(args: SelectSubset<T, LogPresensiFindUniqueArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogPresensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogPresensiFindUniqueOrThrowArgs} args - Arguments to find a LogPresensi
     * @example
     * // Get one LogPresensi
     * const logPresensi = await prisma.logPresensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogPresensiFindUniqueOrThrowArgs>(args: SelectSubset<T, LogPresensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogPresensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPresensiFindFirstArgs} args - Arguments to find a LogPresensi
     * @example
     * // Get one LogPresensi
     * const logPresensi = await prisma.logPresensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogPresensiFindFirstArgs>(args?: SelectSubset<T, LogPresensiFindFirstArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogPresensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPresensiFindFirstOrThrowArgs} args - Arguments to find a LogPresensi
     * @example
     * // Get one LogPresensi
     * const logPresensi = await prisma.logPresensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogPresensiFindFirstOrThrowArgs>(args?: SelectSubset<T, LogPresensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogPresensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPresensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogPresensis
     * const logPresensis = await prisma.logPresensi.findMany()
     * 
     * // Get first 10 LogPresensis
     * const logPresensis = await prisma.logPresensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logPresensiWithIdOnly = await prisma.logPresensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogPresensiFindManyArgs>(args?: SelectSubset<T, LogPresensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogPresensi.
     * @param {LogPresensiCreateArgs} args - Arguments to create a LogPresensi.
     * @example
     * // Create one LogPresensi
     * const LogPresensi = await prisma.logPresensi.create({
     *   data: {
     *     // ... data to create a LogPresensi
     *   }
     * })
     * 
     */
    create<T extends LogPresensiCreateArgs>(args: SelectSubset<T, LogPresensiCreateArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogPresensis.
     * @param {LogPresensiCreateManyArgs} args - Arguments to create many LogPresensis.
     * @example
     * // Create many LogPresensis
     * const logPresensi = await prisma.logPresensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogPresensiCreateManyArgs>(args?: SelectSubset<T, LogPresensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogPresensis and returns the data saved in the database.
     * @param {LogPresensiCreateManyAndReturnArgs} args - Arguments to create many LogPresensis.
     * @example
     * // Create many LogPresensis
     * const logPresensi = await prisma.logPresensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogPresensis and only return the `id`
     * const logPresensiWithIdOnly = await prisma.logPresensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogPresensiCreateManyAndReturnArgs>(args?: SelectSubset<T, LogPresensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogPresensi.
     * @param {LogPresensiDeleteArgs} args - Arguments to delete one LogPresensi.
     * @example
     * // Delete one LogPresensi
     * const LogPresensi = await prisma.logPresensi.delete({
     *   where: {
     *     // ... filter to delete one LogPresensi
     *   }
     * })
     * 
     */
    delete<T extends LogPresensiDeleteArgs>(args: SelectSubset<T, LogPresensiDeleteArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogPresensi.
     * @param {LogPresensiUpdateArgs} args - Arguments to update one LogPresensi.
     * @example
     * // Update one LogPresensi
     * const logPresensi = await prisma.logPresensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogPresensiUpdateArgs>(args: SelectSubset<T, LogPresensiUpdateArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogPresensis.
     * @param {LogPresensiDeleteManyArgs} args - Arguments to filter LogPresensis to delete.
     * @example
     * // Delete a few LogPresensis
     * const { count } = await prisma.logPresensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogPresensiDeleteManyArgs>(args?: SelectSubset<T, LogPresensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogPresensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPresensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogPresensis
     * const logPresensi = await prisma.logPresensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogPresensiUpdateManyArgs>(args: SelectSubset<T, LogPresensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogPresensis and returns the data updated in the database.
     * @param {LogPresensiUpdateManyAndReturnArgs} args - Arguments to update many LogPresensis.
     * @example
     * // Update many LogPresensis
     * const logPresensi = await prisma.logPresensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogPresensis and only return the `id`
     * const logPresensiWithIdOnly = await prisma.logPresensi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogPresensiUpdateManyAndReturnArgs>(args: SelectSubset<T, LogPresensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogPresensi.
     * @param {LogPresensiUpsertArgs} args - Arguments to update or create a LogPresensi.
     * @example
     * // Update or create a LogPresensi
     * const logPresensi = await prisma.logPresensi.upsert({
     *   create: {
     *     // ... data to create a LogPresensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogPresensi we want to update
     *   }
     * })
     */
    upsert<T extends LogPresensiUpsertArgs>(args: SelectSubset<T, LogPresensiUpsertArgs<ExtArgs>>): Prisma__LogPresensiClient<$Result.GetResult<Prisma.$LogPresensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogPresensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPresensiCountArgs} args - Arguments to filter LogPresensis to count.
     * @example
     * // Count the number of LogPresensis
     * const count = await prisma.logPresensi.count({
     *   where: {
     *     // ... the filter for the LogPresensis we want to count
     *   }
     * })
    **/
    count<T extends LogPresensiCountArgs>(
      args?: Subset<T, LogPresensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogPresensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogPresensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPresensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogPresensiAggregateArgs>(args: Subset<T, LogPresensiAggregateArgs>): Prisma.PrismaPromise<GetLogPresensiAggregateType<T>>

    /**
     * Group by LogPresensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogPresensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogPresensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogPresensiGroupByArgs['orderBy'] }
        : { orderBy?: LogPresensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogPresensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogPresensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogPresensi model
   */
  readonly fields: LogPresensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogPresensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogPresensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pegawai<T extends PegawaiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PegawaiDefaultArgs<ExtArgs>>): Prisma__PegawaiClient<$Result.GetResult<Prisma.$PegawaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogPresensi model
   */
  interface LogPresensiFieldRefs {
    readonly id: FieldRef<"LogPresensi", 'String'>
    readonly pegawaiId: FieldRef<"LogPresensi", 'String'>
    readonly waktuMasuk: FieldRef<"LogPresensi", 'DateTime'>
    readonly latMasuk: FieldRef<"LogPresensi", 'Float'>
    readonly lngMasuk: FieldRef<"LogPresensi", 'Float'>
    readonly waktuPulang: FieldRef<"LogPresensi", 'DateTime'>
    readonly latPulang: FieldRef<"LogPresensi", 'Float'>
    readonly lngPulang: FieldRef<"LogPresensi", 'Float'>
    readonly createdAt: FieldRef<"LogPresensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogPresensi findUnique
   */
  export type LogPresensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * Filter, which LogPresensi to fetch.
     */
    where: LogPresensiWhereUniqueInput
  }

  /**
   * LogPresensi findUniqueOrThrow
   */
  export type LogPresensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * Filter, which LogPresensi to fetch.
     */
    where: LogPresensiWhereUniqueInput
  }

  /**
   * LogPresensi findFirst
   */
  export type LogPresensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * Filter, which LogPresensi to fetch.
     */
    where?: LogPresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPresensis to fetch.
     */
    orderBy?: LogPresensiOrderByWithRelationInput | LogPresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogPresensis.
     */
    cursor?: LogPresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPresensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPresensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogPresensis.
     */
    distinct?: LogPresensiScalarFieldEnum | LogPresensiScalarFieldEnum[]
  }

  /**
   * LogPresensi findFirstOrThrow
   */
  export type LogPresensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * Filter, which LogPresensi to fetch.
     */
    where?: LogPresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPresensis to fetch.
     */
    orderBy?: LogPresensiOrderByWithRelationInput | LogPresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogPresensis.
     */
    cursor?: LogPresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPresensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPresensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogPresensis.
     */
    distinct?: LogPresensiScalarFieldEnum | LogPresensiScalarFieldEnum[]
  }

  /**
   * LogPresensi findMany
   */
  export type LogPresensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * Filter, which LogPresensis to fetch.
     */
    where?: LogPresensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogPresensis to fetch.
     */
    orderBy?: LogPresensiOrderByWithRelationInput | LogPresensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogPresensis.
     */
    cursor?: LogPresensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogPresensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogPresensis.
     */
    skip?: number
    distinct?: LogPresensiScalarFieldEnum | LogPresensiScalarFieldEnum[]
  }

  /**
   * LogPresensi create
   */
  export type LogPresensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * The data needed to create a LogPresensi.
     */
    data: XOR<LogPresensiCreateInput, LogPresensiUncheckedCreateInput>
  }

  /**
   * LogPresensi createMany
   */
  export type LogPresensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogPresensis.
     */
    data: LogPresensiCreateManyInput | LogPresensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogPresensi createManyAndReturn
   */
  export type LogPresensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * The data used to create many LogPresensis.
     */
    data: LogPresensiCreateManyInput | LogPresensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogPresensi update
   */
  export type LogPresensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * The data needed to update a LogPresensi.
     */
    data: XOR<LogPresensiUpdateInput, LogPresensiUncheckedUpdateInput>
    /**
     * Choose, which LogPresensi to update.
     */
    where: LogPresensiWhereUniqueInput
  }

  /**
   * LogPresensi updateMany
   */
  export type LogPresensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogPresensis.
     */
    data: XOR<LogPresensiUpdateManyMutationInput, LogPresensiUncheckedUpdateManyInput>
    /**
     * Filter which LogPresensis to update
     */
    where?: LogPresensiWhereInput
    /**
     * Limit how many LogPresensis to update.
     */
    limit?: number
  }

  /**
   * LogPresensi updateManyAndReturn
   */
  export type LogPresensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * The data used to update LogPresensis.
     */
    data: XOR<LogPresensiUpdateManyMutationInput, LogPresensiUncheckedUpdateManyInput>
    /**
     * Filter which LogPresensis to update
     */
    where?: LogPresensiWhereInput
    /**
     * Limit how many LogPresensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogPresensi upsert
   */
  export type LogPresensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * The filter to search for the LogPresensi to update in case it exists.
     */
    where: LogPresensiWhereUniqueInput
    /**
     * In case the LogPresensi found by the `where` argument doesn't exist, create a new LogPresensi with this data.
     */
    create: XOR<LogPresensiCreateInput, LogPresensiUncheckedCreateInput>
    /**
     * In case the LogPresensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogPresensiUpdateInput, LogPresensiUncheckedUpdateInput>
  }

  /**
   * LogPresensi delete
   */
  export type LogPresensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
    /**
     * Filter which LogPresensi to delete.
     */
    where: LogPresensiWhereUniqueInput
  }

  /**
   * LogPresensi deleteMany
   */
  export type LogPresensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogPresensis to delete
     */
    where?: LogPresensiWhereInput
    /**
     * Limit how many LogPresensis to delete.
     */
    limit?: number
  }

  /**
   * LogPresensi without action
   */
  export type LogPresensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogPresensi
     */
    select?: LogPresensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogPresensi
     */
    omit?: LogPresensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogPresensiInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    nama: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    nama: string
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly nama: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PegawaiScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nip: 'nip',
    userId: 'userId',
    departemenId: 'departemenId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PegawaiScalarFieldEnum = (typeof PegawaiScalarFieldEnum)[keyof typeof PegawaiScalarFieldEnum]


  export const DepartemenScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartemenScalarFieldEnum = (typeof DepartemenScalarFieldEnum)[keyof typeof DepartemenScalarFieldEnum]


  export const LogPresensiScalarFieldEnum: {
    id: 'id',
    pegawaiId: 'pegawaiId',
    waktuMasuk: 'waktuMasuk',
    latMasuk: 'latMasuk',
    lngMasuk: 'lngMasuk',
    waktuPulang: 'waktuPulang',
    latPulang: 'latPulang',
    lngPulang: 'lngPulang',
    createdAt: 'createdAt'
  };

  export type LogPresensiScalarFieldEnum = (typeof LogPresensiScalarFieldEnum)[keyof typeof LogPresensiScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    pegawai?: XOR<PegawaiNullableScalarRelationFilter, PegawaiWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    pegawai?: PegawaiOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    pegawai?: XOR<PegawaiNullableScalarRelationFilter, PegawaiWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    roleId?: UuidWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PegawaiWhereInput = {
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    id?: UuidFilter<"Pegawai"> | string
    nama?: StringFilter<"Pegawai"> | string
    nip?: StringFilter<"Pegawai"> | string
    userId?: UuidNullableFilter<"Pegawai"> | string | null
    departemenId?: UuidNullableFilter<"Pegawai"> | string | null
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
    updatedAt?: DateTimeFilter<"Pegawai"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    departemen?: XOR<DepartemenNullableScalarRelationFilter, DepartemenWhereInput> | null
    logPresensi?: LogPresensiListRelationFilter
  }

  export type PegawaiOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    userId?: SortOrderInput | SortOrder
    departemenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    departemen?: DepartemenOrderByWithRelationInput
    logPresensi?: LogPresensiOrderByRelationAggregateInput
  }

  export type PegawaiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nip?: string
    userId?: string
    AND?: PegawaiWhereInput | PegawaiWhereInput[]
    OR?: PegawaiWhereInput[]
    NOT?: PegawaiWhereInput | PegawaiWhereInput[]
    nama?: StringFilter<"Pegawai"> | string
    departemenId?: UuidNullableFilter<"Pegawai"> | string | null
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
    updatedAt?: DateTimeFilter<"Pegawai"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    departemen?: XOR<DepartemenNullableScalarRelationFilter, DepartemenWhereInput> | null
    logPresensi?: LogPresensiListRelationFilter
  }, "id" | "nip" | "userId">

  export type PegawaiOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    userId?: SortOrderInput | SortOrder
    departemenId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PegawaiCountOrderByAggregateInput
    _max?: PegawaiMaxOrderByAggregateInput
    _min?: PegawaiMinOrderByAggregateInput
  }

  export type PegawaiScalarWhereWithAggregatesInput = {
    AND?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    OR?: PegawaiScalarWhereWithAggregatesInput[]
    NOT?: PegawaiScalarWhereWithAggregatesInput | PegawaiScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Pegawai"> | string
    nama?: StringWithAggregatesFilter<"Pegawai"> | string
    nip?: StringWithAggregatesFilter<"Pegawai"> | string
    userId?: UuidNullableWithAggregatesFilter<"Pegawai"> | string | null
    departemenId?: UuidNullableWithAggregatesFilter<"Pegawai"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pegawai"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pegawai"> | Date | string
  }

  export type DepartemenWhereInput = {
    AND?: DepartemenWhereInput | DepartemenWhereInput[]
    OR?: DepartemenWhereInput[]
    NOT?: DepartemenWhereInput | DepartemenWhereInput[]
    id?: UuidFilter<"Departemen"> | string
    nama?: StringFilter<"Departemen"> | string
    createdAt?: DateTimeFilter<"Departemen"> | Date | string
    updatedAt?: DateTimeFilter<"Departemen"> | Date | string
    pegawai?: PegawaiListRelationFilter
  }

  export type DepartemenOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pegawai?: PegawaiOrderByRelationAggregateInput
  }

  export type DepartemenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartemenWhereInput | DepartemenWhereInput[]
    OR?: DepartemenWhereInput[]
    NOT?: DepartemenWhereInput | DepartemenWhereInput[]
    nama?: StringFilter<"Departemen"> | string
    createdAt?: DateTimeFilter<"Departemen"> | Date | string
    updatedAt?: DateTimeFilter<"Departemen"> | Date | string
    pegawai?: PegawaiListRelationFilter
  }, "id">

  export type DepartemenOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartemenCountOrderByAggregateInput
    _max?: DepartemenMaxOrderByAggregateInput
    _min?: DepartemenMinOrderByAggregateInput
  }

  export type DepartemenScalarWhereWithAggregatesInput = {
    AND?: DepartemenScalarWhereWithAggregatesInput | DepartemenScalarWhereWithAggregatesInput[]
    OR?: DepartemenScalarWhereWithAggregatesInput[]
    NOT?: DepartemenScalarWhereWithAggregatesInput | DepartemenScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Departemen"> | string
    nama?: StringWithAggregatesFilter<"Departemen"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Departemen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Departemen"> | Date | string
  }

  export type LogPresensiWhereInput = {
    AND?: LogPresensiWhereInput | LogPresensiWhereInput[]
    OR?: LogPresensiWhereInput[]
    NOT?: LogPresensiWhereInput | LogPresensiWhereInput[]
    id?: UuidFilter<"LogPresensi"> | string
    pegawaiId?: UuidFilter<"LogPresensi"> | string
    waktuMasuk?: DateTimeFilter<"LogPresensi"> | Date | string
    latMasuk?: FloatFilter<"LogPresensi"> | number
    lngMasuk?: FloatFilter<"LogPresensi"> | number
    waktuPulang?: DateTimeNullableFilter<"LogPresensi"> | Date | string | null
    latPulang?: FloatNullableFilter<"LogPresensi"> | number | null
    lngPulang?: FloatNullableFilter<"LogPresensi"> | number | null
    createdAt?: DateTimeFilter<"LogPresensi"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, PegawaiWhereInput>
  }

  export type LogPresensiOrderByWithRelationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    waktuMasuk?: SortOrder
    latMasuk?: SortOrder
    lngMasuk?: SortOrder
    waktuPulang?: SortOrderInput | SortOrder
    latPulang?: SortOrderInput | SortOrder
    lngPulang?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pegawai?: PegawaiOrderByWithRelationInput
  }

  export type LogPresensiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogPresensiWhereInput | LogPresensiWhereInput[]
    OR?: LogPresensiWhereInput[]
    NOT?: LogPresensiWhereInput | LogPresensiWhereInput[]
    pegawaiId?: UuidFilter<"LogPresensi"> | string
    waktuMasuk?: DateTimeFilter<"LogPresensi"> | Date | string
    latMasuk?: FloatFilter<"LogPresensi"> | number
    lngMasuk?: FloatFilter<"LogPresensi"> | number
    waktuPulang?: DateTimeNullableFilter<"LogPresensi"> | Date | string | null
    latPulang?: FloatNullableFilter<"LogPresensi"> | number | null
    lngPulang?: FloatNullableFilter<"LogPresensi"> | number | null
    createdAt?: DateTimeFilter<"LogPresensi"> | Date | string
    pegawai?: XOR<PegawaiScalarRelationFilter, PegawaiWhereInput>
  }, "id">

  export type LogPresensiOrderByWithAggregationInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    waktuMasuk?: SortOrder
    latMasuk?: SortOrder
    lngMasuk?: SortOrder
    waktuPulang?: SortOrderInput | SortOrder
    latPulang?: SortOrderInput | SortOrder
    lngPulang?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LogPresensiCountOrderByAggregateInput
    _avg?: LogPresensiAvgOrderByAggregateInput
    _max?: LogPresensiMaxOrderByAggregateInput
    _min?: LogPresensiMinOrderByAggregateInput
    _sum?: LogPresensiSumOrderByAggregateInput
  }

  export type LogPresensiScalarWhereWithAggregatesInput = {
    AND?: LogPresensiScalarWhereWithAggregatesInput | LogPresensiScalarWhereWithAggregatesInput[]
    OR?: LogPresensiScalarWhereWithAggregatesInput[]
    NOT?: LogPresensiScalarWhereWithAggregatesInput | LogPresensiScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"LogPresensi"> | string
    pegawaiId?: UuidWithAggregatesFilter<"LogPresensi"> | string
    waktuMasuk?: DateTimeWithAggregatesFilter<"LogPresensi"> | Date | string
    latMasuk?: FloatWithAggregatesFilter<"LogPresensi"> | number
    lngMasuk?: FloatWithAggregatesFilter<"LogPresensi"> | number
    waktuPulang?: DateTimeNullableWithAggregatesFilter<"LogPresensi"> | Date | string | null
    latPulang?: FloatNullableWithAggregatesFilter<"LogPresensi"> | number | null
    lngPulang?: FloatNullableWithAggregatesFilter<"LogPresensi"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"LogPresensi"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: UuidFilter<"Role"> | string
    nama?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "nama">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Role"> | string
    nama?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    pegawai?: PegawaiCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: PegawaiUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    pegawai?: PegawaiUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiCreateInput = {
    id?: string
    nama: string
    nip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPegawaiInput
    departemen?: DepartemenCreateNestedOneWithoutPegawaiInput
    logPresensi?: LogPresensiCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateInput = {
    id?: string
    nama: string
    nip: string
    userId?: string | null
    departemenId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logPresensi?: LogPresensiUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPegawaiNestedInput
    departemen?: DepartemenUpdateOneWithoutPegawaiNestedInput
    logPresensi?: LogPresensiUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    departemenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logPresensi?: LogPresensiUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiCreateManyInput = {
    id?: string
    nama: string
    nip: string
    userId?: string | null
    departemenId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PegawaiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    departemenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenCreateInput = {
    id?: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: PegawaiCreateNestedManyWithoutDepartemenInput
  }

  export type DepartemenUncheckedCreateInput = {
    id?: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: PegawaiUncheckedCreateNestedManyWithoutDepartemenInput
  }

  export type DepartemenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateManyWithoutDepartemenNestedInput
  }

  export type DepartemenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUncheckedUpdateManyWithoutDepartemenNestedInput
  }

  export type DepartemenCreateManyInput = {
    id?: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartemenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPresensiCreateInput = {
    id?: string
    waktuMasuk: Date | string
    latMasuk: number
    lngMasuk: number
    waktuPulang?: Date | string | null
    latPulang?: number | null
    lngPulang?: number | null
    createdAt?: Date | string
    pegawai: PegawaiCreateNestedOneWithoutLogPresensiInput
  }

  export type LogPresensiUncheckedCreateInput = {
    id?: string
    pegawaiId: string
    waktuMasuk: Date | string
    latMasuk: number
    lngMasuk: number
    waktuPulang?: Date | string | null
    latPulang?: number | null
    lngPulang?: number | null
    createdAt?: Date | string
  }

  export type LogPresensiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktuMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    latMasuk?: FloatFieldUpdateOperationsInput | number
    lngMasuk?: FloatFieldUpdateOperationsInput | number
    waktuPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    lngPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneRequiredWithoutLogPresensiNestedInput
  }

  export type LogPresensiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    waktuMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    latMasuk?: FloatFieldUpdateOperationsInput | number
    lngMasuk?: FloatFieldUpdateOperationsInput | number
    waktuPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    lngPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPresensiCreateManyInput = {
    id?: string
    pegawaiId: string
    waktuMasuk: Date | string
    latMasuk: number
    lngMasuk: number
    waktuPulang?: Date | string | null
    latPulang?: number | null
    lngPulang?: number | null
    createdAt?: Date | string
  }

  export type LogPresensiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktuMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    latMasuk?: FloatFieldUpdateOperationsInput | number
    lngMasuk?: FloatFieldUpdateOperationsInput | number
    waktuPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    lngPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPresensiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pegawaiId?: StringFieldUpdateOperationsInput | string
    waktuMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    latMasuk?: FloatFieldUpdateOperationsInput | number
    lngMasuk?: FloatFieldUpdateOperationsInput | number
    waktuPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    lngPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    nama: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    nama: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    nama: string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type PegawaiNullableScalarRelationFilter = {
    is?: PegawaiWhereInput | null
    isNot?: PegawaiWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DepartemenNullableScalarRelationFilter = {
    is?: DepartemenWhereInput | null
    isNot?: DepartemenWhereInput | null
  }

  export type LogPresensiListRelationFilter = {
    every?: LogPresensiWhereInput
    some?: LogPresensiWhereInput
    none?: LogPresensiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LogPresensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PegawaiCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    userId?: SortOrder
    departemenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PegawaiMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    userId?: SortOrder
    departemenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PegawaiMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nip?: SortOrder
    userId?: SortOrder
    departemenId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type PegawaiListRelationFilter = {
    every?: PegawaiWhereInput
    some?: PegawaiWhereInput
    none?: PegawaiWhereInput
  }

  export type PegawaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartemenCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartemenMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartemenMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PegawaiScalarRelationFilter = {
    is?: PegawaiWhereInput
    isNot?: PegawaiWhereInput
  }

  export type LogPresensiCountOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    waktuMasuk?: SortOrder
    latMasuk?: SortOrder
    lngMasuk?: SortOrder
    waktuPulang?: SortOrder
    latPulang?: SortOrder
    lngPulang?: SortOrder
    createdAt?: SortOrder
  }

  export type LogPresensiAvgOrderByAggregateInput = {
    latMasuk?: SortOrder
    lngMasuk?: SortOrder
    latPulang?: SortOrder
    lngPulang?: SortOrder
  }

  export type LogPresensiMaxOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    waktuMasuk?: SortOrder
    latMasuk?: SortOrder
    lngMasuk?: SortOrder
    waktuPulang?: SortOrder
    latPulang?: SortOrder
    lngPulang?: SortOrder
    createdAt?: SortOrder
  }

  export type LogPresensiMinOrderByAggregateInput = {
    id?: SortOrder
    pegawaiId?: SortOrder
    waktuMasuk?: SortOrder
    latMasuk?: SortOrder
    lngMasuk?: SortOrder
    waktuPulang?: SortOrder
    latPulang?: SortOrder
    lngPulang?: SortOrder
    createdAt?: SortOrder
  }

  export type LogPresensiSumOrderByAggregateInput = {
    latMasuk?: SortOrder
    lngMasuk?: SortOrder
    latPulang?: SortOrder
    lngPulang?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type PegawaiCreateNestedOneWithoutUserInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    connect?: PegawaiWhereUniqueInput
  }

  export type PegawaiUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    connect?: PegawaiWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type PegawaiUpdateOneWithoutUserNestedInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    upsert?: PegawaiUpsertWithoutUserInput
    disconnect?: PegawaiWhereInput | boolean
    delete?: PegawaiWhereInput | boolean
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutUserInput, PegawaiUpdateWithoutUserInput>, PegawaiUncheckedUpdateWithoutUserInput>
  }

  export type PegawaiUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutUserInput
    upsert?: PegawaiUpsertWithoutUserInput
    disconnect?: PegawaiWhereInput | boolean
    delete?: PegawaiWhereInput | boolean
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutUserInput, PegawaiUpdateWithoutUserInput>, PegawaiUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPegawaiInput
    connect?: UserWhereUniqueInput
  }

  export type DepartemenCreateNestedOneWithoutPegawaiInput = {
    create?: XOR<DepartemenCreateWithoutPegawaiInput, DepartemenUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: DepartemenCreateOrConnectWithoutPegawaiInput
    connect?: DepartemenWhereUniqueInput
  }

  export type LogPresensiCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<LogPresensiCreateWithoutPegawaiInput, LogPresensiUncheckedCreateWithoutPegawaiInput> | LogPresensiCreateWithoutPegawaiInput[] | LogPresensiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LogPresensiCreateOrConnectWithoutPegawaiInput | LogPresensiCreateOrConnectWithoutPegawaiInput[]
    createMany?: LogPresensiCreateManyPegawaiInputEnvelope
    connect?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
  }

  export type LogPresensiUncheckedCreateNestedManyWithoutPegawaiInput = {
    create?: XOR<LogPresensiCreateWithoutPegawaiInput, LogPresensiUncheckedCreateWithoutPegawaiInput> | LogPresensiCreateWithoutPegawaiInput[] | LogPresensiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LogPresensiCreateOrConnectWithoutPegawaiInput | LogPresensiCreateOrConnectWithoutPegawaiInput[]
    createMany?: LogPresensiCreateManyPegawaiInputEnvelope
    connect?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutPegawaiNestedInput = {
    create?: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: UserCreateOrConnectWithoutPegawaiInput
    upsert?: UserUpsertWithoutPegawaiInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPegawaiInput, UserUpdateWithoutPegawaiInput>, UserUncheckedUpdateWithoutPegawaiInput>
  }

  export type DepartemenUpdateOneWithoutPegawaiNestedInput = {
    create?: XOR<DepartemenCreateWithoutPegawaiInput, DepartemenUncheckedCreateWithoutPegawaiInput>
    connectOrCreate?: DepartemenCreateOrConnectWithoutPegawaiInput
    upsert?: DepartemenUpsertWithoutPegawaiInput
    disconnect?: DepartemenWhereInput | boolean
    delete?: DepartemenWhereInput | boolean
    connect?: DepartemenWhereUniqueInput
    update?: XOR<XOR<DepartemenUpdateToOneWithWhereWithoutPegawaiInput, DepartemenUpdateWithoutPegawaiInput>, DepartemenUncheckedUpdateWithoutPegawaiInput>
  }

  export type LogPresensiUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<LogPresensiCreateWithoutPegawaiInput, LogPresensiUncheckedCreateWithoutPegawaiInput> | LogPresensiCreateWithoutPegawaiInput[] | LogPresensiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LogPresensiCreateOrConnectWithoutPegawaiInput | LogPresensiCreateOrConnectWithoutPegawaiInput[]
    upsert?: LogPresensiUpsertWithWhereUniqueWithoutPegawaiInput | LogPresensiUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: LogPresensiCreateManyPegawaiInputEnvelope
    set?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    disconnect?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    delete?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    connect?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    update?: LogPresensiUpdateWithWhereUniqueWithoutPegawaiInput | LogPresensiUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: LogPresensiUpdateManyWithWhereWithoutPegawaiInput | LogPresensiUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: LogPresensiScalarWhereInput | LogPresensiScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LogPresensiUncheckedUpdateManyWithoutPegawaiNestedInput = {
    create?: XOR<LogPresensiCreateWithoutPegawaiInput, LogPresensiUncheckedCreateWithoutPegawaiInput> | LogPresensiCreateWithoutPegawaiInput[] | LogPresensiUncheckedCreateWithoutPegawaiInput[]
    connectOrCreate?: LogPresensiCreateOrConnectWithoutPegawaiInput | LogPresensiCreateOrConnectWithoutPegawaiInput[]
    upsert?: LogPresensiUpsertWithWhereUniqueWithoutPegawaiInput | LogPresensiUpsertWithWhereUniqueWithoutPegawaiInput[]
    createMany?: LogPresensiCreateManyPegawaiInputEnvelope
    set?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    disconnect?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    delete?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    connect?: LogPresensiWhereUniqueInput | LogPresensiWhereUniqueInput[]
    update?: LogPresensiUpdateWithWhereUniqueWithoutPegawaiInput | LogPresensiUpdateWithWhereUniqueWithoutPegawaiInput[]
    updateMany?: LogPresensiUpdateManyWithWhereWithoutPegawaiInput | LogPresensiUpdateManyWithWhereWithoutPegawaiInput[]
    deleteMany?: LogPresensiScalarWhereInput | LogPresensiScalarWhereInput[]
  }

  export type PegawaiCreateNestedManyWithoutDepartemenInput = {
    create?: XOR<PegawaiCreateWithoutDepartemenInput, PegawaiUncheckedCreateWithoutDepartemenInput> | PegawaiCreateWithoutDepartemenInput[] | PegawaiUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutDepartemenInput | PegawaiCreateOrConnectWithoutDepartemenInput[]
    createMany?: PegawaiCreateManyDepartemenInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type PegawaiUncheckedCreateNestedManyWithoutDepartemenInput = {
    create?: XOR<PegawaiCreateWithoutDepartemenInput, PegawaiUncheckedCreateWithoutDepartemenInput> | PegawaiCreateWithoutDepartemenInput[] | PegawaiUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutDepartemenInput | PegawaiCreateOrConnectWithoutDepartemenInput[]
    createMany?: PegawaiCreateManyDepartemenInputEnvelope
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
  }

  export type PegawaiUpdateManyWithoutDepartemenNestedInput = {
    create?: XOR<PegawaiCreateWithoutDepartemenInput, PegawaiUncheckedCreateWithoutDepartemenInput> | PegawaiCreateWithoutDepartemenInput[] | PegawaiUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutDepartemenInput | PegawaiCreateOrConnectWithoutDepartemenInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutDepartemenInput | PegawaiUpsertWithWhereUniqueWithoutDepartemenInput[]
    createMany?: PegawaiCreateManyDepartemenInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutDepartemenInput | PegawaiUpdateWithWhereUniqueWithoutDepartemenInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutDepartemenInput | PegawaiUpdateManyWithWhereWithoutDepartemenInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type PegawaiUncheckedUpdateManyWithoutDepartemenNestedInput = {
    create?: XOR<PegawaiCreateWithoutDepartemenInput, PegawaiUncheckedCreateWithoutDepartemenInput> | PegawaiCreateWithoutDepartemenInput[] | PegawaiUncheckedCreateWithoutDepartemenInput[]
    connectOrCreate?: PegawaiCreateOrConnectWithoutDepartemenInput | PegawaiCreateOrConnectWithoutDepartemenInput[]
    upsert?: PegawaiUpsertWithWhereUniqueWithoutDepartemenInput | PegawaiUpsertWithWhereUniqueWithoutDepartemenInput[]
    createMany?: PegawaiCreateManyDepartemenInputEnvelope
    set?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    disconnect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    delete?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    connect?: PegawaiWhereUniqueInput | PegawaiWhereUniqueInput[]
    update?: PegawaiUpdateWithWhereUniqueWithoutDepartemenInput | PegawaiUpdateWithWhereUniqueWithoutDepartemenInput[]
    updateMany?: PegawaiUpdateManyWithWhereWithoutDepartemenInput | PegawaiUpdateManyWithWhereWithoutDepartemenInput[]
    deleteMany?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
  }

  export type PegawaiCreateNestedOneWithoutLogPresensiInput = {
    create?: XOR<PegawaiCreateWithoutLogPresensiInput, PegawaiUncheckedCreateWithoutLogPresensiInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutLogPresensiInput
    connect?: PegawaiWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PegawaiUpdateOneRequiredWithoutLogPresensiNestedInput = {
    create?: XOR<PegawaiCreateWithoutLogPresensiInput, PegawaiUncheckedCreateWithoutLogPresensiInput>
    connectOrCreate?: PegawaiCreateOrConnectWithoutLogPresensiInput
    upsert?: PegawaiUpsertWithoutLogPresensiInput
    connect?: PegawaiWhereUniqueInput
    update?: XOR<XOR<PegawaiUpdateToOneWithWhereWithoutLogPresensiInput, PegawaiUpdateWithoutLogPresensiInput>, PegawaiUncheckedUpdateWithoutLogPresensiInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    nama: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    nama: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type PegawaiCreateWithoutUserInput = {
    id?: string
    nama: string
    nip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    departemen?: DepartemenCreateNestedOneWithoutPegawaiInput
    logPresensi?: LogPresensiCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutUserInput = {
    id?: string
    nama: string
    nip: string
    departemenId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logPresensi?: LogPresensiUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutUserInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type PegawaiUpsertWithoutUserInput = {
    update: XOR<PegawaiUpdateWithoutUserInput, PegawaiUncheckedUpdateWithoutUserInput>
    create: XOR<PegawaiCreateWithoutUserInput, PegawaiUncheckedCreateWithoutUserInput>
    where?: PegawaiWhereInput
  }

  export type PegawaiUpdateToOneWithWhereWithoutUserInput = {
    where?: PegawaiWhereInput
    data: XOR<PegawaiUpdateWithoutUserInput, PegawaiUncheckedUpdateWithoutUserInput>
  }

  export type PegawaiUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departemen?: DepartemenUpdateOneWithoutPegawaiNestedInput
    logPresensi?: LogPresensiUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    departemenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logPresensi?: LogPresensiUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type UserCreateWithoutPegawaiInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPegawaiInput = {
    id?: string
    email: string
    password: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPegawaiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
  }

  export type DepartemenCreateWithoutPegawaiInput = {
    id?: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartemenUncheckedCreateWithoutPegawaiInput = {
    id?: string
    nama: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartemenCreateOrConnectWithoutPegawaiInput = {
    where: DepartemenWhereUniqueInput
    create: XOR<DepartemenCreateWithoutPegawaiInput, DepartemenUncheckedCreateWithoutPegawaiInput>
  }

  export type LogPresensiCreateWithoutPegawaiInput = {
    id?: string
    waktuMasuk: Date | string
    latMasuk: number
    lngMasuk: number
    waktuPulang?: Date | string | null
    latPulang?: number | null
    lngPulang?: number | null
    createdAt?: Date | string
  }

  export type LogPresensiUncheckedCreateWithoutPegawaiInput = {
    id?: string
    waktuMasuk: Date | string
    latMasuk: number
    lngMasuk: number
    waktuPulang?: Date | string | null
    latPulang?: number | null
    lngPulang?: number | null
    createdAt?: Date | string
  }

  export type LogPresensiCreateOrConnectWithoutPegawaiInput = {
    where: LogPresensiWhereUniqueInput
    create: XOR<LogPresensiCreateWithoutPegawaiInput, LogPresensiUncheckedCreateWithoutPegawaiInput>
  }

  export type LogPresensiCreateManyPegawaiInputEnvelope = {
    data: LogPresensiCreateManyPegawaiInput | LogPresensiCreateManyPegawaiInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPegawaiInput = {
    update: XOR<UserUpdateWithoutPegawaiInput, UserUncheckedUpdateWithoutPegawaiInput>
    create: XOR<UserCreateWithoutPegawaiInput, UserUncheckedCreateWithoutPegawaiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPegawaiInput, UserUncheckedUpdateWithoutPegawaiInput>
  }

  export type UserUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenUpsertWithoutPegawaiInput = {
    update: XOR<DepartemenUpdateWithoutPegawaiInput, DepartemenUncheckedUpdateWithoutPegawaiInput>
    create: XOR<DepartemenCreateWithoutPegawaiInput, DepartemenUncheckedCreateWithoutPegawaiInput>
    where?: DepartemenWhereInput
  }

  export type DepartemenUpdateToOneWithWhereWithoutPegawaiInput = {
    where?: DepartemenWhereInput
    data: XOR<DepartemenUpdateWithoutPegawaiInput, DepartemenUncheckedUpdateWithoutPegawaiInput>
  }

  export type DepartemenUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartemenUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPresensiUpsertWithWhereUniqueWithoutPegawaiInput = {
    where: LogPresensiWhereUniqueInput
    update: XOR<LogPresensiUpdateWithoutPegawaiInput, LogPresensiUncheckedUpdateWithoutPegawaiInput>
    create: XOR<LogPresensiCreateWithoutPegawaiInput, LogPresensiUncheckedCreateWithoutPegawaiInput>
  }

  export type LogPresensiUpdateWithWhereUniqueWithoutPegawaiInput = {
    where: LogPresensiWhereUniqueInput
    data: XOR<LogPresensiUpdateWithoutPegawaiInput, LogPresensiUncheckedUpdateWithoutPegawaiInput>
  }

  export type LogPresensiUpdateManyWithWhereWithoutPegawaiInput = {
    where: LogPresensiScalarWhereInput
    data: XOR<LogPresensiUpdateManyMutationInput, LogPresensiUncheckedUpdateManyWithoutPegawaiInput>
  }

  export type LogPresensiScalarWhereInput = {
    AND?: LogPresensiScalarWhereInput | LogPresensiScalarWhereInput[]
    OR?: LogPresensiScalarWhereInput[]
    NOT?: LogPresensiScalarWhereInput | LogPresensiScalarWhereInput[]
    id?: UuidFilter<"LogPresensi"> | string
    pegawaiId?: UuidFilter<"LogPresensi"> | string
    waktuMasuk?: DateTimeFilter<"LogPresensi"> | Date | string
    latMasuk?: FloatFilter<"LogPresensi"> | number
    lngMasuk?: FloatFilter<"LogPresensi"> | number
    waktuPulang?: DateTimeNullableFilter<"LogPresensi"> | Date | string | null
    latPulang?: FloatNullableFilter<"LogPresensi"> | number | null
    lngPulang?: FloatNullableFilter<"LogPresensi"> | number | null
    createdAt?: DateTimeFilter<"LogPresensi"> | Date | string
  }

  export type PegawaiCreateWithoutDepartemenInput = {
    id?: string
    nama: string
    nip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPegawaiInput
    logPresensi?: LogPresensiCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutDepartemenInput = {
    id?: string
    nama: string
    nip: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    logPresensi?: LogPresensiUncheckedCreateNestedManyWithoutPegawaiInput
  }

  export type PegawaiCreateOrConnectWithoutDepartemenInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutDepartemenInput, PegawaiUncheckedCreateWithoutDepartemenInput>
  }

  export type PegawaiCreateManyDepartemenInputEnvelope = {
    data: PegawaiCreateManyDepartemenInput | PegawaiCreateManyDepartemenInput[]
    skipDuplicates?: boolean
  }

  export type PegawaiUpsertWithWhereUniqueWithoutDepartemenInput = {
    where: PegawaiWhereUniqueInput
    update: XOR<PegawaiUpdateWithoutDepartemenInput, PegawaiUncheckedUpdateWithoutDepartemenInput>
    create: XOR<PegawaiCreateWithoutDepartemenInput, PegawaiUncheckedCreateWithoutDepartemenInput>
  }

  export type PegawaiUpdateWithWhereUniqueWithoutDepartemenInput = {
    where: PegawaiWhereUniqueInput
    data: XOR<PegawaiUpdateWithoutDepartemenInput, PegawaiUncheckedUpdateWithoutDepartemenInput>
  }

  export type PegawaiUpdateManyWithWhereWithoutDepartemenInput = {
    where: PegawaiScalarWhereInput
    data: XOR<PegawaiUpdateManyMutationInput, PegawaiUncheckedUpdateManyWithoutDepartemenInput>
  }

  export type PegawaiScalarWhereInput = {
    AND?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
    OR?: PegawaiScalarWhereInput[]
    NOT?: PegawaiScalarWhereInput | PegawaiScalarWhereInput[]
    id?: UuidFilter<"Pegawai"> | string
    nama?: StringFilter<"Pegawai"> | string
    nip?: StringFilter<"Pegawai"> | string
    userId?: UuidNullableFilter<"Pegawai"> | string | null
    departemenId?: UuidNullableFilter<"Pegawai"> | string | null
    createdAt?: DateTimeFilter<"Pegawai"> | Date | string
    updatedAt?: DateTimeFilter<"Pegawai"> | Date | string
  }

  export type PegawaiCreateWithoutLogPresensiInput = {
    id?: string
    nama: string
    nip: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPegawaiInput
    departemen?: DepartemenCreateNestedOneWithoutPegawaiInput
  }

  export type PegawaiUncheckedCreateWithoutLogPresensiInput = {
    id?: string
    nama: string
    nip: string
    userId?: string | null
    departemenId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PegawaiCreateOrConnectWithoutLogPresensiInput = {
    where: PegawaiWhereUniqueInput
    create: XOR<PegawaiCreateWithoutLogPresensiInput, PegawaiUncheckedCreateWithoutLogPresensiInput>
  }

  export type PegawaiUpsertWithoutLogPresensiInput = {
    update: XOR<PegawaiUpdateWithoutLogPresensiInput, PegawaiUncheckedUpdateWithoutLogPresensiInput>
    create: XOR<PegawaiCreateWithoutLogPresensiInput, PegawaiUncheckedCreateWithoutLogPresensiInput>
    where?: PegawaiWhereInput
  }

  export type PegawaiUpdateToOneWithWhereWithoutLogPresensiInput = {
    where?: PegawaiWhereInput
    data: XOR<PegawaiUpdateWithoutLogPresensiInput, PegawaiUncheckedUpdateWithoutLogPresensiInput>
  }

  export type PegawaiUpdateWithoutLogPresensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPegawaiNestedInput
    departemen?: DepartemenUpdateOneWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutLogPresensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    departemenId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: PegawaiCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pegawai?: PegawaiUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    roleId?: UuidFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type LogPresensiCreateManyPegawaiInput = {
    id?: string
    waktuMasuk: Date | string
    latMasuk: number
    lngMasuk: number
    waktuPulang?: Date | string | null
    latPulang?: number | null
    lngPulang?: number | null
    createdAt?: Date | string
  }

  export type LogPresensiUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktuMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    latMasuk?: FloatFieldUpdateOperationsInput | number
    lngMasuk?: FloatFieldUpdateOperationsInput | number
    waktuPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    lngPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPresensiUncheckedUpdateWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktuMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    latMasuk?: FloatFieldUpdateOperationsInput | number
    lngMasuk?: FloatFieldUpdateOperationsInput | number
    waktuPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    lngPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogPresensiUncheckedUpdateManyWithoutPegawaiInput = {
    id?: StringFieldUpdateOperationsInput | string
    waktuMasuk?: DateTimeFieldUpdateOperationsInput | Date | string
    latMasuk?: FloatFieldUpdateOperationsInput | number
    lngMasuk?: FloatFieldUpdateOperationsInput | number
    waktuPulang?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    latPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    lngPulang?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PegawaiCreateManyDepartemenInput = {
    id?: string
    nama: string
    nip: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PegawaiUpdateWithoutDepartemenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPegawaiNestedInput
    logPresensi?: LogPresensiUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateWithoutDepartemenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logPresensi?: LogPresensiUncheckedUpdateManyWithoutPegawaiNestedInput
  }

  export type PegawaiUncheckedUpdateManyWithoutDepartemenInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nip?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pegawai?: PegawaiUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}