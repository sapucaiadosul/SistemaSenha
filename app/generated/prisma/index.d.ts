
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
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
 * Model TicketType
 * 
 */
export type TicketType = $Result.DefaultSelection<Prisma.$TicketTypePayload>
/**
 * Model DailyCounter
 * 
 */
export type DailyCounter = $Result.DefaultSelection<Prisma.$DailyCounterPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Counter
 * 
 */
export type Counter = $Result.DefaultSelection<Prisma.$CounterPayload>
/**
 * Model AdCampaign
 * 
 */
export type AdCampaign = $Result.DefaultSelection<Prisma.$AdCampaignPayload>
/**
 * Model AdMedia
 * 
 */
export type AdMedia = $Result.DefaultSelection<Prisma.$AdMediaPayload>
/**
 * Model AdPlayLog
 * 
 */
export type AdPlayLog = $Result.DefaultSelection<Prisma.$AdPlayLogPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Config
 * 
 */
export type Config = $Result.DefaultSelection<Prisma.$ConfigPayload>

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
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.ticketType`: Exposes CRUD operations for the **TicketType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTypes
    * const ticketTypes = await prisma.ticketType.findMany()
    * ```
    */
  get ticketType(): Prisma.TicketTypeDelegate<ExtArgs>;

  /**
   * `prisma.dailyCounter`: Exposes CRUD operations for the **DailyCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyCounters
    * const dailyCounters = await prisma.dailyCounter.findMany()
    * ```
    */
  get dailyCounter(): Prisma.DailyCounterDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.counter`: Exposes CRUD operations for the **Counter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Counters
    * const counters = await prisma.counter.findMany()
    * ```
    */
  get counter(): Prisma.CounterDelegate<ExtArgs>;

  /**
   * `prisma.adCampaign`: Exposes CRUD operations for the **AdCampaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdCampaigns
    * const adCampaigns = await prisma.adCampaign.findMany()
    * ```
    */
  get adCampaign(): Prisma.AdCampaignDelegate<ExtArgs>;

  /**
   * `prisma.adMedia`: Exposes CRUD operations for the **AdMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdMedias
    * const adMedias = await prisma.adMedia.findMany()
    * ```
    */
  get adMedia(): Prisma.AdMediaDelegate<ExtArgs>;

  /**
   * `prisma.adPlayLog`: Exposes CRUD operations for the **AdPlayLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdPlayLogs
    * const adPlayLogs = await prisma.adPlayLog.findMany()
    * ```
    */
  get adPlayLog(): Prisma.AdPlayLogDelegate<ExtArgs>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs>;

  /**
   * `prisma.config`: Exposes CRUD operations for the **Config** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Configs
    * const configs = await prisma.config.findMany()
    * ```
    */
  get config(): Prisma.ConfigDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    TicketType: 'TicketType',
    DailyCounter: 'DailyCounter',
    Ticket: 'Ticket',
    Counter: 'Counter',
    AdCampaign: 'AdCampaign',
    AdMedia: 'AdMedia',
    AdPlayLog: 'AdPlayLog',
    AuditLog: 'AuditLog',
    Config: 'Config'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "ticketType" | "dailyCounter" | "ticket" | "counter" | "adCampaign" | "adMedia" | "adPlayLog" | "auditLog" | "config"
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
      TicketType: {
        payload: Prisma.$TicketTypePayload<ExtArgs>
        fields: Prisma.TicketTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findFirst: {
            args: Prisma.TicketTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findMany: {
            args: Prisma.TicketTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          create: {
            args: Prisma.TicketTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          createMany: {
            args: Prisma.TicketTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          delete: {
            args: Prisma.TicketTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          update: {
            args: Prisma.TicketTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          deleteMany: {
            args: Prisma.TicketTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          aggregate: {
            args: Prisma.TicketTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketType>
          }
          groupBy: {
            args: Prisma.TicketTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeCountAggregateOutputType> | number
          }
        }
      }
      DailyCounter: {
        payload: Prisma.$DailyCounterPayload<ExtArgs>
        fields: Prisma.DailyCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>
          }
          findFirst: {
            args: Prisma.DailyCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>
          }
          findMany: {
            args: Prisma.DailyCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>[]
          }
          create: {
            args: Prisma.DailyCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>
          }
          createMany: {
            args: Prisma.DailyCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>[]
          }
          delete: {
            args: Prisma.DailyCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>
          }
          update: {
            args: Prisma.DailyCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>
          }
          deleteMany: {
            args: Prisma.DailyCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyCounterPayload>
          }
          aggregate: {
            args: Prisma.DailyCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyCounter>
          }
          groupBy: {
            args: Prisma.DailyCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyCounterCountArgs<ExtArgs>
            result: $Utils.Optional<DailyCounterCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Counter: {
        payload: Prisma.$CounterPayload<ExtArgs>
        fields: Prisma.CounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findFirst: {
            args: Prisma.CounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findMany: {
            args: Prisma.CounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          create: {
            args: Prisma.CounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          createMany: {
            args: Prisma.CounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          delete: {
            args: Prisma.CounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          update: {
            args: Prisma.CounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          deleteMany: {
            args: Prisma.CounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          aggregate: {
            args: Prisma.CounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounter>
          }
          groupBy: {
            args: Prisma.CounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CounterCountArgs<ExtArgs>
            result: $Utils.Optional<CounterCountAggregateOutputType> | number
          }
        }
      }
      AdCampaign: {
        payload: Prisma.$AdCampaignPayload<ExtArgs>
        fields: Prisma.AdCampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdCampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdCampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>
          }
          findFirst: {
            args: Prisma.AdCampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdCampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>
          }
          findMany: {
            args: Prisma.AdCampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>[]
          }
          create: {
            args: Prisma.AdCampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>
          }
          createMany: {
            args: Prisma.AdCampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdCampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>[]
          }
          delete: {
            args: Prisma.AdCampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>
          }
          update: {
            args: Prisma.AdCampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>
          }
          deleteMany: {
            args: Prisma.AdCampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdCampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdCampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdCampaignPayload>
          }
          aggregate: {
            args: Prisma.AdCampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdCampaign>
          }
          groupBy: {
            args: Prisma.AdCampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdCampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdCampaignCountArgs<ExtArgs>
            result: $Utils.Optional<AdCampaignCountAggregateOutputType> | number
          }
        }
      }
      AdMedia: {
        payload: Prisma.$AdMediaPayload<ExtArgs>
        fields: Prisma.AdMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>
          }
          findFirst: {
            args: Prisma.AdMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>
          }
          findMany: {
            args: Prisma.AdMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>[]
          }
          create: {
            args: Prisma.AdMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>
          }
          createMany: {
            args: Prisma.AdMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>[]
          }
          delete: {
            args: Prisma.AdMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>
          }
          update: {
            args: Prisma.AdMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>
          }
          deleteMany: {
            args: Prisma.AdMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdMediaPayload>
          }
          aggregate: {
            args: Prisma.AdMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdMedia>
          }
          groupBy: {
            args: Prisma.AdMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdMediaCountArgs<ExtArgs>
            result: $Utils.Optional<AdMediaCountAggregateOutputType> | number
          }
        }
      }
      AdPlayLog: {
        payload: Prisma.$AdPlayLogPayload<ExtArgs>
        fields: Prisma.AdPlayLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdPlayLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdPlayLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>
          }
          findFirst: {
            args: Prisma.AdPlayLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdPlayLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>
          }
          findMany: {
            args: Prisma.AdPlayLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>[]
          }
          create: {
            args: Prisma.AdPlayLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>
          }
          createMany: {
            args: Prisma.AdPlayLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdPlayLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>[]
          }
          delete: {
            args: Prisma.AdPlayLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>
          }
          update: {
            args: Prisma.AdPlayLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>
          }
          deleteMany: {
            args: Prisma.AdPlayLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdPlayLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdPlayLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdPlayLogPayload>
          }
          aggregate: {
            args: Prisma.AdPlayLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdPlayLog>
          }
          groupBy: {
            args: Prisma.AdPlayLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdPlayLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdPlayLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdPlayLogCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Config: {
        payload: Prisma.$ConfigPayload<ExtArgs>
        fields: Prisma.ConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findFirst: {
            args: Prisma.ConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          findMany: {
            args: Prisma.ConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          create: {
            args: Prisma.ConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          createMany: {
            args: Prisma.ConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>[]
          }
          delete: {
            args: Prisma.ConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          update: {
            args: Prisma.ConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          deleteMany: {
            args: Prisma.ConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfigPayload>
          }
          aggregate: {
            args: Prisma.ConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfig>
          }
          groupBy: {
            args: Prisma.ConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfigCountArgs<ExtArgs>
            result: $Utils.Optional<ConfigCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UserCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type TicketTypeCountOutputType
   */

  export type TicketTypeCountOutputType = {
    tickets: number
    dailyCounts: number
  }

  export type TicketTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TicketTypeCountOutputTypeCountTicketsArgs
    dailyCounts?: boolean | TicketTypeCountOutputTypeCountDailyCountsArgs
  }

  // Custom InputTypes
  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTypeCountOutputType
     */
    select?: TicketTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeCountDailyCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyCounterWhereInput
  }


  /**
   * Count Type CounterCountOutputType
   */

  export type CounterCountOutputType = {
    tickets: number
  }

  export type CounterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | CounterCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * CounterCountOutputType without action
   */
  export type CounterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounterCountOutputType
     */
    select?: CounterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CounterCountOutputType without action
   */
  export type CounterCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type AdCampaignCountOutputType
   */

  export type AdCampaignCountOutputType = {
    medias: number
  }

  export type AdCampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | AdCampaignCountOutputTypeCountMediasArgs
  }

  // Custom InputTypes
  /**
   * AdCampaignCountOutputType without action
   */
  export type AdCampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaignCountOutputType
     */
    select?: AdCampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdCampaignCountOutputType without action
   */
  export type AdCampaignCountOutputTypeCountMediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdMediaWhereInput
  }


  /**
   * Count Type AdMediaCountOutputType
   */

  export type AdMediaCountOutputType = {
    playLogs: number
  }

  export type AdMediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playLogs?: boolean | AdMediaCountOutputTypeCountPlayLogsArgs
  }

  // Custom InputTypes
  /**
   * AdMediaCountOutputType without action
   */
  export type AdMediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMediaCountOutputType
     */
    select?: AdMediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdMediaCountOutputType without action
   */
  export type AdMediaCountOutputTypeCountPlayLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdPlayLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      logs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
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
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TicketType
   */

  export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  export type TicketTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TicketTypeSumAggregateOutputType = {
    id: number | null
  }

  export type TicketTypeMinAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    priority: string | null
    group: string | null
    active: boolean | null
  }

  export type TicketTypeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    description: string | null
    priority: string | null
    group: string | null
    active: boolean | null
  }

  export type TicketTypeCountAggregateOutputType = {
    id: number
    code: number
    description: number
    priority: number
    group: number
    active: number
    _all: number
  }


  export type TicketTypeAvgAggregateInputType = {
    id?: true
  }

  export type TicketTypeSumAggregateInputType = {
    id?: true
  }

  export type TicketTypeMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    priority?: true
    group?: true
    active?: true
  }

  export type TicketTypeMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    priority?: true
    group?: true
    active?: true
  }

  export type TicketTypeCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    priority?: true
    group?: true
    active?: true
    _all?: true
  }

  export type TicketTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketType to aggregate.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTypes
    **/
    _count?: true | TicketTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTypeMaxAggregateInputType
  }

  export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketType[P]>
      : GetScalarType<T[P], AggregateTicketType[P]>
  }




  export type TicketTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithAggregationInput | TicketTypeOrderByWithAggregationInput[]
    by: TicketTypeScalarFieldEnum[] | TicketTypeScalarFieldEnum
    having?: TicketTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTypeCountAggregateInputType | true
    _avg?: TicketTypeAvgAggregateInputType
    _sum?: TicketTypeSumAggregateInputType
    _min?: TicketTypeMinAggregateInputType
    _max?: TicketTypeMaxAggregateInputType
  }

  export type TicketTypeGroupByOutputType = {
    id: number
    code: string
    description: string
    priority: string
    group: string
    active: boolean
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
        }
      >
    >


  export type TicketTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    priority?: boolean
    group?: boolean
    active?: boolean
    tickets?: boolean | TicketType$ticketsArgs<ExtArgs>
    dailyCounts?: boolean | TicketType$dailyCountsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    priority?: boolean
    group?: boolean
    active?: boolean
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    priority?: boolean
    group?: boolean
    active?: boolean
  }

  export type TicketTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TicketType$ticketsArgs<ExtArgs>
    dailyCounts?: boolean | TicketType$dailyCountsArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TicketTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketType"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      dailyCounts: Prisma.$DailyCounterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      description: string
      priority: string
      group: string
      active: boolean
    }, ExtArgs["result"]["ticketType"]>
    composites: {}
  }

  type TicketTypeGetPayload<S extends boolean | null | undefined | TicketTypeDefaultArgs> = $Result.GetResult<Prisma.$TicketTypePayload, S>

  type TicketTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketTypeCountAggregateInputType | true
    }

  export interface TicketTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketType'], meta: { name: 'TicketType' } }
    /**
     * Find zero or one TicketType that matches the filter.
     * @param {TicketTypeFindUniqueArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTypeFindUniqueArgs>(args: SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TicketType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketTypeFindUniqueOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TicketType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTypeFindFirstArgs>(args?: SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TicketType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TicketTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany()
     * 
     * // Get first 10 TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTypeFindManyArgs>(args?: SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TicketType.
     * @param {TicketTypeCreateArgs} args - Arguments to create a TicketType.
     * @example
     * // Create one TicketType
     * const TicketType = await prisma.ticketType.create({
     *   data: {
     *     // ... data to create a TicketType
     *   }
     * })
     * 
     */
    create<T extends TicketTypeCreateArgs>(args: SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TicketTypes.
     * @param {TicketTypeCreateManyArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTypeCreateManyArgs>(args?: SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketTypes and returns the data saved in the database.
     * @param {TicketTypeCreateManyAndReturnArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TicketType.
     * @param {TicketTypeDeleteArgs} args - Arguments to delete one TicketType.
     * @example
     * // Delete one TicketType
     * const TicketType = await prisma.ticketType.delete({
     *   where: {
     *     // ... filter to delete one TicketType
     *   }
     * })
     * 
     */
    delete<T extends TicketTypeDeleteArgs>(args: SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TicketType.
     * @param {TicketTypeUpdateArgs} args - Arguments to update one TicketType.
     * @example
     * // Update one TicketType
     * const ticketType = await prisma.ticketType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTypeUpdateArgs>(args: SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TicketTypes.
     * @param {TicketTypeDeleteManyArgs} args - Arguments to filter TicketTypes to delete.
     * @example
     * // Delete a few TicketTypes
     * const { count } = await prisma.ticketType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTypeDeleteManyArgs>(args?: SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTypeUpdateManyArgs>(args: SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketType.
     * @param {TicketTypeUpsertArgs} args - Arguments to update or create a TicketType.
     * @example
     * // Update or create a TicketType
     * const ticketType = await prisma.ticketType.upsert({
     *   create: {
     *     // ... data to create a TicketType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketType we want to update
     *   }
     * })
     */
    upsert<T extends TicketTypeUpsertArgs>(args: SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeCountArgs} args - Arguments to filter TicketTypes to count.
     * @example
     * // Count the number of TicketTypes
     * const count = await prisma.ticketType.count({
     *   where: {
     *     // ... the filter for the TicketTypes we want to count
     *   }
     * })
    **/
    count<T extends TicketTypeCountArgs>(
      args?: Subset<T, TicketTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketTypeAggregateArgs>(args: Subset<T, TicketTypeAggregateArgs>): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>

    /**
     * Group by TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeGroupByArgs} args - Group by arguments.
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
      T extends TicketTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTypeGroupByArgs['orderBy'] }
        : { orderBy?: TicketTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketType model
   */
  readonly fields: TicketTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends TicketType$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketType$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
    dailyCounts<T extends TicketType$dailyCountsArgs<ExtArgs> = {}>(args?: Subset<T, TicketType$dailyCountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the TicketType model
   */ 
  interface TicketTypeFieldRefs {
    readonly id: FieldRef<"TicketType", 'Int'>
    readonly code: FieldRef<"TicketType", 'String'>
    readonly description: FieldRef<"TicketType", 'String'>
    readonly priority: FieldRef<"TicketType", 'String'>
    readonly group: FieldRef<"TicketType", 'String'>
    readonly active: FieldRef<"TicketType", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TicketType findUnique
   */
  export type TicketTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findUniqueOrThrow
   */
  export type TicketTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findFirst
   */
  export type TicketTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findFirstOrThrow
   */
  export type TicketTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findMany
   */
  export type TicketTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketTypes to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType create
   */
  export type TicketTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketType.
     */
    data: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
  }

  /**
   * TicketType createMany
   */
  export type TicketTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
  }

  /**
   * TicketType createManyAndReturn
   */
  export type TicketTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
  }

  /**
   * TicketType update
   */
  export type TicketTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketType.
     */
    data: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
    /**
     * Choose, which TicketType to update.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType updateMany
   */
  export type TicketTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
  }

  /**
   * TicketType upsert
   */
  export type TicketTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketType to update in case it exists.
     */
    where: TicketTypeWhereUniqueInput
    /**
     * In case the TicketType found by the `where` argument doesn't exist, create a new TicketType with this data.
     */
    create: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
    /**
     * In case the TicketType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
  }

  /**
   * TicketType delete
   */
  export type TicketTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter which TicketType to delete.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType deleteMany
   */
  export type TicketTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTypes to delete
     */
    where?: TicketTypeWhereInput
  }

  /**
   * TicketType.tickets
   */
  export type TicketType$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * TicketType.dailyCounts
   */
  export type TicketType$dailyCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    where?: DailyCounterWhereInput
    orderBy?: DailyCounterOrderByWithRelationInput | DailyCounterOrderByWithRelationInput[]
    cursor?: DailyCounterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyCounterScalarFieldEnum | DailyCounterScalarFieldEnum[]
  }

  /**
   * TicketType without action
   */
  export type TicketTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
  }


  /**
   * Model DailyCounter
   */

  export type AggregateDailyCounter = {
    _count: DailyCounterCountAggregateOutputType | null
    _avg: DailyCounterAvgAggregateOutputType | null
    _sum: DailyCounterSumAggregateOutputType | null
    _min: DailyCounterMinAggregateOutputType | null
    _max: DailyCounterMaxAggregateOutputType | null
  }

  export type DailyCounterAvgAggregateOutputType = {
    id: number | null
    ticketTypeId: number | null
    count: number | null
  }

  export type DailyCounterSumAggregateOutputType = {
    id: number | null
    ticketTypeId: number | null
    count: number | null
  }

  export type DailyCounterMinAggregateOutputType = {
    id: number | null
    date: string | null
    ticketTypeId: number | null
    count: number | null
  }

  export type DailyCounterMaxAggregateOutputType = {
    id: number | null
    date: string | null
    ticketTypeId: number | null
    count: number | null
  }

  export type DailyCounterCountAggregateOutputType = {
    id: number
    date: number
    ticketTypeId: number
    count: number
    _all: number
  }


  export type DailyCounterAvgAggregateInputType = {
    id?: true
    ticketTypeId?: true
    count?: true
  }

  export type DailyCounterSumAggregateInputType = {
    id?: true
    ticketTypeId?: true
    count?: true
  }

  export type DailyCounterMinAggregateInputType = {
    id?: true
    date?: true
    ticketTypeId?: true
    count?: true
  }

  export type DailyCounterMaxAggregateInputType = {
    id?: true
    date?: true
    ticketTypeId?: true
    count?: true
  }

  export type DailyCounterCountAggregateInputType = {
    id?: true
    date?: true
    ticketTypeId?: true
    count?: true
    _all?: true
  }

  export type DailyCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyCounter to aggregate.
     */
    where?: DailyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCounters to fetch.
     */
    orderBy?: DailyCounterOrderByWithRelationInput | DailyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyCounters
    **/
    _count?: true | DailyCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyCounterMaxAggregateInputType
  }

  export type GetDailyCounterAggregateType<T extends DailyCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyCounter[P]>
      : GetScalarType<T[P], AggregateDailyCounter[P]>
  }




  export type DailyCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyCounterWhereInput
    orderBy?: DailyCounterOrderByWithAggregationInput | DailyCounterOrderByWithAggregationInput[]
    by: DailyCounterScalarFieldEnum[] | DailyCounterScalarFieldEnum
    having?: DailyCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyCounterCountAggregateInputType | true
    _avg?: DailyCounterAvgAggregateInputType
    _sum?: DailyCounterSumAggregateInputType
    _min?: DailyCounterMinAggregateInputType
    _max?: DailyCounterMaxAggregateInputType
  }

  export type DailyCounterGroupByOutputType = {
    id: number
    date: string
    ticketTypeId: number
    count: number
    _count: DailyCounterCountAggregateOutputType | null
    _avg: DailyCounterAvgAggregateOutputType | null
    _sum: DailyCounterSumAggregateOutputType | null
    _min: DailyCounterMinAggregateOutputType | null
    _max: DailyCounterMaxAggregateOutputType | null
  }

  type GetDailyCounterGroupByPayload<T extends DailyCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyCounterGroupByOutputType[P]>
            : GetScalarType<T[P], DailyCounterGroupByOutputType[P]>
        }
      >
    >


  export type DailyCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    ticketTypeId?: boolean
    count?: boolean
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyCounter"]>

  export type DailyCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    ticketTypeId?: boolean
    count?: boolean
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyCounter"]>

  export type DailyCounterSelectScalar = {
    id?: boolean
    date?: boolean
    ticketTypeId?: boolean
    count?: boolean
  }

  export type DailyCounterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
  }
  export type DailyCounterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
  }

  export type $DailyCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyCounter"
    objects: {
      ticketType: Prisma.$TicketTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      ticketTypeId: number
      count: number
    }, ExtArgs["result"]["dailyCounter"]>
    composites: {}
  }

  type DailyCounterGetPayload<S extends boolean | null | undefined | DailyCounterDefaultArgs> = $Result.GetResult<Prisma.$DailyCounterPayload, S>

  type DailyCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyCounterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyCounterCountAggregateInputType | true
    }

  export interface DailyCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyCounter'], meta: { name: 'DailyCounter' } }
    /**
     * Find zero or one DailyCounter that matches the filter.
     * @param {DailyCounterFindUniqueArgs} args - Arguments to find a DailyCounter
     * @example
     * // Get one DailyCounter
     * const dailyCounter = await prisma.dailyCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyCounterFindUniqueArgs>(args: SelectSubset<T, DailyCounterFindUniqueArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyCounter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyCounterFindUniqueOrThrowArgs} args - Arguments to find a DailyCounter
     * @example
     * // Get one DailyCounter
     * const dailyCounter = await prisma.dailyCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCounterFindFirstArgs} args - Arguments to find a DailyCounter
     * @example
     * // Get one DailyCounter
     * const dailyCounter = await prisma.dailyCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyCounterFindFirstArgs>(args?: SelectSubset<T, DailyCounterFindFirstArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCounterFindFirstOrThrowArgs} args - Arguments to find a DailyCounter
     * @example
     * // Get one DailyCounter
     * const dailyCounter = await prisma.dailyCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyCounters
     * const dailyCounters = await prisma.dailyCounter.findMany()
     * 
     * // Get first 10 DailyCounters
     * const dailyCounters = await prisma.dailyCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyCounterWithIdOnly = await prisma.dailyCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyCounterFindManyArgs>(args?: SelectSubset<T, DailyCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyCounter.
     * @param {DailyCounterCreateArgs} args - Arguments to create a DailyCounter.
     * @example
     * // Create one DailyCounter
     * const DailyCounter = await prisma.dailyCounter.create({
     *   data: {
     *     // ... data to create a DailyCounter
     *   }
     * })
     * 
     */
    create<T extends DailyCounterCreateArgs>(args: SelectSubset<T, DailyCounterCreateArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyCounters.
     * @param {DailyCounterCreateManyArgs} args - Arguments to create many DailyCounters.
     * @example
     * // Create many DailyCounters
     * const dailyCounter = await prisma.dailyCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyCounterCreateManyArgs>(args?: SelectSubset<T, DailyCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyCounters and returns the data saved in the database.
     * @param {DailyCounterCreateManyAndReturnArgs} args - Arguments to create many DailyCounters.
     * @example
     * // Create many DailyCounters
     * const dailyCounter = await prisma.dailyCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyCounters and only return the `id`
     * const dailyCounterWithIdOnly = await prisma.dailyCounter.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyCounter.
     * @param {DailyCounterDeleteArgs} args - Arguments to delete one DailyCounter.
     * @example
     * // Delete one DailyCounter
     * const DailyCounter = await prisma.dailyCounter.delete({
     *   where: {
     *     // ... filter to delete one DailyCounter
     *   }
     * })
     * 
     */
    delete<T extends DailyCounterDeleteArgs>(args: SelectSubset<T, DailyCounterDeleteArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyCounter.
     * @param {DailyCounterUpdateArgs} args - Arguments to update one DailyCounter.
     * @example
     * // Update one DailyCounter
     * const dailyCounter = await prisma.dailyCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyCounterUpdateArgs>(args: SelectSubset<T, DailyCounterUpdateArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyCounters.
     * @param {DailyCounterDeleteManyArgs} args - Arguments to filter DailyCounters to delete.
     * @example
     * // Delete a few DailyCounters
     * const { count } = await prisma.dailyCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyCounterDeleteManyArgs>(args?: SelectSubset<T, DailyCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyCounters
     * const dailyCounter = await prisma.dailyCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyCounterUpdateManyArgs>(args: SelectSubset<T, DailyCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyCounter.
     * @param {DailyCounterUpsertArgs} args - Arguments to update or create a DailyCounter.
     * @example
     * // Update or create a DailyCounter
     * const dailyCounter = await prisma.dailyCounter.upsert({
     *   create: {
     *     // ... data to create a DailyCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyCounter we want to update
     *   }
     * })
     */
    upsert<T extends DailyCounterUpsertArgs>(args: SelectSubset<T, DailyCounterUpsertArgs<ExtArgs>>): Prisma__DailyCounterClient<$Result.GetResult<Prisma.$DailyCounterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCounterCountArgs} args - Arguments to filter DailyCounters to count.
     * @example
     * // Count the number of DailyCounters
     * const count = await prisma.dailyCounter.count({
     *   where: {
     *     // ... the filter for the DailyCounters we want to count
     *   }
     * })
    **/
    count<T extends DailyCounterCountArgs>(
      args?: Subset<T, DailyCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyCounterAggregateArgs>(args: Subset<T, DailyCounterAggregateArgs>): Prisma.PrismaPromise<GetDailyCounterAggregateType<T>>

    /**
     * Group by DailyCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyCounterGroupByArgs} args - Group by arguments.
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
      T extends DailyCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyCounterGroupByArgs['orderBy'] }
        : { orderBy?: DailyCounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyCounter model
   */
  readonly fields: DailyCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketType<T extends TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketTypeDefaultArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DailyCounter model
   */ 
  interface DailyCounterFieldRefs {
    readonly id: FieldRef<"DailyCounter", 'Int'>
    readonly date: FieldRef<"DailyCounter", 'String'>
    readonly ticketTypeId: FieldRef<"DailyCounter", 'Int'>
    readonly count: FieldRef<"DailyCounter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyCounter findUnique
   */
  export type DailyCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * Filter, which DailyCounter to fetch.
     */
    where: DailyCounterWhereUniqueInput
  }

  /**
   * DailyCounter findUniqueOrThrow
   */
  export type DailyCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * Filter, which DailyCounter to fetch.
     */
    where: DailyCounterWhereUniqueInput
  }

  /**
   * DailyCounter findFirst
   */
  export type DailyCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * Filter, which DailyCounter to fetch.
     */
    where?: DailyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCounters to fetch.
     */
    orderBy?: DailyCounterOrderByWithRelationInput | DailyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyCounters.
     */
    cursor?: DailyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyCounters.
     */
    distinct?: DailyCounterScalarFieldEnum | DailyCounterScalarFieldEnum[]
  }

  /**
   * DailyCounter findFirstOrThrow
   */
  export type DailyCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * Filter, which DailyCounter to fetch.
     */
    where?: DailyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCounters to fetch.
     */
    orderBy?: DailyCounterOrderByWithRelationInput | DailyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyCounters.
     */
    cursor?: DailyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyCounters.
     */
    distinct?: DailyCounterScalarFieldEnum | DailyCounterScalarFieldEnum[]
  }

  /**
   * DailyCounter findMany
   */
  export type DailyCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * Filter, which DailyCounters to fetch.
     */
    where?: DailyCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyCounters to fetch.
     */
    orderBy?: DailyCounterOrderByWithRelationInput | DailyCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyCounters.
     */
    cursor?: DailyCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyCounters.
     */
    skip?: number
    distinct?: DailyCounterScalarFieldEnum | DailyCounterScalarFieldEnum[]
  }

  /**
   * DailyCounter create
   */
  export type DailyCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyCounter.
     */
    data: XOR<DailyCounterCreateInput, DailyCounterUncheckedCreateInput>
  }

  /**
   * DailyCounter createMany
   */
  export type DailyCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyCounters.
     */
    data: DailyCounterCreateManyInput | DailyCounterCreateManyInput[]
  }

  /**
   * DailyCounter createManyAndReturn
   */
  export type DailyCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyCounters.
     */
    data: DailyCounterCreateManyInput | DailyCounterCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyCounter update
   */
  export type DailyCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyCounter.
     */
    data: XOR<DailyCounterUpdateInput, DailyCounterUncheckedUpdateInput>
    /**
     * Choose, which DailyCounter to update.
     */
    where: DailyCounterWhereUniqueInput
  }

  /**
   * DailyCounter updateMany
   */
  export type DailyCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyCounters.
     */
    data: XOR<DailyCounterUpdateManyMutationInput, DailyCounterUncheckedUpdateManyInput>
    /**
     * Filter which DailyCounters to update
     */
    where?: DailyCounterWhereInput
  }

  /**
   * DailyCounter upsert
   */
  export type DailyCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyCounter to update in case it exists.
     */
    where: DailyCounterWhereUniqueInput
    /**
     * In case the DailyCounter found by the `where` argument doesn't exist, create a new DailyCounter with this data.
     */
    create: XOR<DailyCounterCreateInput, DailyCounterUncheckedCreateInput>
    /**
     * In case the DailyCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyCounterUpdateInput, DailyCounterUncheckedUpdateInput>
  }

  /**
   * DailyCounter delete
   */
  export type DailyCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
    /**
     * Filter which DailyCounter to delete.
     */
    where: DailyCounterWhereUniqueInput
  }

  /**
   * DailyCounter deleteMany
   */
  export type DailyCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyCounters to delete
     */
    where?: DailyCounterWhereInput
  }

  /**
   * DailyCounter without action
   */
  export type DailyCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyCounter
     */
    select?: DailyCounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyCounterInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    number: number | null
    ticketTypeId: number | null
    counterId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    number: number | null
    ticketTypeId: number | null
    counterId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    number: number | null
    code: string | null
    status: string | null
    issuedAt: Date | null
    calledAt: Date | null
    finishedAt: Date | null
    ticketTypeId: number | null
    counterId: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    number: number | null
    code: string | null
    status: string | null
    issuedAt: Date | null
    calledAt: Date | null
    finishedAt: Date | null
    ticketTypeId: number | null
    counterId: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    number: number
    code: number
    status: number
    issuedAt: number
    calledAt: number
    finishedAt: number
    ticketTypeId: number
    counterId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    number?: true
    ticketTypeId?: true
    counterId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    number?: true
    ticketTypeId?: true
    counterId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    number?: true
    code?: true
    status?: true
    issuedAt?: true
    calledAt?: true
    finishedAt?: true
    ticketTypeId?: true
    counterId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    number?: true
    code?: true
    status?: true
    issuedAt?: true
    calledAt?: true
    finishedAt?: true
    ticketTypeId?: true
    counterId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    number?: true
    code?: true
    status?: true
    issuedAt?: true
    calledAt?: true
    finishedAt?: true
    ticketTypeId?: true
    counterId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    number: number
    code: string
    status: string
    issuedAt: Date
    calledAt: Date | null
    finishedAt: Date | null
    ticketTypeId: number
    counterId: number | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    code?: boolean
    status?: boolean
    issuedAt?: boolean
    calledAt?: boolean
    finishedAt?: boolean
    ticketTypeId?: boolean
    counterId?: boolean
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    counter?: boolean | Ticket$counterArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    code?: boolean
    status?: boolean
    issuedAt?: boolean
    calledAt?: boolean
    finishedAt?: boolean
    ticketTypeId?: boolean
    counterId?: boolean
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    counter?: boolean | Ticket$counterArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    number?: boolean
    code?: boolean
    status?: boolean
    issuedAt?: boolean
    calledAt?: boolean
    finishedAt?: boolean
    ticketTypeId?: boolean
    counterId?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    counter?: boolean | Ticket$counterArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketType?: boolean | TicketTypeDefaultArgs<ExtArgs>
    counter?: boolean | Ticket$counterArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      ticketType: Prisma.$TicketTypePayload<ExtArgs>
      counter: Prisma.$CounterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      code: string
      status: string
      issuedAt: Date
      calledAt: Date | null
      finishedAt: Date | null
      ticketTypeId: number
      counterId: number | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketType<T extends TicketTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketTypeDefaultArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    counter<T extends Ticket$counterArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$counterArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly number: FieldRef<"Ticket", 'Int'>
    readonly code: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'String'>
    readonly issuedAt: FieldRef<"Ticket", 'DateTime'>
    readonly calledAt: FieldRef<"Ticket", 'DateTime'>
    readonly finishedAt: FieldRef<"Ticket", 'DateTime'>
    readonly ticketTypeId: FieldRef<"Ticket", 'Int'>
    readonly counterId: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.counter
   */
  export type Ticket$counterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    where?: CounterWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Counter
   */

  export type AggregateCounter = {
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  export type CounterAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type CounterSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type CounterMinAggregateOutputType = {
    id: number | null
    number: number | null
    group: string | null
    isHybrid: boolean | null
  }

  export type CounterMaxAggregateOutputType = {
    id: number | null
    number: number | null
    group: string | null
    isHybrid: boolean | null
  }

  export type CounterCountAggregateOutputType = {
    id: number
    number: number
    group: number
    isHybrid: number
    _all: number
  }


  export type CounterAvgAggregateInputType = {
    id?: true
    number?: true
  }

  export type CounterSumAggregateInputType = {
    id?: true
    number?: true
  }

  export type CounterMinAggregateInputType = {
    id?: true
    number?: true
    group?: true
    isHybrid?: true
  }

  export type CounterMaxAggregateInputType = {
    id?: true
    number?: true
    group?: true
    isHybrid?: true
  }

  export type CounterCountAggregateInputType = {
    id?: true
    number?: true
    group?: true
    isHybrid?: true
    _all?: true
  }

  export type CounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counter to aggregate.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Counters
    **/
    _count?: true | CounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounterMaxAggregateInputType
  }

  export type GetCounterAggregateType<T extends CounterAggregateArgs> = {
        [P in keyof T & keyof AggregateCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounter[P]>
      : GetScalarType<T[P], AggregateCounter[P]>
  }




  export type CounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounterWhereInput
    orderBy?: CounterOrderByWithAggregationInput | CounterOrderByWithAggregationInput[]
    by: CounterScalarFieldEnum[] | CounterScalarFieldEnum
    having?: CounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounterCountAggregateInputType | true
    _avg?: CounterAvgAggregateInputType
    _sum?: CounterSumAggregateInputType
    _min?: CounterMinAggregateInputType
    _max?: CounterMaxAggregateInputType
  }

  export type CounterGroupByOutputType = {
    id: number
    number: number
    group: string | null
    isHybrid: boolean
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  type GetCounterGroupByPayload<T extends CounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounterGroupByOutputType[P]>
            : GetScalarType<T[P], CounterGroupByOutputType[P]>
        }
      >
    >


  export type CounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    group?: boolean
    isHybrid?: boolean
    tickets?: boolean | Counter$ticketsArgs<ExtArgs>
    _count?: boolean | CounterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["counter"]>

  export type CounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    group?: boolean
    isHybrid?: boolean
  }, ExtArgs["result"]["counter"]>

  export type CounterSelectScalar = {
    id?: boolean
    number?: boolean
    group?: boolean
    isHybrid?: boolean
  }

  export type CounterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Counter$ticketsArgs<ExtArgs>
    _count?: boolean | CounterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CounterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Counter"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      group: string | null
      isHybrid: boolean
    }, ExtArgs["result"]["counter"]>
    composites: {}
  }

  type CounterGetPayload<S extends boolean | null | undefined | CounterDefaultArgs> = $Result.GetResult<Prisma.$CounterPayload, S>

  type CounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CounterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CounterCountAggregateInputType | true
    }

  export interface CounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Counter'], meta: { name: 'Counter' } }
    /**
     * Find zero or one Counter that matches the filter.
     * @param {CounterFindUniqueArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounterFindUniqueArgs>(args: SelectSubset<T, CounterFindUniqueArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Counter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CounterFindUniqueOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounterFindUniqueOrThrowArgs>(args: SelectSubset<T, CounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Counter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounterFindFirstArgs>(args?: SelectSubset<T, CounterFindFirstArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Counter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounterFindFirstOrThrowArgs>(args?: SelectSubset<T, CounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Counters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Counters
     * const counters = await prisma.counter.findMany()
     * 
     * // Get first 10 Counters
     * const counters = await prisma.counter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counterWithIdOnly = await prisma.counter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounterFindManyArgs>(args?: SelectSubset<T, CounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Counter.
     * @param {CounterCreateArgs} args - Arguments to create a Counter.
     * @example
     * // Create one Counter
     * const Counter = await prisma.counter.create({
     *   data: {
     *     // ... data to create a Counter
     *   }
     * })
     * 
     */
    create<T extends CounterCreateArgs>(args: SelectSubset<T, CounterCreateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Counters.
     * @param {CounterCreateManyArgs} args - Arguments to create many Counters.
     * @example
     * // Create many Counters
     * const counter = await prisma.counter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounterCreateManyArgs>(args?: SelectSubset<T, CounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Counters and returns the data saved in the database.
     * @param {CounterCreateManyAndReturnArgs} args - Arguments to create many Counters.
     * @example
     * // Create many Counters
     * const counter = await prisma.counter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Counters and only return the `id`
     * const counterWithIdOnly = await prisma.counter.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CounterCreateManyAndReturnArgs>(args?: SelectSubset<T, CounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Counter.
     * @param {CounterDeleteArgs} args - Arguments to delete one Counter.
     * @example
     * // Delete one Counter
     * const Counter = await prisma.counter.delete({
     *   where: {
     *     // ... filter to delete one Counter
     *   }
     * })
     * 
     */
    delete<T extends CounterDeleteArgs>(args: SelectSubset<T, CounterDeleteArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Counter.
     * @param {CounterUpdateArgs} args - Arguments to update one Counter.
     * @example
     * // Update one Counter
     * const counter = await prisma.counter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounterUpdateArgs>(args: SelectSubset<T, CounterUpdateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Counters.
     * @param {CounterDeleteManyArgs} args - Arguments to filter Counters to delete.
     * @example
     * // Delete a few Counters
     * const { count } = await prisma.counter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounterDeleteManyArgs>(args?: SelectSubset<T, CounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Counters
     * const counter = await prisma.counter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounterUpdateManyArgs>(args: SelectSubset<T, CounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Counter.
     * @param {CounterUpsertArgs} args - Arguments to update or create a Counter.
     * @example
     * // Update or create a Counter
     * const counter = await prisma.counter.upsert({
     *   create: {
     *     // ... data to create a Counter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Counter we want to update
     *   }
     * })
     */
    upsert<T extends CounterUpsertArgs>(args: SelectSubset<T, CounterUpsertArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterCountArgs} args - Arguments to filter Counters to count.
     * @example
     * // Count the number of Counters
     * const count = await prisma.counter.count({
     *   where: {
     *     // ... the filter for the Counters we want to count
     *   }
     * })
    **/
    count<T extends CounterCountArgs>(
      args?: Subset<T, CounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CounterAggregateArgs>(args: Subset<T, CounterAggregateArgs>): Prisma.PrismaPromise<GetCounterAggregateType<T>>

    /**
     * Group by Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterGroupByArgs} args - Group by arguments.
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
      T extends CounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounterGroupByArgs['orderBy'] }
        : { orderBy?: CounterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Counter model
   */
  readonly fields: CounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Counter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Counter$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Counter$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Counter model
   */ 
  interface CounterFieldRefs {
    readonly id: FieldRef<"Counter", 'Int'>
    readonly number: FieldRef<"Counter", 'Int'>
    readonly group: FieldRef<"Counter", 'String'>
    readonly isHybrid: FieldRef<"Counter", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Counter findUnique
   */
  export type CounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findUniqueOrThrow
   */
  export type CounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findFirst
   */
  export type CounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findFirstOrThrow
   */
  export type CounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findMany
   */
  export type CounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * Filter, which Counters to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter create
   */
  export type CounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * The data needed to create a Counter.
     */
    data: XOR<CounterCreateInput, CounterUncheckedCreateInput>
  }

  /**
   * Counter createMany
   */
  export type CounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Counters.
     */
    data: CounterCreateManyInput | CounterCreateManyInput[]
  }

  /**
   * Counter createManyAndReturn
   */
  export type CounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Counters.
     */
    data: CounterCreateManyInput | CounterCreateManyInput[]
  }

  /**
   * Counter update
   */
  export type CounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * The data needed to update a Counter.
     */
    data: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
    /**
     * Choose, which Counter to update.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter updateMany
   */
  export type CounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Counters.
     */
    data: XOR<CounterUpdateManyMutationInput, CounterUncheckedUpdateManyInput>
    /**
     * Filter which Counters to update
     */
    where?: CounterWhereInput
  }

  /**
   * Counter upsert
   */
  export type CounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * The filter to search for the Counter to update in case it exists.
     */
    where: CounterWhereUniqueInput
    /**
     * In case the Counter found by the `where` argument doesn't exist, create a new Counter with this data.
     */
    create: XOR<CounterCreateInput, CounterUncheckedCreateInput>
    /**
     * In case the Counter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
  }

  /**
   * Counter delete
   */
  export type CounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
    /**
     * Filter which Counter to delete.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter deleteMany
   */
  export type CounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counters to delete
     */
    where?: CounterWhereInput
  }

  /**
   * Counter.tickets
   */
  export type Counter$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Counter without action
   */
  export type CounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounterInclude<ExtArgs> | null
  }


  /**
   * Model AdCampaign
   */

  export type AggregateAdCampaign = {
    _count: AdCampaignCountAggregateOutputType | null
    _avg: AdCampaignAvgAggregateOutputType | null
    _sum: AdCampaignSumAggregateOutputType | null
    _min: AdCampaignMinAggregateOutputType | null
    _max: AdCampaignMaxAggregateOutputType | null
  }

  export type AdCampaignAvgAggregateOutputType = {
    id: number | null
  }

  export type AdCampaignSumAggregateOutputType = {
    id: number | null
  }

  export type AdCampaignMinAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    active: boolean | null
  }

  export type AdCampaignMaxAggregateOutputType = {
    id: number | null
    name: string | null
    startDate: Date | null
    endDate: Date | null
    active: boolean | null
  }

  export type AdCampaignCountAggregateOutputType = {
    id: number
    name: number
    startDate: number
    endDate: number
    active: number
    _all: number
  }


  export type AdCampaignAvgAggregateInputType = {
    id?: true
  }

  export type AdCampaignSumAggregateInputType = {
    id?: true
  }

  export type AdCampaignMinAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    active?: true
  }

  export type AdCampaignMaxAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    active?: true
  }

  export type AdCampaignCountAggregateInputType = {
    id?: true
    name?: true
    startDate?: true
    endDate?: true
    active?: true
    _all?: true
  }

  export type AdCampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdCampaign to aggregate.
     */
    where?: AdCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdCampaigns to fetch.
     */
    orderBy?: AdCampaignOrderByWithRelationInput | AdCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdCampaigns
    **/
    _count?: true | AdCampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdCampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdCampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdCampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdCampaignMaxAggregateInputType
  }

  export type GetAdCampaignAggregateType<T extends AdCampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateAdCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdCampaign[P]>
      : GetScalarType<T[P], AggregateAdCampaign[P]>
  }




  export type AdCampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdCampaignWhereInput
    orderBy?: AdCampaignOrderByWithAggregationInput | AdCampaignOrderByWithAggregationInput[]
    by: AdCampaignScalarFieldEnum[] | AdCampaignScalarFieldEnum
    having?: AdCampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdCampaignCountAggregateInputType | true
    _avg?: AdCampaignAvgAggregateInputType
    _sum?: AdCampaignSumAggregateInputType
    _min?: AdCampaignMinAggregateInputType
    _max?: AdCampaignMaxAggregateInputType
  }

  export type AdCampaignGroupByOutputType = {
    id: number
    name: string
    startDate: Date
    endDate: Date
    active: boolean
    _count: AdCampaignCountAggregateOutputType | null
    _avg: AdCampaignAvgAggregateOutputType | null
    _sum: AdCampaignSumAggregateOutputType | null
    _min: AdCampaignMinAggregateOutputType | null
    _max: AdCampaignMaxAggregateOutputType | null
  }

  type GetAdCampaignGroupByPayload<T extends AdCampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdCampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdCampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdCampaignGroupByOutputType[P]>
            : GetScalarType<T[P], AdCampaignGroupByOutputType[P]>
        }
      >
    >


  export type AdCampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
    medias?: boolean | AdCampaign$mediasArgs<ExtArgs>
    _count?: boolean | AdCampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adCampaign"]>

  export type AdCampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
  }, ExtArgs["result"]["adCampaign"]>

  export type AdCampaignSelectScalar = {
    id?: boolean
    name?: boolean
    startDate?: boolean
    endDate?: boolean
    active?: boolean
  }

  export type AdCampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medias?: boolean | AdCampaign$mediasArgs<ExtArgs>
    _count?: boolean | AdCampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdCampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdCampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdCampaign"
    objects: {
      medias: Prisma.$AdMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      startDate: Date
      endDate: Date
      active: boolean
    }, ExtArgs["result"]["adCampaign"]>
    composites: {}
  }

  type AdCampaignGetPayload<S extends boolean | null | undefined | AdCampaignDefaultArgs> = $Result.GetResult<Prisma.$AdCampaignPayload, S>

  type AdCampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdCampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdCampaignCountAggregateInputType | true
    }

  export interface AdCampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdCampaign'], meta: { name: 'AdCampaign' } }
    /**
     * Find zero or one AdCampaign that matches the filter.
     * @param {AdCampaignFindUniqueArgs} args - Arguments to find a AdCampaign
     * @example
     * // Get one AdCampaign
     * const adCampaign = await prisma.adCampaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdCampaignFindUniqueArgs>(args: SelectSubset<T, AdCampaignFindUniqueArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdCampaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdCampaignFindUniqueOrThrowArgs} args - Arguments to find a AdCampaign
     * @example
     * // Get one AdCampaign
     * const adCampaign = await prisma.adCampaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdCampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, AdCampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdCampaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCampaignFindFirstArgs} args - Arguments to find a AdCampaign
     * @example
     * // Get one AdCampaign
     * const adCampaign = await prisma.adCampaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdCampaignFindFirstArgs>(args?: SelectSubset<T, AdCampaignFindFirstArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdCampaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCampaignFindFirstOrThrowArgs} args - Arguments to find a AdCampaign
     * @example
     * // Get one AdCampaign
     * const adCampaign = await prisma.adCampaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdCampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, AdCampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdCampaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdCampaigns
     * const adCampaigns = await prisma.adCampaign.findMany()
     * 
     * // Get first 10 AdCampaigns
     * const adCampaigns = await prisma.adCampaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adCampaignWithIdOnly = await prisma.adCampaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdCampaignFindManyArgs>(args?: SelectSubset<T, AdCampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdCampaign.
     * @param {AdCampaignCreateArgs} args - Arguments to create a AdCampaign.
     * @example
     * // Create one AdCampaign
     * const AdCampaign = await prisma.adCampaign.create({
     *   data: {
     *     // ... data to create a AdCampaign
     *   }
     * })
     * 
     */
    create<T extends AdCampaignCreateArgs>(args: SelectSubset<T, AdCampaignCreateArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdCampaigns.
     * @param {AdCampaignCreateManyArgs} args - Arguments to create many AdCampaigns.
     * @example
     * // Create many AdCampaigns
     * const adCampaign = await prisma.adCampaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdCampaignCreateManyArgs>(args?: SelectSubset<T, AdCampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdCampaigns and returns the data saved in the database.
     * @param {AdCampaignCreateManyAndReturnArgs} args - Arguments to create many AdCampaigns.
     * @example
     * // Create many AdCampaigns
     * const adCampaign = await prisma.adCampaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdCampaigns and only return the `id`
     * const adCampaignWithIdOnly = await prisma.adCampaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdCampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, AdCampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdCampaign.
     * @param {AdCampaignDeleteArgs} args - Arguments to delete one AdCampaign.
     * @example
     * // Delete one AdCampaign
     * const AdCampaign = await prisma.adCampaign.delete({
     *   where: {
     *     // ... filter to delete one AdCampaign
     *   }
     * })
     * 
     */
    delete<T extends AdCampaignDeleteArgs>(args: SelectSubset<T, AdCampaignDeleteArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdCampaign.
     * @param {AdCampaignUpdateArgs} args - Arguments to update one AdCampaign.
     * @example
     * // Update one AdCampaign
     * const adCampaign = await prisma.adCampaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdCampaignUpdateArgs>(args: SelectSubset<T, AdCampaignUpdateArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdCampaigns.
     * @param {AdCampaignDeleteManyArgs} args - Arguments to filter AdCampaigns to delete.
     * @example
     * // Delete a few AdCampaigns
     * const { count } = await prisma.adCampaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdCampaignDeleteManyArgs>(args?: SelectSubset<T, AdCampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdCampaigns
     * const adCampaign = await prisma.adCampaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdCampaignUpdateManyArgs>(args: SelectSubset<T, AdCampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdCampaign.
     * @param {AdCampaignUpsertArgs} args - Arguments to update or create a AdCampaign.
     * @example
     * // Update or create a AdCampaign
     * const adCampaign = await prisma.adCampaign.upsert({
     *   create: {
     *     // ... data to create a AdCampaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdCampaign we want to update
     *   }
     * })
     */
    upsert<T extends AdCampaignUpsertArgs>(args: SelectSubset<T, AdCampaignUpsertArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdCampaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCampaignCountArgs} args - Arguments to filter AdCampaigns to count.
     * @example
     * // Count the number of AdCampaigns
     * const count = await prisma.adCampaign.count({
     *   where: {
     *     // ... the filter for the AdCampaigns we want to count
     *   }
     * })
    **/
    count<T extends AdCampaignCountArgs>(
      args?: Subset<T, AdCampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdCampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdCampaignAggregateArgs>(args: Subset<T, AdCampaignAggregateArgs>): Prisma.PrismaPromise<GetAdCampaignAggregateType<T>>

    /**
     * Group by AdCampaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCampaignGroupByArgs} args - Group by arguments.
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
      T extends AdCampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdCampaignGroupByArgs['orderBy'] }
        : { orderBy?: AdCampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdCampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdCampaign model
   */
  readonly fields: AdCampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdCampaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdCampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medias<T extends AdCampaign$mediasArgs<ExtArgs> = {}>(args?: Subset<T, AdCampaign$mediasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AdCampaign model
   */ 
  interface AdCampaignFieldRefs {
    readonly id: FieldRef<"AdCampaign", 'Int'>
    readonly name: FieldRef<"AdCampaign", 'String'>
    readonly startDate: FieldRef<"AdCampaign", 'DateTime'>
    readonly endDate: FieldRef<"AdCampaign", 'DateTime'>
    readonly active: FieldRef<"AdCampaign", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AdCampaign findUnique
   */
  export type AdCampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * Filter, which AdCampaign to fetch.
     */
    where: AdCampaignWhereUniqueInput
  }

  /**
   * AdCampaign findUniqueOrThrow
   */
  export type AdCampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * Filter, which AdCampaign to fetch.
     */
    where: AdCampaignWhereUniqueInput
  }

  /**
   * AdCampaign findFirst
   */
  export type AdCampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * Filter, which AdCampaign to fetch.
     */
    where?: AdCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdCampaigns to fetch.
     */
    orderBy?: AdCampaignOrderByWithRelationInput | AdCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdCampaigns.
     */
    cursor?: AdCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdCampaigns.
     */
    distinct?: AdCampaignScalarFieldEnum | AdCampaignScalarFieldEnum[]
  }

  /**
   * AdCampaign findFirstOrThrow
   */
  export type AdCampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * Filter, which AdCampaign to fetch.
     */
    where?: AdCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdCampaigns to fetch.
     */
    orderBy?: AdCampaignOrderByWithRelationInput | AdCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdCampaigns.
     */
    cursor?: AdCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdCampaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdCampaigns.
     */
    distinct?: AdCampaignScalarFieldEnum | AdCampaignScalarFieldEnum[]
  }

  /**
   * AdCampaign findMany
   */
  export type AdCampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * Filter, which AdCampaigns to fetch.
     */
    where?: AdCampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdCampaigns to fetch.
     */
    orderBy?: AdCampaignOrderByWithRelationInput | AdCampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdCampaigns.
     */
    cursor?: AdCampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdCampaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdCampaigns.
     */
    skip?: number
    distinct?: AdCampaignScalarFieldEnum | AdCampaignScalarFieldEnum[]
  }

  /**
   * AdCampaign create
   */
  export type AdCampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a AdCampaign.
     */
    data: XOR<AdCampaignCreateInput, AdCampaignUncheckedCreateInput>
  }

  /**
   * AdCampaign createMany
   */
  export type AdCampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdCampaigns.
     */
    data: AdCampaignCreateManyInput | AdCampaignCreateManyInput[]
  }

  /**
   * AdCampaign createManyAndReturn
   */
  export type AdCampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdCampaigns.
     */
    data: AdCampaignCreateManyInput | AdCampaignCreateManyInput[]
  }

  /**
   * AdCampaign update
   */
  export type AdCampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a AdCampaign.
     */
    data: XOR<AdCampaignUpdateInput, AdCampaignUncheckedUpdateInput>
    /**
     * Choose, which AdCampaign to update.
     */
    where: AdCampaignWhereUniqueInput
  }

  /**
   * AdCampaign updateMany
   */
  export type AdCampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdCampaigns.
     */
    data: XOR<AdCampaignUpdateManyMutationInput, AdCampaignUncheckedUpdateManyInput>
    /**
     * Filter which AdCampaigns to update
     */
    where?: AdCampaignWhereInput
  }

  /**
   * AdCampaign upsert
   */
  export type AdCampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the AdCampaign to update in case it exists.
     */
    where: AdCampaignWhereUniqueInput
    /**
     * In case the AdCampaign found by the `where` argument doesn't exist, create a new AdCampaign with this data.
     */
    create: XOR<AdCampaignCreateInput, AdCampaignUncheckedCreateInput>
    /**
     * In case the AdCampaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdCampaignUpdateInput, AdCampaignUncheckedUpdateInput>
  }

  /**
   * AdCampaign delete
   */
  export type AdCampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
    /**
     * Filter which AdCampaign to delete.
     */
    where: AdCampaignWhereUniqueInput
  }

  /**
   * AdCampaign deleteMany
   */
  export type AdCampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdCampaigns to delete
     */
    where?: AdCampaignWhereInput
  }

  /**
   * AdCampaign.medias
   */
  export type AdCampaign$mediasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    where?: AdMediaWhereInput
    orderBy?: AdMediaOrderByWithRelationInput | AdMediaOrderByWithRelationInput[]
    cursor?: AdMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdMediaScalarFieldEnum | AdMediaScalarFieldEnum[]
  }

  /**
   * AdCampaign without action
   */
  export type AdCampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdCampaign
     */
    select?: AdCampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdCampaignInclude<ExtArgs> | null
  }


  /**
   * Model AdMedia
   */

  export type AggregateAdMedia = {
    _count: AdMediaCountAggregateOutputType | null
    _avg: AdMediaAvgAggregateOutputType | null
    _sum: AdMediaSumAggregateOutputType | null
    _min: AdMediaMinAggregateOutputType | null
    _max: AdMediaMaxAggregateOutputType | null
  }

  export type AdMediaAvgAggregateOutputType = {
    id: number | null
    campaignId: number | null
    duration: number | null
  }

  export type AdMediaSumAggregateOutputType = {
    id: number | null
    campaignId: number | null
    duration: number | null
  }

  export type AdMediaMinAggregateOutputType = {
    id: number | null
    campaignId: number | null
    type: string | null
    path: string | null
    duration: number | null
    description: string | null
  }

  export type AdMediaMaxAggregateOutputType = {
    id: number | null
    campaignId: number | null
    type: string | null
    path: string | null
    duration: number | null
    description: string | null
  }

  export type AdMediaCountAggregateOutputType = {
    id: number
    campaignId: number
    type: number
    path: number
    duration: number
    description: number
    _all: number
  }


  export type AdMediaAvgAggregateInputType = {
    id?: true
    campaignId?: true
    duration?: true
  }

  export type AdMediaSumAggregateInputType = {
    id?: true
    campaignId?: true
    duration?: true
  }

  export type AdMediaMinAggregateInputType = {
    id?: true
    campaignId?: true
    type?: true
    path?: true
    duration?: true
    description?: true
  }

  export type AdMediaMaxAggregateInputType = {
    id?: true
    campaignId?: true
    type?: true
    path?: true
    duration?: true
    description?: true
  }

  export type AdMediaCountAggregateInputType = {
    id?: true
    campaignId?: true
    type?: true
    path?: true
    duration?: true
    description?: true
    _all?: true
  }

  export type AdMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdMedia to aggregate.
     */
    where?: AdMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdMedias to fetch.
     */
    orderBy?: AdMediaOrderByWithRelationInput | AdMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdMedias
    **/
    _count?: true | AdMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdMediaMaxAggregateInputType
  }

  export type GetAdMediaAggregateType<T extends AdMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateAdMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdMedia[P]>
      : GetScalarType<T[P], AggregateAdMedia[P]>
  }




  export type AdMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdMediaWhereInput
    orderBy?: AdMediaOrderByWithAggregationInput | AdMediaOrderByWithAggregationInput[]
    by: AdMediaScalarFieldEnum[] | AdMediaScalarFieldEnum
    having?: AdMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdMediaCountAggregateInputType | true
    _avg?: AdMediaAvgAggregateInputType
    _sum?: AdMediaSumAggregateInputType
    _min?: AdMediaMinAggregateInputType
    _max?: AdMediaMaxAggregateInputType
  }

  export type AdMediaGroupByOutputType = {
    id: number
    campaignId: number
    type: string
    path: string
    duration: number
    description: string | null
    _count: AdMediaCountAggregateOutputType | null
    _avg: AdMediaAvgAggregateOutputType | null
    _sum: AdMediaSumAggregateOutputType | null
    _min: AdMediaMinAggregateOutputType | null
    _max: AdMediaMaxAggregateOutputType | null
  }

  type GetAdMediaGroupByPayload<T extends AdMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdMediaGroupByOutputType[P]>
            : GetScalarType<T[P], AdMediaGroupByOutputType[P]>
        }
      >
    >


  export type AdMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    type?: boolean
    path?: boolean
    duration?: boolean
    description?: boolean
    campaign?: boolean | AdCampaignDefaultArgs<ExtArgs>
    playLogs?: boolean | AdMedia$playLogsArgs<ExtArgs>
    _count?: boolean | AdMediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adMedia"]>

  export type AdMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    type?: boolean
    path?: boolean
    duration?: boolean
    description?: boolean
    campaign?: boolean | AdCampaignDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adMedia"]>

  export type AdMediaSelectScalar = {
    id?: boolean
    campaignId?: boolean
    type?: boolean
    path?: boolean
    duration?: boolean
    description?: boolean
  }

  export type AdMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | AdCampaignDefaultArgs<ExtArgs>
    playLogs?: boolean | AdMedia$playLogsArgs<ExtArgs>
    _count?: boolean | AdMediaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | AdCampaignDefaultArgs<ExtArgs>
  }

  export type $AdMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdMedia"
    objects: {
      campaign: Prisma.$AdCampaignPayload<ExtArgs>
      playLogs: Prisma.$AdPlayLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campaignId: number
      type: string
      path: string
      duration: number
      description: string | null
    }, ExtArgs["result"]["adMedia"]>
    composites: {}
  }

  type AdMediaGetPayload<S extends boolean | null | undefined | AdMediaDefaultArgs> = $Result.GetResult<Prisma.$AdMediaPayload, S>

  type AdMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdMediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdMediaCountAggregateInputType | true
    }

  export interface AdMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdMedia'], meta: { name: 'AdMedia' } }
    /**
     * Find zero or one AdMedia that matches the filter.
     * @param {AdMediaFindUniqueArgs} args - Arguments to find a AdMedia
     * @example
     * // Get one AdMedia
     * const adMedia = await prisma.adMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdMediaFindUniqueArgs>(args: SelectSubset<T, AdMediaFindUniqueArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdMedia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdMediaFindUniqueOrThrowArgs} args - Arguments to find a AdMedia
     * @example
     * // Get one AdMedia
     * const adMedia = await prisma.adMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, AdMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdMediaFindFirstArgs} args - Arguments to find a AdMedia
     * @example
     * // Get one AdMedia
     * const adMedia = await prisma.adMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdMediaFindFirstArgs>(args?: SelectSubset<T, AdMediaFindFirstArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdMediaFindFirstOrThrowArgs} args - Arguments to find a AdMedia
     * @example
     * // Get one AdMedia
     * const adMedia = await prisma.adMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, AdMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdMedias
     * const adMedias = await prisma.adMedia.findMany()
     * 
     * // Get first 10 AdMedias
     * const adMedias = await prisma.adMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adMediaWithIdOnly = await prisma.adMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdMediaFindManyArgs>(args?: SelectSubset<T, AdMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdMedia.
     * @param {AdMediaCreateArgs} args - Arguments to create a AdMedia.
     * @example
     * // Create one AdMedia
     * const AdMedia = await prisma.adMedia.create({
     *   data: {
     *     // ... data to create a AdMedia
     *   }
     * })
     * 
     */
    create<T extends AdMediaCreateArgs>(args: SelectSubset<T, AdMediaCreateArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdMedias.
     * @param {AdMediaCreateManyArgs} args - Arguments to create many AdMedias.
     * @example
     * // Create many AdMedias
     * const adMedia = await prisma.adMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdMediaCreateManyArgs>(args?: SelectSubset<T, AdMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdMedias and returns the data saved in the database.
     * @param {AdMediaCreateManyAndReturnArgs} args - Arguments to create many AdMedias.
     * @example
     * // Create many AdMedias
     * const adMedia = await prisma.adMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdMedias and only return the `id`
     * const adMediaWithIdOnly = await prisma.adMedia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, AdMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdMedia.
     * @param {AdMediaDeleteArgs} args - Arguments to delete one AdMedia.
     * @example
     * // Delete one AdMedia
     * const AdMedia = await prisma.adMedia.delete({
     *   where: {
     *     // ... filter to delete one AdMedia
     *   }
     * })
     * 
     */
    delete<T extends AdMediaDeleteArgs>(args: SelectSubset<T, AdMediaDeleteArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdMedia.
     * @param {AdMediaUpdateArgs} args - Arguments to update one AdMedia.
     * @example
     * // Update one AdMedia
     * const adMedia = await prisma.adMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdMediaUpdateArgs>(args: SelectSubset<T, AdMediaUpdateArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdMedias.
     * @param {AdMediaDeleteManyArgs} args - Arguments to filter AdMedias to delete.
     * @example
     * // Delete a few AdMedias
     * const { count } = await prisma.adMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdMediaDeleteManyArgs>(args?: SelectSubset<T, AdMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdMedias
     * const adMedia = await prisma.adMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdMediaUpdateManyArgs>(args: SelectSubset<T, AdMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdMedia.
     * @param {AdMediaUpsertArgs} args - Arguments to update or create a AdMedia.
     * @example
     * // Update or create a AdMedia
     * const adMedia = await prisma.adMedia.upsert({
     *   create: {
     *     // ... data to create a AdMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdMedia we want to update
     *   }
     * })
     */
    upsert<T extends AdMediaUpsertArgs>(args: SelectSubset<T, AdMediaUpsertArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdMediaCountArgs} args - Arguments to filter AdMedias to count.
     * @example
     * // Count the number of AdMedias
     * const count = await prisma.adMedia.count({
     *   where: {
     *     // ... the filter for the AdMedias we want to count
     *   }
     * })
    **/
    count<T extends AdMediaCountArgs>(
      args?: Subset<T, AdMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdMediaAggregateArgs>(args: Subset<T, AdMediaAggregateArgs>): Prisma.PrismaPromise<GetAdMediaAggregateType<T>>

    /**
     * Group by AdMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdMediaGroupByArgs} args - Group by arguments.
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
      T extends AdMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdMediaGroupByArgs['orderBy'] }
        : { orderBy?: AdMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdMedia model
   */
  readonly fields: AdMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends AdCampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdCampaignDefaultArgs<ExtArgs>>): Prisma__AdCampaignClient<$Result.GetResult<Prisma.$AdCampaignPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    playLogs<T extends AdMedia$playLogsArgs<ExtArgs> = {}>(args?: Subset<T, AdMedia$playLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AdMedia model
   */ 
  interface AdMediaFieldRefs {
    readonly id: FieldRef<"AdMedia", 'Int'>
    readonly campaignId: FieldRef<"AdMedia", 'Int'>
    readonly type: FieldRef<"AdMedia", 'String'>
    readonly path: FieldRef<"AdMedia", 'String'>
    readonly duration: FieldRef<"AdMedia", 'Int'>
    readonly description: FieldRef<"AdMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdMedia findUnique
   */
  export type AdMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * Filter, which AdMedia to fetch.
     */
    where: AdMediaWhereUniqueInput
  }

  /**
   * AdMedia findUniqueOrThrow
   */
  export type AdMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * Filter, which AdMedia to fetch.
     */
    where: AdMediaWhereUniqueInput
  }

  /**
   * AdMedia findFirst
   */
  export type AdMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * Filter, which AdMedia to fetch.
     */
    where?: AdMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdMedias to fetch.
     */
    orderBy?: AdMediaOrderByWithRelationInput | AdMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdMedias.
     */
    cursor?: AdMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdMedias.
     */
    distinct?: AdMediaScalarFieldEnum | AdMediaScalarFieldEnum[]
  }

  /**
   * AdMedia findFirstOrThrow
   */
  export type AdMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * Filter, which AdMedia to fetch.
     */
    where?: AdMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdMedias to fetch.
     */
    orderBy?: AdMediaOrderByWithRelationInput | AdMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdMedias.
     */
    cursor?: AdMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdMedias.
     */
    distinct?: AdMediaScalarFieldEnum | AdMediaScalarFieldEnum[]
  }

  /**
   * AdMedia findMany
   */
  export type AdMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * Filter, which AdMedias to fetch.
     */
    where?: AdMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdMedias to fetch.
     */
    orderBy?: AdMediaOrderByWithRelationInput | AdMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdMedias.
     */
    cursor?: AdMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdMedias.
     */
    skip?: number
    distinct?: AdMediaScalarFieldEnum | AdMediaScalarFieldEnum[]
  }

  /**
   * AdMedia create
   */
  export type AdMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a AdMedia.
     */
    data: XOR<AdMediaCreateInput, AdMediaUncheckedCreateInput>
  }

  /**
   * AdMedia createMany
   */
  export type AdMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdMedias.
     */
    data: AdMediaCreateManyInput | AdMediaCreateManyInput[]
  }

  /**
   * AdMedia createManyAndReturn
   */
  export type AdMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdMedias.
     */
    data: AdMediaCreateManyInput | AdMediaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdMedia update
   */
  export type AdMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a AdMedia.
     */
    data: XOR<AdMediaUpdateInput, AdMediaUncheckedUpdateInput>
    /**
     * Choose, which AdMedia to update.
     */
    where: AdMediaWhereUniqueInput
  }

  /**
   * AdMedia updateMany
   */
  export type AdMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdMedias.
     */
    data: XOR<AdMediaUpdateManyMutationInput, AdMediaUncheckedUpdateManyInput>
    /**
     * Filter which AdMedias to update
     */
    where?: AdMediaWhereInput
  }

  /**
   * AdMedia upsert
   */
  export type AdMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the AdMedia to update in case it exists.
     */
    where: AdMediaWhereUniqueInput
    /**
     * In case the AdMedia found by the `where` argument doesn't exist, create a new AdMedia with this data.
     */
    create: XOR<AdMediaCreateInput, AdMediaUncheckedCreateInput>
    /**
     * In case the AdMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdMediaUpdateInput, AdMediaUncheckedUpdateInput>
  }

  /**
   * AdMedia delete
   */
  export type AdMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
    /**
     * Filter which AdMedia to delete.
     */
    where: AdMediaWhereUniqueInput
  }

  /**
   * AdMedia deleteMany
   */
  export type AdMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdMedias to delete
     */
    where?: AdMediaWhereInput
  }

  /**
   * AdMedia.playLogs
   */
  export type AdMedia$playLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    where?: AdPlayLogWhereInput
    orderBy?: AdPlayLogOrderByWithRelationInput | AdPlayLogOrderByWithRelationInput[]
    cursor?: AdPlayLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdPlayLogScalarFieldEnum | AdPlayLogScalarFieldEnum[]
  }

  /**
   * AdMedia without action
   */
  export type AdMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdMedia
     */
    select?: AdMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdMediaInclude<ExtArgs> | null
  }


  /**
   * Model AdPlayLog
   */

  export type AggregateAdPlayLog = {
    _count: AdPlayLogCountAggregateOutputType | null
    _avg: AdPlayLogAvgAggregateOutputType | null
    _sum: AdPlayLogSumAggregateOutputType | null
    _min: AdPlayLogMinAggregateOutputType | null
    _max: AdPlayLogMaxAggregateOutputType | null
  }

  export type AdPlayLogAvgAggregateOutputType = {
    id: number | null
    mediaId: number | null
    duration: number | null
  }

  export type AdPlayLogSumAggregateOutputType = {
    id: number | null
    mediaId: number | null
    duration: number | null
  }

  export type AdPlayLogMinAggregateOutputType = {
    id: number | null
    mediaId: number | null
    playedAt: Date | null
    duration: number | null
  }

  export type AdPlayLogMaxAggregateOutputType = {
    id: number | null
    mediaId: number | null
    playedAt: Date | null
    duration: number | null
  }

  export type AdPlayLogCountAggregateOutputType = {
    id: number
    mediaId: number
    playedAt: number
    duration: number
    _all: number
  }


  export type AdPlayLogAvgAggregateInputType = {
    id?: true
    mediaId?: true
    duration?: true
  }

  export type AdPlayLogSumAggregateInputType = {
    id?: true
    mediaId?: true
    duration?: true
  }

  export type AdPlayLogMinAggregateInputType = {
    id?: true
    mediaId?: true
    playedAt?: true
    duration?: true
  }

  export type AdPlayLogMaxAggregateInputType = {
    id?: true
    mediaId?: true
    playedAt?: true
    duration?: true
  }

  export type AdPlayLogCountAggregateInputType = {
    id?: true
    mediaId?: true
    playedAt?: true
    duration?: true
    _all?: true
  }

  export type AdPlayLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdPlayLog to aggregate.
     */
    where?: AdPlayLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPlayLogs to fetch.
     */
    orderBy?: AdPlayLogOrderByWithRelationInput | AdPlayLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdPlayLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPlayLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPlayLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdPlayLogs
    **/
    _count?: true | AdPlayLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdPlayLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdPlayLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdPlayLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdPlayLogMaxAggregateInputType
  }

  export type GetAdPlayLogAggregateType<T extends AdPlayLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdPlayLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdPlayLog[P]>
      : GetScalarType<T[P], AggregateAdPlayLog[P]>
  }




  export type AdPlayLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdPlayLogWhereInput
    orderBy?: AdPlayLogOrderByWithAggregationInput | AdPlayLogOrderByWithAggregationInput[]
    by: AdPlayLogScalarFieldEnum[] | AdPlayLogScalarFieldEnum
    having?: AdPlayLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdPlayLogCountAggregateInputType | true
    _avg?: AdPlayLogAvgAggregateInputType
    _sum?: AdPlayLogSumAggregateInputType
    _min?: AdPlayLogMinAggregateInputType
    _max?: AdPlayLogMaxAggregateInputType
  }

  export type AdPlayLogGroupByOutputType = {
    id: number
    mediaId: number
    playedAt: Date
    duration: number
    _count: AdPlayLogCountAggregateOutputType | null
    _avg: AdPlayLogAvgAggregateOutputType | null
    _sum: AdPlayLogSumAggregateOutputType | null
    _min: AdPlayLogMinAggregateOutputType | null
    _max: AdPlayLogMaxAggregateOutputType | null
  }

  type GetAdPlayLogGroupByPayload<T extends AdPlayLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdPlayLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdPlayLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdPlayLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdPlayLogGroupByOutputType[P]>
        }
      >
    >


  export type AdPlayLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaId?: boolean
    playedAt?: boolean
    duration?: boolean
    media?: boolean | AdMediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adPlayLog"]>

  export type AdPlayLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mediaId?: boolean
    playedAt?: boolean
    duration?: boolean
    media?: boolean | AdMediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adPlayLog"]>

  export type AdPlayLogSelectScalar = {
    id?: boolean
    mediaId?: boolean
    playedAt?: boolean
    duration?: boolean
  }

  export type AdPlayLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | AdMediaDefaultArgs<ExtArgs>
  }
  export type AdPlayLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | AdMediaDefaultArgs<ExtArgs>
  }

  export type $AdPlayLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdPlayLog"
    objects: {
      media: Prisma.$AdMediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mediaId: number
      playedAt: Date
      duration: number
    }, ExtArgs["result"]["adPlayLog"]>
    composites: {}
  }

  type AdPlayLogGetPayload<S extends boolean | null | undefined | AdPlayLogDefaultArgs> = $Result.GetResult<Prisma.$AdPlayLogPayload, S>

  type AdPlayLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdPlayLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdPlayLogCountAggregateInputType | true
    }

  export interface AdPlayLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdPlayLog'], meta: { name: 'AdPlayLog' } }
    /**
     * Find zero or one AdPlayLog that matches the filter.
     * @param {AdPlayLogFindUniqueArgs} args - Arguments to find a AdPlayLog
     * @example
     * // Get one AdPlayLog
     * const adPlayLog = await prisma.adPlayLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdPlayLogFindUniqueArgs>(args: SelectSubset<T, AdPlayLogFindUniqueArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdPlayLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdPlayLogFindUniqueOrThrowArgs} args - Arguments to find a AdPlayLog
     * @example
     * // Get one AdPlayLog
     * const adPlayLog = await prisma.adPlayLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdPlayLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdPlayLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdPlayLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPlayLogFindFirstArgs} args - Arguments to find a AdPlayLog
     * @example
     * // Get one AdPlayLog
     * const adPlayLog = await prisma.adPlayLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdPlayLogFindFirstArgs>(args?: SelectSubset<T, AdPlayLogFindFirstArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdPlayLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPlayLogFindFirstOrThrowArgs} args - Arguments to find a AdPlayLog
     * @example
     * // Get one AdPlayLog
     * const adPlayLog = await prisma.adPlayLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdPlayLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdPlayLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdPlayLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPlayLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdPlayLogs
     * const adPlayLogs = await prisma.adPlayLog.findMany()
     * 
     * // Get first 10 AdPlayLogs
     * const adPlayLogs = await prisma.adPlayLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adPlayLogWithIdOnly = await prisma.adPlayLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdPlayLogFindManyArgs>(args?: SelectSubset<T, AdPlayLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdPlayLog.
     * @param {AdPlayLogCreateArgs} args - Arguments to create a AdPlayLog.
     * @example
     * // Create one AdPlayLog
     * const AdPlayLog = await prisma.adPlayLog.create({
     *   data: {
     *     // ... data to create a AdPlayLog
     *   }
     * })
     * 
     */
    create<T extends AdPlayLogCreateArgs>(args: SelectSubset<T, AdPlayLogCreateArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdPlayLogs.
     * @param {AdPlayLogCreateManyArgs} args - Arguments to create many AdPlayLogs.
     * @example
     * // Create many AdPlayLogs
     * const adPlayLog = await prisma.adPlayLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdPlayLogCreateManyArgs>(args?: SelectSubset<T, AdPlayLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdPlayLogs and returns the data saved in the database.
     * @param {AdPlayLogCreateManyAndReturnArgs} args - Arguments to create many AdPlayLogs.
     * @example
     * // Create many AdPlayLogs
     * const adPlayLog = await prisma.adPlayLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdPlayLogs and only return the `id`
     * const adPlayLogWithIdOnly = await prisma.adPlayLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdPlayLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdPlayLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdPlayLog.
     * @param {AdPlayLogDeleteArgs} args - Arguments to delete one AdPlayLog.
     * @example
     * // Delete one AdPlayLog
     * const AdPlayLog = await prisma.adPlayLog.delete({
     *   where: {
     *     // ... filter to delete one AdPlayLog
     *   }
     * })
     * 
     */
    delete<T extends AdPlayLogDeleteArgs>(args: SelectSubset<T, AdPlayLogDeleteArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdPlayLog.
     * @param {AdPlayLogUpdateArgs} args - Arguments to update one AdPlayLog.
     * @example
     * // Update one AdPlayLog
     * const adPlayLog = await prisma.adPlayLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdPlayLogUpdateArgs>(args: SelectSubset<T, AdPlayLogUpdateArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdPlayLogs.
     * @param {AdPlayLogDeleteManyArgs} args - Arguments to filter AdPlayLogs to delete.
     * @example
     * // Delete a few AdPlayLogs
     * const { count } = await prisma.adPlayLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdPlayLogDeleteManyArgs>(args?: SelectSubset<T, AdPlayLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdPlayLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPlayLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdPlayLogs
     * const adPlayLog = await prisma.adPlayLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdPlayLogUpdateManyArgs>(args: SelectSubset<T, AdPlayLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdPlayLog.
     * @param {AdPlayLogUpsertArgs} args - Arguments to update or create a AdPlayLog.
     * @example
     * // Update or create a AdPlayLog
     * const adPlayLog = await prisma.adPlayLog.upsert({
     *   create: {
     *     // ... data to create a AdPlayLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdPlayLog we want to update
     *   }
     * })
     */
    upsert<T extends AdPlayLogUpsertArgs>(args: SelectSubset<T, AdPlayLogUpsertArgs<ExtArgs>>): Prisma__AdPlayLogClient<$Result.GetResult<Prisma.$AdPlayLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdPlayLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPlayLogCountArgs} args - Arguments to filter AdPlayLogs to count.
     * @example
     * // Count the number of AdPlayLogs
     * const count = await prisma.adPlayLog.count({
     *   where: {
     *     // ... the filter for the AdPlayLogs we want to count
     *   }
     * })
    **/
    count<T extends AdPlayLogCountArgs>(
      args?: Subset<T, AdPlayLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdPlayLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdPlayLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPlayLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdPlayLogAggregateArgs>(args: Subset<T, AdPlayLogAggregateArgs>): Prisma.PrismaPromise<GetAdPlayLogAggregateType<T>>

    /**
     * Group by AdPlayLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdPlayLogGroupByArgs} args - Group by arguments.
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
      T extends AdPlayLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdPlayLogGroupByArgs['orderBy'] }
        : { orderBy?: AdPlayLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdPlayLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdPlayLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdPlayLog model
   */
  readonly fields: AdPlayLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdPlayLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdPlayLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    media<T extends AdMediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdMediaDefaultArgs<ExtArgs>>): Prisma__AdMediaClient<$Result.GetResult<Prisma.$AdMediaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AdPlayLog model
   */ 
  interface AdPlayLogFieldRefs {
    readonly id: FieldRef<"AdPlayLog", 'Int'>
    readonly mediaId: FieldRef<"AdPlayLog", 'Int'>
    readonly playedAt: FieldRef<"AdPlayLog", 'DateTime'>
    readonly duration: FieldRef<"AdPlayLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AdPlayLog findUnique
   */
  export type AdPlayLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * Filter, which AdPlayLog to fetch.
     */
    where: AdPlayLogWhereUniqueInput
  }

  /**
   * AdPlayLog findUniqueOrThrow
   */
  export type AdPlayLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * Filter, which AdPlayLog to fetch.
     */
    where: AdPlayLogWhereUniqueInput
  }

  /**
   * AdPlayLog findFirst
   */
  export type AdPlayLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * Filter, which AdPlayLog to fetch.
     */
    where?: AdPlayLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPlayLogs to fetch.
     */
    orderBy?: AdPlayLogOrderByWithRelationInput | AdPlayLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdPlayLogs.
     */
    cursor?: AdPlayLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPlayLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPlayLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdPlayLogs.
     */
    distinct?: AdPlayLogScalarFieldEnum | AdPlayLogScalarFieldEnum[]
  }

  /**
   * AdPlayLog findFirstOrThrow
   */
  export type AdPlayLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * Filter, which AdPlayLog to fetch.
     */
    where?: AdPlayLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPlayLogs to fetch.
     */
    orderBy?: AdPlayLogOrderByWithRelationInput | AdPlayLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdPlayLogs.
     */
    cursor?: AdPlayLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPlayLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPlayLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdPlayLogs.
     */
    distinct?: AdPlayLogScalarFieldEnum | AdPlayLogScalarFieldEnum[]
  }

  /**
   * AdPlayLog findMany
   */
  export type AdPlayLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * Filter, which AdPlayLogs to fetch.
     */
    where?: AdPlayLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdPlayLogs to fetch.
     */
    orderBy?: AdPlayLogOrderByWithRelationInput | AdPlayLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdPlayLogs.
     */
    cursor?: AdPlayLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdPlayLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdPlayLogs.
     */
    skip?: number
    distinct?: AdPlayLogScalarFieldEnum | AdPlayLogScalarFieldEnum[]
  }

  /**
   * AdPlayLog create
   */
  export type AdPlayLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdPlayLog.
     */
    data: XOR<AdPlayLogCreateInput, AdPlayLogUncheckedCreateInput>
  }

  /**
   * AdPlayLog createMany
   */
  export type AdPlayLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdPlayLogs.
     */
    data: AdPlayLogCreateManyInput | AdPlayLogCreateManyInput[]
  }

  /**
   * AdPlayLog createManyAndReturn
   */
  export type AdPlayLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdPlayLogs.
     */
    data: AdPlayLogCreateManyInput | AdPlayLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdPlayLog update
   */
  export type AdPlayLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdPlayLog.
     */
    data: XOR<AdPlayLogUpdateInput, AdPlayLogUncheckedUpdateInput>
    /**
     * Choose, which AdPlayLog to update.
     */
    where: AdPlayLogWhereUniqueInput
  }

  /**
   * AdPlayLog updateMany
   */
  export type AdPlayLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdPlayLogs.
     */
    data: XOR<AdPlayLogUpdateManyMutationInput, AdPlayLogUncheckedUpdateManyInput>
    /**
     * Filter which AdPlayLogs to update
     */
    where?: AdPlayLogWhereInput
  }

  /**
   * AdPlayLog upsert
   */
  export type AdPlayLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdPlayLog to update in case it exists.
     */
    where: AdPlayLogWhereUniqueInput
    /**
     * In case the AdPlayLog found by the `where` argument doesn't exist, create a new AdPlayLog with this data.
     */
    create: XOR<AdPlayLogCreateInput, AdPlayLogUncheckedCreateInput>
    /**
     * In case the AdPlayLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdPlayLogUpdateInput, AdPlayLogUncheckedUpdateInput>
  }

  /**
   * AdPlayLog delete
   */
  export type AdPlayLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
    /**
     * Filter which AdPlayLog to delete.
     */
    where: AdPlayLogWhereUniqueInput
  }

  /**
   * AdPlayLog deleteMany
   */
  export type AdPlayLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdPlayLogs to delete
     */
    where?: AdPlayLogWhereInput
  }

  /**
   * AdPlayLog without action
   */
  export type AdPlayLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdPlayLog
     */
    select?: AdPlayLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdPlayLogInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    details: string | null
    timestamp: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    details: string | null
    timestamp: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    details: number
    timestamp: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    timestamp?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    timestamp?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    timestamp?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    userId: number | null
    action: string
    details: string | null
    timestamp: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    timestamp?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    timestamp?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    timestamp?: boolean
  }

  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      action: string
      details: string | null
      timestamp: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the AuditLog model
   */ 
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly timestamp: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Config
   */

  export type AggregateConfig = {
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  export type ConfigMinAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type ConfigMaxAggregateOutputType = {
    key: string | null
    value: string | null
  }

  export type ConfigCountAggregateOutputType = {
    key: number
    value: number
    _all: number
  }


  export type ConfigMinAggregateInputType = {
    key?: true
    value?: true
  }

  export type ConfigMaxAggregateInputType = {
    key?: true
    value?: true
  }

  export type ConfigCountAggregateInputType = {
    key?: true
    value?: true
    _all?: true
  }

  export type ConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Config to aggregate.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Configs
    **/
    _count?: true | ConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfigMaxAggregateInputType
  }

  export type GetConfigAggregateType<T extends ConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfig[P]>
      : GetScalarType<T[P], AggregateConfig[P]>
  }




  export type ConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfigWhereInput
    orderBy?: ConfigOrderByWithAggregationInput | ConfigOrderByWithAggregationInput[]
    by: ConfigScalarFieldEnum[] | ConfigScalarFieldEnum
    having?: ConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfigCountAggregateInputType | true
    _min?: ConfigMinAggregateInputType
    _max?: ConfigMaxAggregateInputType
  }

  export type ConfigGroupByOutputType = {
    key: string
    value: string
    _count: ConfigCountAggregateOutputType | null
    _min: ConfigMinAggregateOutputType | null
    _max: ConfigMaxAggregateOutputType | null
  }

  type GetConfigGroupByPayload<T extends ConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfigGroupByOutputType[P]>
            : GetScalarType<T[P], ConfigGroupByOutputType[P]>
        }
      >
    >


  export type ConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["config"]>

  export type ConfigSelectScalar = {
    key?: boolean
    value?: boolean
  }


  export type $ConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Config"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: string
    }, ExtArgs["result"]["config"]>
    composites: {}
  }

  type ConfigGetPayload<S extends boolean | null | undefined | ConfigDefaultArgs> = $Result.GetResult<Prisma.$ConfigPayload, S>

  type ConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConfigCountAggregateInputType | true
    }

  export interface ConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Config'], meta: { name: 'Config' } }
    /**
     * Find zero or one Config that matches the filter.
     * @param {ConfigFindUniqueArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfigFindUniqueArgs>(args: SelectSubset<T, ConfigFindUniqueArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Config that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConfigFindUniqueOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Config that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfigFindFirstArgs>(args?: SelectSubset<T, ConfigFindFirstArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Config that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindFirstOrThrowArgs} args - Arguments to find a Config
     * @example
     * // Get one Config
     * const config = await prisma.config.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Configs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Configs
     * const configs = await prisma.config.findMany()
     * 
     * // Get first 10 Configs
     * const configs = await prisma.config.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const configWithKeyOnly = await prisma.config.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends ConfigFindManyArgs>(args?: SelectSubset<T, ConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Config.
     * @param {ConfigCreateArgs} args - Arguments to create a Config.
     * @example
     * // Create one Config
     * const Config = await prisma.config.create({
     *   data: {
     *     // ... data to create a Config
     *   }
     * })
     * 
     */
    create<T extends ConfigCreateArgs>(args: SelectSubset<T, ConfigCreateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Configs.
     * @param {ConfigCreateManyArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfigCreateManyArgs>(args?: SelectSubset<T, ConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Configs and returns the data saved in the database.
     * @param {ConfigCreateManyAndReturnArgs} args - Arguments to create many Configs.
     * @example
     * // Create many Configs
     * const config = await prisma.config.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Configs and only return the `key`
     * const configWithKeyOnly = await prisma.config.createManyAndReturn({ 
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Config.
     * @param {ConfigDeleteArgs} args - Arguments to delete one Config.
     * @example
     * // Delete one Config
     * const Config = await prisma.config.delete({
     *   where: {
     *     // ... filter to delete one Config
     *   }
     * })
     * 
     */
    delete<T extends ConfigDeleteArgs>(args: SelectSubset<T, ConfigDeleteArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Config.
     * @param {ConfigUpdateArgs} args - Arguments to update one Config.
     * @example
     * // Update one Config
     * const config = await prisma.config.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfigUpdateArgs>(args: SelectSubset<T, ConfigUpdateArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Configs.
     * @param {ConfigDeleteManyArgs} args - Arguments to filter Configs to delete.
     * @example
     * // Delete a few Configs
     * const { count } = await prisma.config.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfigDeleteManyArgs>(args?: SelectSubset<T, ConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Configs
     * const config = await prisma.config.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfigUpdateManyArgs>(args: SelectSubset<T, ConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Config.
     * @param {ConfigUpsertArgs} args - Arguments to update or create a Config.
     * @example
     * // Update or create a Config
     * const config = await prisma.config.upsert({
     *   create: {
     *     // ... data to create a Config
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Config we want to update
     *   }
     * })
     */
    upsert<T extends ConfigUpsertArgs>(args: SelectSubset<T, ConfigUpsertArgs<ExtArgs>>): Prisma__ConfigClient<$Result.GetResult<Prisma.$ConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Configs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigCountArgs} args - Arguments to filter Configs to count.
     * @example
     * // Count the number of Configs
     * const count = await prisma.config.count({
     *   where: {
     *     // ... the filter for the Configs we want to count
     *   }
     * })
    **/
    count<T extends ConfigCountArgs>(
      args?: Subset<T, ConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfigAggregateArgs>(args: Subset<T, ConfigAggregateArgs>): Prisma.PrismaPromise<GetConfigAggregateType<T>>

    /**
     * Group by Config.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfigGroupByArgs} args - Group by arguments.
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
      T extends ConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfigGroupByArgs['orderBy'] }
        : { orderBy?: ConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Config model
   */
  readonly fields: ConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Config.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Config model
   */ 
  interface ConfigFieldRefs {
    readonly key: FieldRef<"Config", 'String'>
    readonly value: FieldRef<"Config", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Config findUnique
   */
  export type ConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findUniqueOrThrow
   */
  export type ConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config findFirst
   */
  export type ConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findFirstOrThrow
   */
  export type ConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Config to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Configs.
     */
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config findMany
   */
  export type ConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter, which Configs to fetch.
     */
    where?: ConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Configs to fetch.
     */
    orderBy?: ConfigOrderByWithRelationInput | ConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Configs.
     */
    cursor?: ConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Configs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Configs.
     */
    skip?: number
    distinct?: ConfigScalarFieldEnum | ConfigScalarFieldEnum[]
  }

  /**
   * Config create
   */
  export type ConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a Config.
     */
    data: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
  }

  /**
   * Config createMany
   */
  export type ConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
  }

  /**
   * Config createManyAndReturn
   */
  export type ConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Configs.
     */
    data: ConfigCreateManyInput | ConfigCreateManyInput[]
  }

  /**
   * Config update
   */
  export type ConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a Config.
     */
    data: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
    /**
     * Choose, which Config to update.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config updateMany
   */
  export type ConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Configs.
     */
    data: XOR<ConfigUpdateManyMutationInput, ConfigUncheckedUpdateManyInput>
    /**
     * Filter which Configs to update
     */
    where?: ConfigWhereInput
  }

  /**
   * Config upsert
   */
  export type ConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the Config to update in case it exists.
     */
    where: ConfigWhereUniqueInput
    /**
     * In case the Config found by the `where` argument doesn't exist, create a new Config with this data.
     */
    create: XOR<ConfigCreateInput, ConfigUncheckedCreateInput>
    /**
     * In case the Config was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfigUpdateInput, ConfigUncheckedUpdateInput>
  }

  /**
   * Config delete
   */
  export type ConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
    /**
     * Filter which Config to delete.
     */
    where: ConfigWhereUniqueInput
  }

  /**
   * Config deleteMany
   */
  export type ConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Configs to delete
     */
    where?: ConfigWhereInput
  }

  /**
   * Config without action
   */
  export type ConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Config
     */
    select?: ConfigSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TicketTypeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    priority: 'priority',
    group: 'group',
    active: 'active'
  };

  export type TicketTypeScalarFieldEnum = (typeof TicketTypeScalarFieldEnum)[keyof typeof TicketTypeScalarFieldEnum]


  export const DailyCounterScalarFieldEnum: {
    id: 'id',
    date: 'date',
    ticketTypeId: 'ticketTypeId',
    count: 'count'
  };

  export type DailyCounterScalarFieldEnum = (typeof DailyCounterScalarFieldEnum)[keyof typeof DailyCounterScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    number: 'number',
    code: 'code',
    status: 'status',
    issuedAt: 'issuedAt',
    calledAt: 'calledAt',
    finishedAt: 'finishedAt',
    ticketTypeId: 'ticketTypeId',
    counterId: 'counterId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const CounterScalarFieldEnum: {
    id: 'id',
    number: 'number',
    group: 'group',
    isHybrid: 'isHybrid'
  };

  export type CounterScalarFieldEnum = (typeof CounterScalarFieldEnum)[keyof typeof CounterScalarFieldEnum]


  export const AdCampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    active: 'active'
  };

  export type AdCampaignScalarFieldEnum = (typeof AdCampaignScalarFieldEnum)[keyof typeof AdCampaignScalarFieldEnum]


  export const AdMediaScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    type: 'type',
    path: 'path',
    duration: 'duration',
    description: 'description'
  };

  export type AdMediaScalarFieldEnum = (typeof AdMediaScalarFieldEnum)[keyof typeof AdMediaScalarFieldEnum]


  export const AdPlayLogScalarFieldEnum: {
    id: 'id',
    mediaId: 'mediaId',
    playedAt: 'playedAt',
    duration: 'duration'
  };

  export type AdPlayLogScalarFieldEnum = (typeof AdPlayLogScalarFieldEnum)[keyof typeof AdPlayLogScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    details: 'details',
    timestamp: 'timestamp'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const ConfigScalarFieldEnum: {
    key: 'key',
    value: 'value'
  };

  export type ConfigScalarFieldEnum = (typeof ConfigScalarFieldEnum)[keyof typeof ConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    logs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    logs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    logs?: AuditLogListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TicketTypeWhereInput = {
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    id?: IntFilter<"TicketType"> | number
    code?: StringFilter<"TicketType"> | string
    description?: StringFilter<"TicketType"> | string
    priority?: StringFilter<"TicketType"> | string
    group?: StringFilter<"TicketType"> | string
    active?: BoolFilter<"TicketType"> | boolean
    tickets?: TicketListRelationFilter
    dailyCounts?: DailyCounterListRelationFilter
  }

  export type TicketTypeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    group?: SortOrder
    active?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    dailyCounts?: DailyCounterOrderByRelationAggregateInput
  }

  export type TicketTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    description?: StringFilter<"TicketType"> | string
    priority?: StringFilter<"TicketType"> | string
    group?: StringFilter<"TicketType"> | string
    active?: BoolFilter<"TicketType"> | boolean
    tickets?: TicketListRelationFilter
    dailyCounts?: DailyCounterListRelationFilter
  }, "id" | "code">

  export type TicketTypeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    group?: SortOrder
    active?: SortOrder
    _count?: TicketTypeCountOrderByAggregateInput
    _avg?: TicketTypeAvgOrderByAggregateInput
    _max?: TicketTypeMaxOrderByAggregateInput
    _min?: TicketTypeMinOrderByAggregateInput
    _sum?: TicketTypeSumOrderByAggregateInput
  }

  export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    OR?: TicketTypeScalarWhereWithAggregatesInput[]
    NOT?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketType"> | number
    code?: StringWithAggregatesFilter<"TicketType"> | string
    description?: StringWithAggregatesFilter<"TicketType"> | string
    priority?: StringWithAggregatesFilter<"TicketType"> | string
    group?: StringWithAggregatesFilter<"TicketType"> | string
    active?: BoolWithAggregatesFilter<"TicketType"> | boolean
  }

  export type DailyCounterWhereInput = {
    AND?: DailyCounterWhereInput | DailyCounterWhereInput[]
    OR?: DailyCounterWhereInput[]
    NOT?: DailyCounterWhereInput | DailyCounterWhereInput[]
    id?: IntFilter<"DailyCounter"> | number
    date?: StringFilter<"DailyCounter"> | string
    ticketTypeId?: IntFilter<"DailyCounter"> | number
    count?: IntFilter<"DailyCounter"> | number
    ticketType?: XOR<TicketTypeRelationFilter, TicketTypeWhereInput>
  }

  export type DailyCounterOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    ticketTypeId?: SortOrder
    count?: SortOrder
    ticketType?: TicketTypeOrderByWithRelationInput
  }

  export type DailyCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date_ticketTypeId?: DailyCounterDateTicketTypeIdCompoundUniqueInput
    AND?: DailyCounterWhereInput | DailyCounterWhereInput[]
    OR?: DailyCounterWhereInput[]
    NOT?: DailyCounterWhereInput | DailyCounterWhereInput[]
    date?: StringFilter<"DailyCounter"> | string
    ticketTypeId?: IntFilter<"DailyCounter"> | number
    count?: IntFilter<"DailyCounter"> | number
    ticketType?: XOR<TicketTypeRelationFilter, TicketTypeWhereInput>
  }, "id" | "date_ticketTypeId">

  export type DailyCounterOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    ticketTypeId?: SortOrder
    count?: SortOrder
    _count?: DailyCounterCountOrderByAggregateInput
    _avg?: DailyCounterAvgOrderByAggregateInput
    _max?: DailyCounterMaxOrderByAggregateInput
    _min?: DailyCounterMinOrderByAggregateInput
    _sum?: DailyCounterSumOrderByAggregateInput
  }

  export type DailyCounterScalarWhereWithAggregatesInput = {
    AND?: DailyCounterScalarWhereWithAggregatesInput | DailyCounterScalarWhereWithAggregatesInput[]
    OR?: DailyCounterScalarWhereWithAggregatesInput[]
    NOT?: DailyCounterScalarWhereWithAggregatesInput | DailyCounterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyCounter"> | number
    date?: StringWithAggregatesFilter<"DailyCounter"> | string
    ticketTypeId?: IntWithAggregatesFilter<"DailyCounter"> | number
    count?: IntWithAggregatesFilter<"DailyCounter"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    number?: IntFilter<"Ticket"> | number
    code?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    issuedAt?: DateTimeFilter<"Ticket"> | Date | string
    calledAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticketTypeId?: IntFilter<"Ticket"> | number
    counterId?: IntNullableFilter<"Ticket"> | number | null
    ticketType?: XOR<TicketTypeRelationFilter, TicketTypeWhereInput>
    counter?: XOR<CounterNullableRelationFilter, CounterWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    calledAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    ticketTypeId?: SortOrder
    counterId?: SortOrderInput | SortOrder
    ticketType?: TicketTypeOrderByWithRelationInput
    counter?: CounterOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    number?: IntFilter<"Ticket"> | number
    code?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    issuedAt?: DateTimeFilter<"Ticket"> | Date | string
    calledAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticketTypeId?: IntFilter<"Ticket"> | number
    counterId?: IntNullableFilter<"Ticket"> | number | null
    ticketType?: XOR<TicketTypeRelationFilter, TicketTypeWhereInput>
    counter?: XOR<CounterNullableRelationFilter, CounterWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    calledAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    ticketTypeId?: SortOrder
    counterId?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    number?: IntWithAggregatesFilter<"Ticket"> | number
    code?: StringWithAggregatesFilter<"Ticket"> | string
    status?: StringWithAggregatesFilter<"Ticket"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    calledAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    ticketTypeId?: IntWithAggregatesFilter<"Ticket"> | number
    counterId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
  }

  export type CounterWhereInput = {
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    id?: IntFilter<"Counter"> | number
    number?: IntFilter<"Counter"> | number
    group?: StringNullableFilter<"Counter"> | string | null
    isHybrid?: BoolFilter<"Counter"> | boolean
    tickets?: TicketListRelationFilter
  }

  export type CounterOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    group?: SortOrderInput | SortOrder
    isHybrid?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type CounterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: number
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    group?: StringNullableFilter<"Counter"> | string | null
    isHybrid?: BoolFilter<"Counter"> | boolean
    tickets?: TicketListRelationFilter
  }, "id" | "number">

  export type CounterOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    group?: SortOrderInput | SortOrder
    isHybrid?: SortOrder
    _count?: CounterCountOrderByAggregateInput
    _avg?: CounterAvgOrderByAggregateInput
    _max?: CounterMaxOrderByAggregateInput
    _min?: CounterMinOrderByAggregateInput
    _sum?: CounterSumOrderByAggregateInput
  }

  export type CounterScalarWhereWithAggregatesInput = {
    AND?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    OR?: CounterScalarWhereWithAggregatesInput[]
    NOT?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Counter"> | number
    number?: IntWithAggregatesFilter<"Counter"> | number
    group?: StringNullableWithAggregatesFilter<"Counter"> | string | null
    isHybrid?: BoolWithAggregatesFilter<"Counter"> | boolean
  }

  export type AdCampaignWhereInput = {
    AND?: AdCampaignWhereInput | AdCampaignWhereInput[]
    OR?: AdCampaignWhereInput[]
    NOT?: AdCampaignWhereInput | AdCampaignWhereInput[]
    id?: IntFilter<"AdCampaign"> | number
    name?: StringFilter<"AdCampaign"> | string
    startDate?: DateTimeFilter<"AdCampaign"> | Date | string
    endDate?: DateTimeFilter<"AdCampaign"> | Date | string
    active?: BoolFilter<"AdCampaign"> | boolean
    medias?: AdMediaListRelationFilter
  }

  export type AdCampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    medias?: AdMediaOrderByRelationAggregateInput
  }

  export type AdCampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdCampaignWhereInput | AdCampaignWhereInput[]
    OR?: AdCampaignWhereInput[]
    NOT?: AdCampaignWhereInput | AdCampaignWhereInput[]
    name?: StringFilter<"AdCampaign"> | string
    startDate?: DateTimeFilter<"AdCampaign"> | Date | string
    endDate?: DateTimeFilter<"AdCampaign"> | Date | string
    active?: BoolFilter<"AdCampaign"> | boolean
    medias?: AdMediaListRelationFilter
  }, "id">

  export type AdCampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
    _count?: AdCampaignCountOrderByAggregateInput
    _avg?: AdCampaignAvgOrderByAggregateInput
    _max?: AdCampaignMaxOrderByAggregateInput
    _min?: AdCampaignMinOrderByAggregateInput
    _sum?: AdCampaignSumOrderByAggregateInput
  }

  export type AdCampaignScalarWhereWithAggregatesInput = {
    AND?: AdCampaignScalarWhereWithAggregatesInput | AdCampaignScalarWhereWithAggregatesInput[]
    OR?: AdCampaignScalarWhereWithAggregatesInput[]
    NOT?: AdCampaignScalarWhereWithAggregatesInput | AdCampaignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdCampaign"> | number
    name?: StringWithAggregatesFilter<"AdCampaign"> | string
    startDate?: DateTimeWithAggregatesFilter<"AdCampaign"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"AdCampaign"> | Date | string
    active?: BoolWithAggregatesFilter<"AdCampaign"> | boolean
  }

  export type AdMediaWhereInput = {
    AND?: AdMediaWhereInput | AdMediaWhereInput[]
    OR?: AdMediaWhereInput[]
    NOT?: AdMediaWhereInput | AdMediaWhereInput[]
    id?: IntFilter<"AdMedia"> | number
    campaignId?: IntFilter<"AdMedia"> | number
    type?: StringFilter<"AdMedia"> | string
    path?: StringFilter<"AdMedia"> | string
    duration?: IntFilter<"AdMedia"> | number
    description?: StringNullableFilter<"AdMedia"> | string | null
    campaign?: XOR<AdCampaignRelationFilter, AdCampaignWhereInput>
    playLogs?: AdPlayLogListRelationFilter
  }

  export type AdMediaOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    description?: SortOrderInput | SortOrder
    campaign?: AdCampaignOrderByWithRelationInput
    playLogs?: AdPlayLogOrderByRelationAggregateInput
  }

  export type AdMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdMediaWhereInput | AdMediaWhereInput[]
    OR?: AdMediaWhereInput[]
    NOT?: AdMediaWhereInput | AdMediaWhereInput[]
    campaignId?: IntFilter<"AdMedia"> | number
    type?: StringFilter<"AdMedia"> | string
    path?: StringFilter<"AdMedia"> | string
    duration?: IntFilter<"AdMedia"> | number
    description?: StringNullableFilter<"AdMedia"> | string | null
    campaign?: XOR<AdCampaignRelationFilter, AdCampaignWhereInput>
    playLogs?: AdPlayLogListRelationFilter
  }, "id">

  export type AdMediaOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: AdMediaCountOrderByAggregateInput
    _avg?: AdMediaAvgOrderByAggregateInput
    _max?: AdMediaMaxOrderByAggregateInput
    _min?: AdMediaMinOrderByAggregateInput
    _sum?: AdMediaSumOrderByAggregateInput
  }

  export type AdMediaScalarWhereWithAggregatesInput = {
    AND?: AdMediaScalarWhereWithAggregatesInput | AdMediaScalarWhereWithAggregatesInput[]
    OR?: AdMediaScalarWhereWithAggregatesInput[]
    NOT?: AdMediaScalarWhereWithAggregatesInput | AdMediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdMedia"> | number
    campaignId?: IntWithAggregatesFilter<"AdMedia"> | number
    type?: StringWithAggregatesFilter<"AdMedia"> | string
    path?: StringWithAggregatesFilter<"AdMedia"> | string
    duration?: IntWithAggregatesFilter<"AdMedia"> | number
    description?: StringNullableWithAggregatesFilter<"AdMedia"> | string | null
  }

  export type AdPlayLogWhereInput = {
    AND?: AdPlayLogWhereInput | AdPlayLogWhereInput[]
    OR?: AdPlayLogWhereInput[]
    NOT?: AdPlayLogWhereInput | AdPlayLogWhereInput[]
    id?: IntFilter<"AdPlayLog"> | number
    mediaId?: IntFilter<"AdPlayLog"> | number
    playedAt?: DateTimeFilter<"AdPlayLog"> | Date | string
    duration?: IntFilter<"AdPlayLog"> | number
    media?: XOR<AdMediaRelationFilter, AdMediaWhereInput>
  }

  export type AdPlayLogOrderByWithRelationInput = {
    id?: SortOrder
    mediaId?: SortOrder
    playedAt?: SortOrder
    duration?: SortOrder
    media?: AdMediaOrderByWithRelationInput
  }

  export type AdPlayLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdPlayLogWhereInput | AdPlayLogWhereInput[]
    OR?: AdPlayLogWhereInput[]
    NOT?: AdPlayLogWhereInput | AdPlayLogWhereInput[]
    mediaId?: IntFilter<"AdPlayLog"> | number
    playedAt?: DateTimeFilter<"AdPlayLog"> | Date | string
    duration?: IntFilter<"AdPlayLog"> | number
    media?: XOR<AdMediaRelationFilter, AdMediaWhereInput>
  }, "id">

  export type AdPlayLogOrderByWithAggregationInput = {
    id?: SortOrder
    mediaId?: SortOrder
    playedAt?: SortOrder
    duration?: SortOrder
    _count?: AdPlayLogCountOrderByAggregateInput
    _avg?: AdPlayLogAvgOrderByAggregateInput
    _max?: AdPlayLogMaxOrderByAggregateInput
    _min?: AdPlayLogMinOrderByAggregateInput
    _sum?: AdPlayLogSumOrderByAggregateInput
  }

  export type AdPlayLogScalarWhereWithAggregatesInput = {
    AND?: AdPlayLogScalarWhereWithAggregatesInput | AdPlayLogScalarWhereWithAggregatesInput[]
    OR?: AdPlayLogScalarWhereWithAggregatesInput[]
    NOT?: AdPlayLogScalarWhereWithAggregatesInput | AdPlayLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdPlayLog"> | number
    mediaId?: IntWithAggregatesFilter<"AdPlayLog"> | number
    playedAt?: DateTimeWithAggregatesFilter<"AdPlayLog"> | Date | string
    duration?: IntWithAggregatesFilter<"AdPlayLog"> | number
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    userId?: IntNullableWithAggregatesFilter<"AuditLog"> | number | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type ConfigWhereInput = {
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    key?: StringFilter<"Config"> | string
    value?: StringFilter<"Config"> | string
  }

  export type ConfigOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type ConfigWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: ConfigWhereInput | ConfigWhereInput[]
    OR?: ConfigWhereInput[]
    NOT?: ConfigWhereInput | ConfigWhereInput[]
    value?: StringFilter<"Config"> | string
  }, "key">

  export type ConfigOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    _count?: ConfigCountOrderByAggregateInput
    _max?: ConfigMaxOrderByAggregateInput
    _min?: ConfigMinOrderByAggregateInput
  }

  export type ConfigScalarWhereWithAggregatesInput = {
    AND?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    OR?: ConfigScalarWhereWithAggregatesInput[]
    NOT?: ConfigScalarWhereWithAggregatesInput | ConfigScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"Config"> | string
    value?: StringWithAggregatesFilter<"Config"> | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeCreateInput = {
    code: string
    description: string
    priority: string
    group: string
    active?: boolean
    tickets?: TicketCreateNestedManyWithoutTicketTypeInput
    dailyCounts?: DailyCounterCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateInput = {
    id?: number
    code: string
    description: string
    priority: string
    group: string
    active?: boolean
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketTypeInput
    dailyCounts?: DailyCounterUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUpdateManyWithoutTicketTypeNestedInput
    dailyCounts?: DailyCounterUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUncheckedUpdateManyWithoutTicketTypeNestedInput
    dailyCounts?: DailyCounterUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeCreateManyInput = {
    id?: number
    code: string
    description: string
    priority: string
    group: string
    active?: boolean
  }

  export type TicketTypeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TicketTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DailyCounterCreateInput = {
    date: string
    count?: number
    ticketType: TicketTypeCreateNestedOneWithoutDailyCountsInput
  }

  export type DailyCounterUncheckedCreateInput = {
    id?: number
    date: string
    ticketTypeId: number
    count?: number
  }

  export type DailyCounterUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    ticketType?: TicketTypeUpdateOneRequiredWithoutDailyCountsNestedInput
  }

  export type DailyCounterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DailyCounterCreateManyInput = {
    id?: number
    date: string
    ticketTypeId: number
    count?: number
  }

  export type DailyCounterUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DailyCounterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    ticketType: TicketTypeCreateNestedOneWithoutTicketsInput
    counter?: CounterCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    ticketTypeId: number
    counterId?: number | null
  }

  export type TicketUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketType?: TicketTypeUpdateOneRequiredWithoutTicketsNestedInput
    counter?: CounterUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    counterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketCreateManyInput = {
    id?: number
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    ticketTypeId: number
    counterId?: number | null
  }

  export type TicketUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTypeId?: IntFieldUpdateOperationsInput | number
    counterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CounterCreateInput = {
    number: number
    group?: string | null
    isHybrid?: boolean
    tickets?: TicketCreateNestedManyWithoutCounterInput
  }

  export type CounterUncheckedCreateInput = {
    id?: number
    number: number
    group?: string | null
    isHybrid?: boolean
    tickets?: TicketUncheckedCreateNestedManyWithoutCounterInput
  }

  export type CounterUpdateInput = {
    number?: IntFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    isHybrid?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUpdateManyWithoutCounterNestedInput
  }

  export type CounterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    isHybrid?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUncheckedUpdateManyWithoutCounterNestedInput
  }

  export type CounterCreateManyInput = {
    id?: number
    number: number
    group?: string | null
    isHybrid?: boolean
  }

  export type CounterUpdateManyMutationInput = {
    number?: IntFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    isHybrid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CounterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    isHybrid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdCampaignCreateInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    active?: boolean
    medias?: AdMediaCreateNestedManyWithoutCampaignInput
  }

  export type AdCampaignUncheckedCreateInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    active?: boolean
    medias?: AdMediaUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type AdCampaignUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    medias?: AdMediaUpdateManyWithoutCampaignNestedInput
  }

  export type AdCampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    medias?: AdMediaUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type AdCampaignCreateManyInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    active?: boolean
  }

  export type AdCampaignUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdCampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdMediaCreateInput = {
    type: string
    path: string
    duration: number
    description?: string | null
    campaign: AdCampaignCreateNestedOneWithoutMediasInput
    playLogs?: AdPlayLogCreateNestedManyWithoutMediaInput
  }

  export type AdMediaUncheckedCreateInput = {
    id?: number
    campaignId: number
    type: string
    path: string
    duration: number
    description?: string | null
    playLogs?: AdPlayLogUncheckedCreateNestedManyWithoutMediaInput
  }

  export type AdMediaUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: AdCampaignUpdateOneRequiredWithoutMediasNestedInput
    playLogs?: AdPlayLogUpdateManyWithoutMediaNestedInput
  }

  export type AdMediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    playLogs?: AdPlayLogUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type AdMediaCreateManyInput = {
    id?: number
    campaignId: number
    type: string
    path: string
    duration: number
    description?: string | null
  }

  export type AdMediaUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdMediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdPlayLogCreateInput = {
    playedAt?: Date | string
    duration: number
    media: AdMediaCreateNestedOneWithoutPlayLogsInput
  }

  export type AdPlayLogUncheckedCreateInput = {
    id?: number
    mediaId: number
    playedAt?: Date | string
    duration: number
  }

  export type AdPlayLogUpdateInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    media?: AdMediaUpdateOneRequiredWithoutPlayLogsNestedInput
  }

  export type AdPlayLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AdPlayLogCreateManyInput = {
    id?: number
    mediaId: number
    playedAt?: Date | string
    duration: number
  }

  export type AdPlayLogUpdateManyMutationInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AdPlayLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mediaId?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AuditLogCreateInput = {
    action: string
    details?: string | null
    timestamp?: Date | string
    user?: UserCreateNestedOneWithoutLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    userId?: number | null
    action: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    userId?: number | null
    action: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConfigCreateInput = {
    key: string
    value: string
  }

  export type ConfigUncheckedCreateInput = {
    key: string
    value: string
  }

  export type ConfigUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigCreateManyInput = {
    key: string
    value: string
  }

  export type ConfigUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ConfigUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type DailyCounterListRelationFilter = {
    every?: DailyCounterWhereInput
    some?: DailyCounterWhereInput
    none?: DailyCounterWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyCounterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketTypeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    group?: SortOrder
    active?: SortOrder
  }

  export type TicketTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    group?: SortOrder
    active?: SortOrder
  }

  export type TicketTypeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    group?: SortOrder
    active?: SortOrder
  }

  export type TicketTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TicketTypeRelationFilter = {
    is?: TicketTypeWhereInput
    isNot?: TicketTypeWhereInput
  }

  export type DailyCounterDateTicketTypeIdCompoundUniqueInput = {
    date: string
    ticketTypeId: number
  }

  export type DailyCounterCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ticketTypeId?: SortOrder
    count?: SortOrder
  }

  export type DailyCounterAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketTypeId?: SortOrder
    count?: SortOrder
  }

  export type DailyCounterMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ticketTypeId?: SortOrder
    count?: SortOrder
  }

  export type DailyCounterMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    ticketTypeId?: SortOrder
    count?: SortOrder
  }

  export type DailyCounterSumOrderByAggregateInput = {
    id?: SortOrder
    ticketTypeId?: SortOrder
    count?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CounterNullableRelationFilter = {
    is?: CounterWhereInput | null
    isNot?: CounterWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    calledAt?: SortOrder
    finishedAt?: SortOrder
    ticketTypeId?: SortOrder
    counterId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    ticketTypeId?: SortOrder
    counterId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    calledAt?: SortOrder
    finishedAt?: SortOrder
    ticketTypeId?: SortOrder
    counterId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    code?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    calledAt?: SortOrder
    finishedAt?: SortOrder
    ticketTypeId?: SortOrder
    counterId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    ticketTypeId?: SortOrder
    counterId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CounterCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    group?: SortOrder
    isHybrid?: SortOrder
  }

  export type CounterAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type CounterMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    group?: SortOrder
    isHybrid?: SortOrder
  }

  export type CounterMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    group?: SortOrder
    isHybrid?: SortOrder
  }

  export type CounterSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AdMediaListRelationFilter = {
    every?: AdMediaWhereInput
    some?: AdMediaWhereInput
    none?: AdMediaWhereInput
  }

  export type AdMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdCampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
  }

  export type AdCampaignAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdCampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
  }

  export type AdCampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    active?: SortOrder
  }

  export type AdCampaignSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdCampaignRelationFilter = {
    is?: AdCampaignWhereInput
    isNot?: AdCampaignWhereInput
  }

  export type AdPlayLogListRelationFilter = {
    every?: AdPlayLogWhereInput
    some?: AdPlayLogWhereInput
    none?: AdPlayLogWhereInput
  }

  export type AdPlayLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdMediaCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    description?: SortOrder
  }

  export type AdMediaAvgOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    duration?: SortOrder
  }

  export type AdMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    description?: SortOrder
  }

  export type AdMediaMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    type?: SortOrder
    path?: SortOrder
    duration?: SortOrder
    description?: SortOrder
  }

  export type AdMediaSumOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    duration?: SortOrder
  }

  export type AdMediaRelationFilter = {
    is?: AdMediaWhereInput
    isNot?: AdMediaWhereInput
  }

  export type AdPlayLogCountOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    playedAt?: SortOrder
    duration?: SortOrder
  }

  export type AdPlayLogAvgOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    duration?: SortOrder
  }

  export type AdPlayLogMaxOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    playedAt?: SortOrder
    duration?: SortOrder
  }

  export type AdPlayLogMinOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    playedAt?: SortOrder
    duration?: SortOrder
  }

  export type AdPlayLogSumOrderByAggregateInput = {
    id?: SortOrder
    mediaId?: SortOrder
    duration?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    timestamp?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ConfigCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type ConfigMaxOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type ConfigMinOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type DailyCounterCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<DailyCounterCreateWithoutTicketTypeInput, DailyCounterUncheckedCreateWithoutTicketTypeInput> | DailyCounterCreateWithoutTicketTypeInput[] | DailyCounterUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: DailyCounterCreateOrConnectWithoutTicketTypeInput | DailyCounterCreateOrConnectWithoutTicketTypeInput[]
    createMany?: DailyCounterCreateManyTicketTypeInputEnvelope
    connect?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type DailyCounterUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<DailyCounterCreateWithoutTicketTypeInput, DailyCounterUncheckedCreateWithoutTicketTypeInput> | DailyCounterCreateWithoutTicketTypeInput[] | DailyCounterUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: DailyCounterCreateOrConnectWithoutTicketTypeInput | DailyCounterCreateOrConnectWithoutTicketTypeInput[]
    createMany?: DailyCounterCreateManyTicketTypeInputEnvelope
    connect?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TicketUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketTypeInput | TicketUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketTypeInput | TicketUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketTypeInput | TicketUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type DailyCounterUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<DailyCounterCreateWithoutTicketTypeInput, DailyCounterUncheckedCreateWithoutTicketTypeInput> | DailyCounterCreateWithoutTicketTypeInput[] | DailyCounterUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: DailyCounterCreateOrConnectWithoutTicketTypeInput | DailyCounterCreateOrConnectWithoutTicketTypeInput[]
    upsert?: DailyCounterUpsertWithWhereUniqueWithoutTicketTypeInput | DailyCounterUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: DailyCounterCreateManyTicketTypeInputEnvelope
    set?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    disconnect?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    delete?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    connect?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    update?: DailyCounterUpdateWithWhereUniqueWithoutTicketTypeInput | DailyCounterUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: DailyCounterUpdateManyWithWhereWithoutTicketTypeInput | DailyCounterUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: DailyCounterScalarWhereInput | DailyCounterScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput> | TicketCreateWithoutTicketTypeInput[] | TicketUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketTypeInput | TicketCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketTypeInput | TicketUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TicketCreateManyTicketTypeInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketTypeInput | TicketUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketTypeInput | TicketUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type DailyCounterUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<DailyCounterCreateWithoutTicketTypeInput, DailyCounterUncheckedCreateWithoutTicketTypeInput> | DailyCounterCreateWithoutTicketTypeInput[] | DailyCounterUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: DailyCounterCreateOrConnectWithoutTicketTypeInput | DailyCounterCreateOrConnectWithoutTicketTypeInput[]
    upsert?: DailyCounterUpsertWithWhereUniqueWithoutTicketTypeInput | DailyCounterUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: DailyCounterCreateManyTicketTypeInputEnvelope
    set?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    disconnect?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    delete?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    connect?: DailyCounterWhereUniqueInput | DailyCounterWhereUniqueInput[]
    update?: DailyCounterUpdateWithWhereUniqueWithoutTicketTypeInput | DailyCounterUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: DailyCounterUpdateManyWithWhereWithoutTicketTypeInput | DailyCounterUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: DailyCounterScalarWhereInput | DailyCounterScalarWhereInput[]
  }

  export type TicketTypeCreateNestedOneWithoutDailyCountsInput = {
    create?: XOR<TicketTypeCreateWithoutDailyCountsInput, TicketTypeUncheckedCreateWithoutDailyCountsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutDailyCountsInput
    connect?: TicketTypeWhereUniqueInput
  }

  export type TicketTypeUpdateOneRequiredWithoutDailyCountsNestedInput = {
    create?: XOR<TicketTypeCreateWithoutDailyCountsInput, TicketTypeUncheckedCreateWithoutDailyCountsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutDailyCountsInput
    upsert?: TicketTypeUpsertWithoutDailyCountsInput
    connect?: TicketTypeWhereUniqueInput
    update?: XOR<XOR<TicketTypeUpdateToOneWithWhereWithoutDailyCountsInput, TicketTypeUpdateWithoutDailyCountsInput>, TicketTypeUncheckedUpdateWithoutDailyCountsInput>
  }

  export type TicketTypeCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketsInput
    connect?: TicketTypeWhereUniqueInput
  }

  export type CounterCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CounterCreateWithoutTicketsInput, CounterUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CounterCreateOrConnectWithoutTicketsInput
    connect?: CounterWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TicketTypeUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTicketsInput
    upsert?: TicketTypeUpsertWithoutTicketsInput
    connect?: TicketTypeWhereUniqueInput
    update?: XOR<XOR<TicketTypeUpdateToOneWithWhereWithoutTicketsInput, TicketTypeUpdateWithoutTicketsInput>, TicketTypeUncheckedUpdateWithoutTicketsInput>
  }

  export type CounterUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<CounterCreateWithoutTicketsInput, CounterUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CounterCreateOrConnectWithoutTicketsInput
    upsert?: CounterUpsertWithoutTicketsInput
    disconnect?: CounterWhereInput | boolean
    delete?: CounterWhereInput | boolean
    connect?: CounterWhereUniqueInput
    update?: XOR<XOR<CounterUpdateToOneWithWhereWithoutTicketsInput, CounterUpdateWithoutTicketsInput>, CounterUncheckedUpdateWithoutTicketsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketCreateNestedManyWithoutCounterInput = {
    create?: XOR<TicketCreateWithoutCounterInput, TicketUncheckedCreateWithoutCounterInput> | TicketCreateWithoutCounterInput[] | TicketUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCounterInput | TicketCreateOrConnectWithoutCounterInput[]
    createMany?: TicketCreateManyCounterInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCounterInput = {
    create?: XOR<TicketCreateWithoutCounterInput, TicketUncheckedCreateWithoutCounterInput> | TicketCreateWithoutCounterInput[] | TicketUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCounterInput | TicketCreateOrConnectWithoutCounterInput[]
    createMany?: TicketCreateManyCounterInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TicketUpdateManyWithoutCounterNestedInput = {
    create?: XOR<TicketCreateWithoutCounterInput, TicketUncheckedCreateWithoutCounterInput> | TicketCreateWithoutCounterInput[] | TicketUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCounterInput | TicketCreateOrConnectWithoutCounterInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCounterInput | TicketUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: TicketCreateManyCounterInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCounterInput | TicketUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCounterInput | TicketUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCounterNestedInput = {
    create?: XOR<TicketCreateWithoutCounterInput, TicketUncheckedCreateWithoutCounterInput> | TicketCreateWithoutCounterInput[] | TicketUncheckedCreateWithoutCounterInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCounterInput | TicketCreateOrConnectWithoutCounterInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCounterInput | TicketUpsertWithWhereUniqueWithoutCounterInput[]
    createMany?: TicketCreateManyCounterInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCounterInput | TicketUpdateWithWhereUniqueWithoutCounterInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCounterInput | TicketUpdateManyWithWhereWithoutCounterInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AdMediaCreateNestedManyWithoutCampaignInput = {
    create?: XOR<AdMediaCreateWithoutCampaignInput, AdMediaUncheckedCreateWithoutCampaignInput> | AdMediaCreateWithoutCampaignInput[] | AdMediaUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdMediaCreateOrConnectWithoutCampaignInput | AdMediaCreateOrConnectWithoutCampaignInput[]
    createMany?: AdMediaCreateManyCampaignInputEnvelope
    connect?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
  }

  export type AdMediaUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<AdMediaCreateWithoutCampaignInput, AdMediaUncheckedCreateWithoutCampaignInput> | AdMediaCreateWithoutCampaignInput[] | AdMediaUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdMediaCreateOrConnectWithoutCampaignInput | AdMediaCreateOrConnectWithoutCampaignInput[]
    createMany?: AdMediaCreateManyCampaignInputEnvelope
    connect?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
  }

  export type AdMediaUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<AdMediaCreateWithoutCampaignInput, AdMediaUncheckedCreateWithoutCampaignInput> | AdMediaCreateWithoutCampaignInput[] | AdMediaUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdMediaCreateOrConnectWithoutCampaignInput | AdMediaCreateOrConnectWithoutCampaignInput[]
    upsert?: AdMediaUpsertWithWhereUniqueWithoutCampaignInput | AdMediaUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: AdMediaCreateManyCampaignInputEnvelope
    set?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    disconnect?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    delete?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    connect?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    update?: AdMediaUpdateWithWhereUniqueWithoutCampaignInput | AdMediaUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: AdMediaUpdateManyWithWhereWithoutCampaignInput | AdMediaUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: AdMediaScalarWhereInput | AdMediaScalarWhereInput[]
  }

  export type AdMediaUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<AdMediaCreateWithoutCampaignInput, AdMediaUncheckedCreateWithoutCampaignInput> | AdMediaCreateWithoutCampaignInput[] | AdMediaUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: AdMediaCreateOrConnectWithoutCampaignInput | AdMediaCreateOrConnectWithoutCampaignInput[]
    upsert?: AdMediaUpsertWithWhereUniqueWithoutCampaignInput | AdMediaUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: AdMediaCreateManyCampaignInputEnvelope
    set?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    disconnect?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    delete?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    connect?: AdMediaWhereUniqueInput | AdMediaWhereUniqueInput[]
    update?: AdMediaUpdateWithWhereUniqueWithoutCampaignInput | AdMediaUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: AdMediaUpdateManyWithWhereWithoutCampaignInput | AdMediaUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: AdMediaScalarWhereInput | AdMediaScalarWhereInput[]
  }

  export type AdCampaignCreateNestedOneWithoutMediasInput = {
    create?: XOR<AdCampaignCreateWithoutMediasInput, AdCampaignUncheckedCreateWithoutMediasInput>
    connectOrCreate?: AdCampaignCreateOrConnectWithoutMediasInput
    connect?: AdCampaignWhereUniqueInput
  }

  export type AdPlayLogCreateNestedManyWithoutMediaInput = {
    create?: XOR<AdPlayLogCreateWithoutMediaInput, AdPlayLogUncheckedCreateWithoutMediaInput> | AdPlayLogCreateWithoutMediaInput[] | AdPlayLogUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdPlayLogCreateOrConnectWithoutMediaInput | AdPlayLogCreateOrConnectWithoutMediaInput[]
    createMany?: AdPlayLogCreateManyMediaInputEnvelope
    connect?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
  }

  export type AdPlayLogUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<AdPlayLogCreateWithoutMediaInput, AdPlayLogUncheckedCreateWithoutMediaInput> | AdPlayLogCreateWithoutMediaInput[] | AdPlayLogUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdPlayLogCreateOrConnectWithoutMediaInput | AdPlayLogCreateOrConnectWithoutMediaInput[]
    createMany?: AdPlayLogCreateManyMediaInputEnvelope
    connect?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
  }

  export type AdCampaignUpdateOneRequiredWithoutMediasNestedInput = {
    create?: XOR<AdCampaignCreateWithoutMediasInput, AdCampaignUncheckedCreateWithoutMediasInput>
    connectOrCreate?: AdCampaignCreateOrConnectWithoutMediasInput
    upsert?: AdCampaignUpsertWithoutMediasInput
    connect?: AdCampaignWhereUniqueInput
    update?: XOR<XOR<AdCampaignUpdateToOneWithWhereWithoutMediasInput, AdCampaignUpdateWithoutMediasInput>, AdCampaignUncheckedUpdateWithoutMediasInput>
  }

  export type AdPlayLogUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AdPlayLogCreateWithoutMediaInput, AdPlayLogUncheckedCreateWithoutMediaInput> | AdPlayLogCreateWithoutMediaInput[] | AdPlayLogUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdPlayLogCreateOrConnectWithoutMediaInput | AdPlayLogCreateOrConnectWithoutMediaInput[]
    upsert?: AdPlayLogUpsertWithWhereUniqueWithoutMediaInput | AdPlayLogUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: AdPlayLogCreateManyMediaInputEnvelope
    set?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    disconnect?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    delete?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    connect?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    update?: AdPlayLogUpdateWithWhereUniqueWithoutMediaInput | AdPlayLogUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AdPlayLogUpdateManyWithWhereWithoutMediaInput | AdPlayLogUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AdPlayLogScalarWhereInput | AdPlayLogScalarWhereInput[]
  }

  export type AdPlayLogUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<AdPlayLogCreateWithoutMediaInput, AdPlayLogUncheckedCreateWithoutMediaInput> | AdPlayLogCreateWithoutMediaInput[] | AdPlayLogUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: AdPlayLogCreateOrConnectWithoutMediaInput | AdPlayLogCreateOrConnectWithoutMediaInput[]
    upsert?: AdPlayLogUpsertWithWhereUniqueWithoutMediaInput | AdPlayLogUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: AdPlayLogCreateManyMediaInputEnvelope
    set?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    disconnect?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    delete?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    connect?: AdPlayLogWhereUniqueInput | AdPlayLogWhereUniqueInput[]
    update?: AdPlayLogUpdateWithWhereUniqueWithoutMediaInput | AdPlayLogUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: AdPlayLogUpdateManyWithWhereWithoutMediaInput | AdPlayLogUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: AdPlayLogScalarWhereInput | AdPlayLogScalarWhereInput[]
  }

  export type AdMediaCreateNestedOneWithoutPlayLogsInput = {
    create?: XOR<AdMediaCreateWithoutPlayLogsInput, AdMediaUncheckedCreateWithoutPlayLogsInput>
    connectOrCreate?: AdMediaCreateOrConnectWithoutPlayLogsInput
    connect?: AdMediaWhereUniqueInput
  }

  export type AdMediaUpdateOneRequiredWithoutPlayLogsNestedInput = {
    create?: XOR<AdMediaCreateWithoutPlayLogsInput, AdMediaUncheckedCreateWithoutPlayLogsInput>
    connectOrCreate?: AdMediaCreateOrConnectWithoutPlayLogsInput
    upsert?: AdMediaUpsertWithoutPlayLogsInput
    connect?: AdMediaWhereUniqueInput
    update?: XOR<XOR<AdMediaUpdateToOneWithWhereWithoutPlayLogsInput, AdMediaUpdateWithoutPlayLogsInput>, AdMediaUncheckedUpdateWithoutPlayLogsInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AuditLogCreateWithoutUserInput = {
    action: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntNullableFilter<"AuditLog"> | number | null
    action?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    timestamp?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type TicketCreateWithoutTicketTypeInput = {
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    counter?: CounterCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutTicketTypeInput = {
    id?: number
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    counterId?: number | null
  }

  export type TicketCreateOrConnectWithoutTicketTypeInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
  }

  export type TicketCreateManyTicketTypeInputEnvelope = {
    data: TicketCreateManyTicketTypeInput | TicketCreateManyTicketTypeInput[]
  }

  export type DailyCounterCreateWithoutTicketTypeInput = {
    date: string
    count?: number
  }

  export type DailyCounterUncheckedCreateWithoutTicketTypeInput = {
    id?: number
    date: string
    count?: number
  }

  export type DailyCounterCreateOrConnectWithoutTicketTypeInput = {
    where: DailyCounterWhereUniqueInput
    create: XOR<DailyCounterCreateWithoutTicketTypeInput, DailyCounterUncheckedCreateWithoutTicketTypeInput>
  }

  export type DailyCounterCreateManyTicketTypeInputEnvelope = {
    data: DailyCounterCreateManyTicketTypeInput | DailyCounterCreateManyTicketTypeInput[]
  }

  export type TicketUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTicketTypeInput, TicketUncheckedUpdateWithoutTicketTypeInput>
    create: XOR<TicketCreateWithoutTicketTypeInput, TicketUncheckedCreateWithoutTicketTypeInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTicketTypeInput, TicketUncheckedUpdateWithoutTicketTypeInput>
  }

  export type TicketUpdateManyWithWhereWithoutTicketTypeInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketTypeInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    number?: IntFilter<"Ticket"> | number
    code?: StringFilter<"Ticket"> | string
    status?: StringFilter<"Ticket"> | string
    issuedAt?: DateTimeFilter<"Ticket"> | Date | string
    calledAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    ticketTypeId?: IntFilter<"Ticket"> | number
    counterId?: IntNullableFilter<"Ticket"> | number | null
  }

  export type DailyCounterUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: DailyCounterWhereUniqueInput
    update: XOR<DailyCounterUpdateWithoutTicketTypeInput, DailyCounterUncheckedUpdateWithoutTicketTypeInput>
    create: XOR<DailyCounterCreateWithoutTicketTypeInput, DailyCounterUncheckedCreateWithoutTicketTypeInput>
  }

  export type DailyCounterUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: DailyCounterWhereUniqueInput
    data: XOR<DailyCounterUpdateWithoutTicketTypeInput, DailyCounterUncheckedUpdateWithoutTicketTypeInput>
  }

  export type DailyCounterUpdateManyWithWhereWithoutTicketTypeInput = {
    where: DailyCounterScalarWhereInput
    data: XOR<DailyCounterUpdateManyMutationInput, DailyCounterUncheckedUpdateManyWithoutTicketTypeInput>
  }

  export type DailyCounterScalarWhereInput = {
    AND?: DailyCounterScalarWhereInput | DailyCounterScalarWhereInput[]
    OR?: DailyCounterScalarWhereInput[]
    NOT?: DailyCounterScalarWhereInput | DailyCounterScalarWhereInput[]
    id?: IntFilter<"DailyCounter"> | number
    date?: StringFilter<"DailyCounter"> | string
    ticketTypeId?: IntFilter<"DailyCounter"> | number
    count?: IntFilter<"DailyCounter"> | number
  }

  export type TicketTypeCreateWithoutDailyCountsInput = {
    code: string
    description: string
    priority: string
    group: string
    active?: boolean
    tickets?: TicketCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateWithoutDailyCountsInput = {
    id?: number
    code: string
    description: string
    priority: string
    group: string
    active?: boolean
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeCreateOrConnectWithoutDailyCountsInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutDailyCountsInput, TicketTypeUncheckedCreateWithoutDailyCountsInput>
  }

  export type TicketTypeUpsertWithoutDailyCountsInput = {
    update: XOR<TicketTypeUpdateWithoutDailyCountsInput, TicketTypeUncheckedUpdateWithoutDailyCountsInput>
    create: XOR<TicketTypeCreateWithoutDailyCountsInput, TicketTypeUncheckedCreateWithoutDailyCountsInput>
    where?: TicketTypeWhereInput
  }

  export type TicketTypeUpdateToOneWithWhereWithoutDailyCountsInput = {
    where?: TicketTypeWhereInput
    data: XOR<TicketTypeUpdateWithoutDailyCountsInput, TicketTypeUncheckedUpdateWithoutDailyCountsInput>
  }

  export type TicketTypeUpdateWithoutDailyCountsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutDailyCountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    tickets?: TicketUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeCreateWithoutTicketsInput = {
    code: string
    description: string
    priority: string
    group: string
    active?: boolean
    dailyCounts?: DailyCounterCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateWithoutTicketsInput = {
    id?: number
    code: string
    description: string
    priority: string
    group: string
    active?: boolean
    dailyCounts?: DailyCounterUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeCreateOrConnectWithoutTicketsInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
  }

  export type CounterCreateWithoutTicketsInput = {
    number: number
    group?: string | null
    isHybrid?: boolean
  }

  export type CounterUncheckedCreateWithoutTicketsInput = {
    id?: number
    number: number
    group?: string | null
    isHybrid?: boolean
  }

  export type CounterCreateOrConnectWithoutTicketsInput = {
    where: CounterWhereUniqueInput
    create: XOR<CounterCreateWithoutTicketsInput, CounterUncheckedCreateWithoutTicketsInput>
  }

  export type TicketTypeUpsertWithoutTicketsInput = {
    update: XOR<TicketTypeUpdateWithoutTicketsInput, TicketTypeUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketTypeCreateWithoutTicketsInput, TicketTypeUncheckedCreateWithoutTicketsInput>
    where?: TicketTypeWhereInput
  }

  export type TicketTypeUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TicketTypeWhereInput
    data: XOR<TicketTypeUpdateWithoutTicketsInput, TicketTypeUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketTypeUpdateWithoutTicketsInput = {
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    dailyCounts?: DailyCounterUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    dailyCounts?: DailyCounterUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type CounterUpsertWithoutTicketsInput = {
    update: XOR<CounterUpdateWithoutTicketsInput, CounterUncheckedUpdateWithoutTicketsInput>
    create: XOR<CounterCreateWithoutTicketsInput, CounterUncheckedCreateWithoutTicketsInput>
    where?: CounterWhereInput
  }

  export type CounterUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CounterWhereInput
    data: XOR<CounterUpdateWithoutTicketsInput, CounterUncheckedUpdateWithoutTicketsInput>
  }

  export type CounterUpdateWithoutTicketsInput = {
    number?: IntFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    isHybrid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CounterUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    isHybrid?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TicketCreateWithoutCounterInput = {
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    ticketType: TicketTypeCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutCounterInput = {
    id?: number
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    ticketTypeId: number
  }

  export type TicketCreateOrConnectWithoutCounterInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCounterInput, TicketUncheckedCreateWithoutCounterInput>
  }

  export type TicketCreateManyCounterInputEnvelope = {
    data: TicketCreateManyCounterInput | TicketCreateManyCounterInput[]
  }

  export type TicketUpsertWithWhereUniqueWithoutCounterInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCounterInput, TicketUncheckedUpdateWithoutCounterInput>
    create: XOR<TicketCreateWithoutCounterInput, TicketUncheckedCreateWithoutCounterInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCounterInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCounterInput, TicketUncheckedUpdateWithoutCounterInput>
  }

  export type TicketUpdateManyWithWhereWithoutCounterInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCounterInput>
  }

  export type AdMediaCreateWithoutCampaignInput = {
    type: string
    path: string
    duration: number
    description?: string | null
    playLogs?: AdPlayLogCreateNestedManyWithoutMediaInput
  }

  export type AdMediaUncheckedCreateWithoutCampaignInput = {
    id?: number
    type: string
    path: string
    duration: number
    description?: string | null
    playLogs?: AdPlayLogUncheckedCreateNestedManyWithoutMediaInput
  }

  export type AdMediaCreateOrConnectWithoutCampaignInput = {
    where: AdMediaWhereUniqueInput
    create: XOR<AdMediaCreateWithoutCampaignInput, AdMediaUncheckedCreateWithoutCampaignInput>
  }

  export type AdMediaCreateManyCampaignInputEnvelope = {
    data: AdMediaCreateManyCampaignInput | AdMediaCreateManyCampaignInput[]
  }

  export type AdMediaUpsertWithWhereUniqueWithoutCampaignInput = {
    where: AdMediaWhereUniqueInput
    update: XOR<AdMediaUpdateWithoutCampaignInput, AdMediaUncheckedUpdateWithoutCampaignInput>
    create: XOR<AdMediaCreateWithoutCampaignInput, AdMediaUncheckedCreateWithoutCampaignInput>
  }

  export type AdMediaUpdateWithWhereUniqueWithoutCampaignInput = {
    where: AdMediaWhereUniqueInput
    data: XOR<AdMediaUpdateWithoutCampaignInput, AdMediaUncheckedUpdateWithoutCampaignInput>
  }

  export type AdMediaUpdateManyWithWhereWithoutCampaignInput = {
    where: AdMediaScalarWhereInput
    data: XOR<AdMediaUpdateManyMutationInput, AdMediaUncheckedUpdateManyWithoutCampaignInput>
  }

  export type AdMediaScalarWhereInput = {
    AND?: AdMediaScalarWhereInput | AdMediaScalarWhereInput[]
    OR?: AdMediaScalarWhereInput[]
    NOT?: AdMediaScalarWhereInput | AdMediaScalarWhereInput[]
    id?: IntFilter<"AdMedia"> | number
    campaignId?: IntFilter<"AdMedia"> | number
    type?: StringFilter<"AdMedia"> | string
    path?: StringFilter<"AdMedia"> | string
    duration?: IntFilter<"AdMedia"> | number
    description?: StringNullableFilter<"AdMedia"> | string | null
  }

  export type AdCampaignCreateWithoutMediasInput = {
    name: string
    startDate: Date | string
    endDate: Date | string
    active?: boolean
  }

  export type AdCampaignUncheckedCreateWithoutMediasInput = {
    id?: number
    name: string
    startDate: Date | string
    endDate: Date | string
    active?: boolean
  }

  export type AdCampaignCreateOrConnectWithoutMediasInput = {
    where: AdCampaignWhereUniqueInput
    create: XOR<AdCampaignCreateWithoutMediasInput, AdCampaignUncheckedCreateWithoutMediasInput>
  }

  export type AdPlayLogCreateWithoutMediaInput = {
    playedAt?: Date | string
    duration: number
  }

  export type AdPlayLogUncheckedCreateWithoutMediaInput = {
    id?: number
    playedAt?: Date | string
    duration: number
  }

  export type AdPlayLogCreateOrConnectWithoutMediaInput = {
    where: AdPlayLogWhereUniqueInput
    create: XOR<AdPlayLogCreateWithoutMediaInput, AdPlayLogUncheckedCreateWithoutMediaInput>
  }

  export type AdPlayLogCreateManyMediaInputEnvelope = {
    data: AdPlayLogCreateManyMediaInput | AdPlayLogCreateManyMediaInput[]
  }

  export type AdCampaignUpsertWithoutMediasInput = {
    update: XOR<AdCampaignUpdateWithoutMediasInput, AdCampaignUncheckedUpdateWithoutMediasInput>
    create: XOR<AdCampaignCreateWithoutMediasInput, AdCampaignUncheckedCreateWithoutMediasInput>
    where?: AdCampaignWhereInput
  }

  export type AdCampaignUpdateToOneWithWhereWithoutMediasInput = {
    where?: AdCampaignWhereInput
    data: XOR<AdCampaignUpdateWithoutMediasInput, AdCampaignUncheckedUpdateWithoutMediasInput>
  }

  export type AdCampaignUpdateWithoutMediasInput = {
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdCampaignUncheckedUpdateWithoutMediasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdPlayLogUpsertWithWhereUniqueWithoutMediaInput = {
    where: AdPlayLogWhereUniqueInput
    update: XOR<AdPlayLogUpdateWithoutMediaInput, AdPlayLogUncheckedUpdateWithoutMediaInput>
    create: XOR<AdPlayLogCreateWithoutMediaInput, AdPlayLogUncheckedCreateWithoutMediaInput>
  }

  export type AdPlayLogUpdateWithWhereUniqueWithoutMediaInput = {
    where: AdPlayLogWhereUniqueInput
    data: XOR<AdPlayLogUpdateWithoutMediaInput, AdPlayLogUncheckedUpdateWithoutMediaInput>
  }

  export type AdPlayLogUpdateManyWithWhereWithoutMediaInput = {
    where: AdPlayLogScalarWhereInput
    data: XOR<AdPlayLogUpdateManyMutationInput, AdPlayLogUncheckedUpdateManyWithoutMediaInput>
  }

  export type AdPlayLogScalarWhereInput = {
    AND?: AdPlayLogScalarWhereInput | AdPlayLogScalarWhereInput[]
    OR?: AdPlayLogScalarWhereInput[]
    NOT?: AdPlayLogScalarWhereInput | AdPlayLogScalarWhereInput[]
    id?: IntFilter<"AdPlayLog"> | number
    mediaId?: IntFilter<"AdPlayLog"> | number
    playedAt?: DateTimeFilter<"AdPlayLog"> | Date | string
    duration?: IntFilter<"AdPlayLog"> | number
  }

  export type AdMediaCreateWithoutPlayLogsInput = {
    type: string
    path: string
    duration: number
    description?: string | null
    campaign: AdCampaignCreateNestedOneWithoutMediasInput
  }

  export type AdMediaUncheckedCreateWithoutPlayLogsInput = {
    id?: number
    campaignId: number
    type: string
    path: string
    duration: number
    description?: string | null
  }

  export type AdMediaCreateOrConnectWithoutPlayLogsInput = {
    where: AdMediaWhereUniqueInput
    create: XOR<AdMediaCreateWithoutPlayLogsInput, AdMediaUncheckedCreateWithoutPlayLogsInput>
  }

  export type AdMediaUpsertWithoutPlayLogsInput = {
    update: XOR<AdMediaUpdateWithoutPlayLogsInput, AdMediaUncheckedUpdateWithoutPlayLogsInput>
    create: XOR<AdMediaCreateWithoutPlayLogsInput, AdMediaUncheckedCreateWithoutPlayLogsInput>
    where?: AdMediaWhereInput
  }

  export type AdMediaUpdateToOneWithWhereWithoutPlayLogsInput = {
    where?: AdMediaWhereInput
    data: XOR<AdMediaUpdateWithoutPlayLogsInput, AdMediaUncheckedUpdateWithoutPlayLogsInput>
  }

  export type AdMediaUpdateWithoutPlayLogsInput = {
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    campaign?: AdCampaignUpdateOneRequiredWithoutMediasNestedInput
  }

  export type AdMediaUncheckedUpdateWithoutPlayLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    campaignId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutLogsInput = {
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: number
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: number
    action: string
    details?: string | null
    timestamp?: Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyTicketTypeInput = {
    id?: number
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    counterId?: number | null
  }

  export type DailyCounterCreateManyTicketTypeInput = {
    id?: number
    date: string
    count?: number
  }

  export type TicketUpdateWithoutTicketTypeInput = {
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counter?: CounterUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counterId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DailyCounterUpdateWithoutTicketTypeInput = {
    date?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DailyCounterUncheckedUpdateWithoutTicketTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type DailyCounterUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyCounterInput = {
    id?: number
    number: number
    code: string
    status?: string
    issuedAt?: Date | string
    calledAt?: Date | string | null
    finishedAt?: Date | string | null
    ticketTypeId: number
  }

  export type TicketUpdateWithoutCounterInput = {
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketType?: TicketTypeUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutCounterInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyWithoutCounterInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type AdMediaCreateManyCampaignInput = {
    id?: number
    type: string
    path: string
    duration: number
    description?: string | null
  }

  export type AdMediaUpdateWithoutCampaignInput = {
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    playLogs?: AdPlayLogUpdateManyWithoutMediaNestedInput
  }

  export type AdMediaUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    playLogs?: AdPlayLogUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type AdMediaUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AdPlayLogCreateManyMediaInput = {
    id?: number
    playedAt?: Date | string
    duration: number
  }

  export type AdPlayLogUpdateWithoutMediaInput = {
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AdPlayLogUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type AdPlayLogUncheckedUpdateManyWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketTypeCountOutputTypeDefaultArgs instead
     */
    export type TicketTypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CounterCountOutputTypeDefaultArgs instead
     */
    export type CounterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CounterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdCampaignCountOutputTypeDefaultArgs instead
     */
    export type AdCampaignCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdCampaignCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdMediaCountOutputTypeDefaultArgs instead
     */
    export type AdMediaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdMediaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketTypeDefaultArgs instead
     */
    export type TicketTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyCounterDefaultArgs instead
     */
    export type DailyCounterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyCounterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CounterDefaultArgs instead
     */
    export type CounterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CounterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdCampaignDefaultArgs instead
     */
    export type AdCampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdCampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdMediaDefaultArgs instead
     */
    export type AdMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdPlayLogDefaultArgs instead
     */
    export type AdPlayLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdPlayLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditLogDefaultArgs instead
     */
    export type AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConfigDefaultArgs instead
     */
    export type ConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConfigDefaultArgs<ExtArgs>

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